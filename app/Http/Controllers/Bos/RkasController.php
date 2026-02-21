<?php

namespace App\Http\Controllers\Bos;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bos\RekapRkasRequest;
use App\Imports\RkasImport;
use Illuminate\Database\Query\JoinClause;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Validators\ValidationException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\Gate;

class RkasController extends Controller
{

    public $roleuser;

    public function __construct()
    {
        $this->roleuser = Auth::user()->roleuser()->firstOrFail();
    }

    public function rincian(Request $request): RedirectResponse
    {
        if ($this->roleuser->slug === "admin" || $this->roleuser->slug === "approval" || $this->roleuser->slug === "checker") {
            return redirect()->route('bos.rkas.detailRincian', [
                'tahun' => $request->tahun,
            ]);
        } else {
            return redirect()->route('bos.rkas.detailRincian', [
                'tahun' => $request->tahun,
                'jenjangs' => $this->roleuser->jenjang,
                'npsn' => $this->roleuser->npsn,
                'sumberdana' => 'bosp-reguler'
            ]);
        }
    }

    public function detail_rincian(RekapRkasRequest $request): Response
    {
        if(Gate::denies('isTimBos')) {
            abort(404);
        }

        
        if ($request->sumberdana) {
            switch ($request->sumberdana) {
                case 'bosp-reguler': 
                    $sumberDana = 1;
                    break;
                case 'bosp-kinerja': 
                    $sumberDana = 2;
                    break;
                default: abort(404); break;
            }

            $dinas = ($this->roleuser->slug === "admin" || $this->roleuser->slug === "approval" || $this->roleuser->slug === "checker");

            $sekolah = DB::table('sekolahs')->select('sekolahs.id', 'sekolahs.nama_sekolah', 'pagu_anggarans.jumlah')
            ->when($dinas, function (Builder $query, bool $dinas) use ($request) {
                $query->where('npsn', $request->npsn);
            }, function (Builder $query) {
                $query->where('sekolahs.id', $this->roleuser->sekolah_id);
            })
            ->leftJoin('pagu_anggarans', function (JoinClause $join) use ($request) {
                $join->on('sekolahs.id', '=', 'pagu_anggarans.sekolah_id')
                    ->where([
                        'pagu_anggarans.sumber_dana_id' => 1,
                        'pagu_anggarans.tahun' => $request->tahun
                    ]);
            })->firstOrFail();

            $rkas = DB::table('rkas')
            ->leftJoin('rincian_belanjas', 'rkas.rincian_belanja_id', '=', 'rincian_belanjas.id')
            ->leftJoin('jenis_belanjas', 'rincian_belanjas.jenis_belanja_id', '=', 'jenis_belanjas.id')
            ->leftJoin('kegiatans', 'rkas.kegiatan_id', '=', 'kegiatans.id')
            ->leftJoin('sub_programs', 'kegiatans.sub_program_id', '=', 'sub_programs.id')
            ->leftJoin('programs', 'sub_programs.program_id', '=', 'programs.id')
            ->select(['rkas.id', 'rkas.sekolah_id', 'rkas.sumber_dana_id', 'rkas.tahun', 'rkas.jumlah', 'rkas.realisasi', 'rkas.rincian_belanja_id', 'rkas.kegiatan_id', 
            'rincian_belanjas.kode_rincian_belanja', 'rincian_belanjas.nama_rincian_belanja', 
            'jenis_belanjas.nama_jenis_belanja', 
            'kegiatans.sub_program_id', 'kegiatans.kode_kegiatan', 'kegiatans.uraian_kegiatan', 
            'sub_programs.program_id', 'sub_programs.kode_sub_program', 'sub_programs.uraian_sub_program', 
            'programs.kode_program', 'programs.uraian_program'])
            ->when($dinas, function (Builder $query) use ($request, $sumberDana, $sekolah) {
                $query->where([
                    'sekolah_id' => $sekolah->id,
                    'sumber_dana_id' => $sumberDana,
                    'tahun' => $request->tahun
                ]);
            }, function (Builder $query) use ($request, $sumberDana) {
                $query->where([
                    'sekolah_id' => $this->roleuser->sekolah_id,
                    'sumber_dana_id' => $sumberDana,
                    'tahun' => $request->tahun
                ]);
            })
            ->orderBy('rkas.id', 'asc')
            ->get();
        }

        return Inertia::render('bos/rkas/rincian-rkas', [
            'sekolah' => $request->sumberdana ? $sekolah : null,
            'rkas' => $request->sumberdana ? $rkas : null,
            'jenjangs' => $request->jenjangs,
            'npsn' => $request->npsn,
            'sumberdana' => $request->sumberdana ? $request->sumberdana : null,
        ]);
    }

    public function rekapitulasi(Request $request): RedirectResponse
    {
        if ($this->roleuser->slug === "admin" || $this->roleuser->slug === "approval" || $this->roleuser->slug === "checker") {
            return redirect()->route('bos.rkas.detailRekapitulasi', [
                'tahun' => $request->tahun,
            ]);
        } else {
            return redirect()->route('bos.rkas.detailRekapitulasi', [
                'tahun' => $request->tahun,
                'jenjangs' => $this->roleuser->jenjang,
                'sumberdana' => 'bosp-reguler'
            ]);
        }
    }

    public function detail_rekapitulasi(RekapRkasRequest $request): Response
    {
        if(Gate::denies('isTimBos')) {
            abort(404);
        }

        if ($request->sumberdana) {
            switch ($request->sumberdana) {
                case 'bosp-reguler': 
                    $sumberDana = 1;
                    break;
                case 'bosp-kinerja': 
                    $sumberDana = 2;
                    break;
                default: abort(404); break;
            }

            if ($this->roleuser->slug === "admin" || $this->roleuser->slug === "approval" || $this->roleuser->slug === "checker") {
                $daftarRkas = DB::table('rkas')
                    ->select('rkas.sekolah_id', DB::raw('SUM(CASE WHEN (rincian_belanjas.jenis_belanja_id = 1) THEN jumlah ELSE 0 END) as total_belanja_operasi,
                        SUM(CASE WHEN (rincian_belanjas.jenis_belanja_id = 2) THEN jumlah ELSE 0 END) as total_belanja_modal'))
                    ->leftJoin('rincian_belanjas', 'rkas.rincian_belanja_id', '=', 'rincian_belanjas.id')
                    ->where([
                        'rkas.sumber_dana_id' => $sumberDana,
                        'rkas.tahun' => $request->tahun
                    ])->groupBy('rkas.sekolah_id');
            
                $rkas = DB::table('sekolahs')
                    ->joinSub($daftarRkas, 'daftar_rkas', function (JoinClause $join) {
                        $join->on('sekolahs.id', '=', 'daftar_rkas.sekolah_id');
                    })
                    ->leftJoin('jenjangs', 'sekolahs.jenjang_id', '=', 'jenjangs.id')
                    ->where('jenjangs.slug', $request->jenjangs)
                    ->get();
            } else {
                $rkas = DB::table('rkas')
                    ->select('rkas.sekolah_id', 'sekolahs.npsn', 'sekolahs.nama_sekolah', 'sekolahs.status', DB::raw('SUM(CASE WHEN (rincian_belanjas.jenis_belanja_id = 1) THEN jumlah ELSE 0 END) as total_belanja_operasi,
                        SUM(CASE WHEN (rincian_belanjas.jenis_belanja_id = 2) THEN jumlah ELSE 0 END) as total_belanja_modal'))
                    ->leftJoin('rincian_belanjas', 'rkas.rincian_belanja_id', '=', 'rincian_belanjas.id')
                    ->leftJoin('sekolahs', 'rkas.sekolah_id', '=', 'sekolahs.id')
                    ->where([
                        'rkas.sumber_dana_id' => $sumberDana,
                        'rkas.tahun' => $request->tahun,
                        'rkas.sekolah_id' => $this->roleuser->sekolah_id
                    ])->groupBy('rkas.sekolah_id')->get();
            }
        }

        return Inertia::render('bos/rkas/rekap-rkas', [
            'sekolah' => $request->sumberdana ? $rkas : null,
            'jenjangs' => $request->jenjangs,
            'sumberdana' => $request->sumberdana,
        ]);
    }

    public function import(Request $request)
    {
        if(Gate::denies('isTimDinas')) {
            abort(404);
        }

        try {
            $file = $request->file('file');
        
            Excel::import(new RkasImport($request->tahun, $request->sekolahId, $request->sumberdana), $file);
            
            return back()->with('success', 'Data berhasil di import.');

        } catch (ValidationException $e) {
            $failures = $e->failures();
            $errors = [];

            foreach ($failures as $failure) {
                $errors[] = 'Pada file, Baris ke ' . $failure->row() . ': ' . implode(', ', $failure->errors());
            }

            return back()->withErrors($errors);
        }
    }
}
