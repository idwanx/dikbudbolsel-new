<?php

namespace App\Http\Controllers\Bos;

use App\Events\TransaksiEvent;
use App\Exports\TransaksisExport;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\Bos\DaftarPengajuanResource;
use App\Http\Resources\Bos\PengajuanResource;
use App\Http\Resources\Bos\RincianPengajuanResource;
use App\Models\Pengajuan;
use Maatwebsite\Excel\Facades\Excel;
use Carbon\Carbon;
use Exception;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Collection;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Str;

class PengajuanController extends Controller
{
    public $roleuser;

    public function __construct()
    {
        $this->roleuser = Auth::user()->roleuser()->firstOrFail();
    }

    public function index(Request $request)
    {
        if ($this->roleuser->slug === "admin" || $this->roleuser->slug === "approval" || $this->roleuser->slug === "checker") {
            return redirect()->route('bos.pengajuan.daftar', [
                'tahun' => $request->tahun,
                
            ]);
        } else {
            return redirect()->route('bos.pengajuan.rincian', [
                'tahun' => $request->tahun,
            ]);
        }
    }

    public function rincian(Request $request): Response
    {
        if(Gate::denies('isKepsekBendahara')) {
            abort(404);
        }

        if ($request->nomor) {
            $findPengajuan = Pengajuan::select('id', 'no_pengajuan', 'send_at', 'status', 'validated_at')->where('slug', $request->nomor)->firstOrFail();

            $transaksis = DB::table('transaksis')->select('transaksis.id', 'transaksis.uraian', 
            'transaksis.nominal', 'transaksis.rka_id', 'transaksis.status', 'transaksis.created_at', 
            'penerimas.alamat', 'penerimas.nama_penerima', 'penerimas.nama_bank', 'penerimas.no_rekening')
            ->leftJoin('penerimas', 'transaksis.penerima_id', '=', 'penerimas.id')
            ->where('transaksis.pengajuan_id', $findPengajuan->id,)
            ->get();
        }
        
        return Inertia::render('bos/pengajuan/rincian-pengajuan', [
            'daftarPengajuan' => Inertia::once(fn () => 
                PengajuanResource::collection(
                    DB::table('pengajuans')
                    ->select(['created_at', 'id', 'no_pengajuan', 'slug', 'status', 'sekolah_id', 'send_at', 'validated_at', 'approved_at'])
                    ->where('sekolah_id', $this->roleuser->sekolah_id)
                    ->whereYear('created_at', $request->tahun)
                    ->orderBy('created_at', 'desc')
                    ->get()
                )),
            'nomor' => $request->nomor,
            'pengajuan' => $request->nomor ? $findPengajuan : null,
            'rincianPengajuan' => $request->nomor ? RincianPengajuanResource::collection($transaksis) : null,
        ]);
    }

    public function daftar(Request $request): Response
    {
        
        if(Gate::denies('isTimBos')) {
            abort(404);
        }

        $npsn = $request->npsn;

        if ($request->npsn) {
            $sekolah = DB::table('sekolahs')
                        ->leftJoin('jenjangs', 'sekolahs.jenjang_id', '=', 'jenjangs.id')
                        ->select(['sekolahs.id', 'sekolahs.nama_sekolah', 'sekolahs.npsn', 'jenjangs.slug'])
                        ->where('sekolahs.npsn', $npsn)
                        ->firstOrFail();
        } else {
            $sekolah = null;
        }

        $pengajuans = DB::table('pengajuans')
        ->leftJoin('sekolahs', 'pengajuans.sekolah_id', '=', 'sekolahs.id')
        ->leftJoin('jenjangs', 'sekolahs.jenjang_id', '=', 'jenjangs.id')
        ->select(['pengajuans.approved_at', 'pengajuans.created_at', 'pengajuans.id', 'pengajuans.no_pengajuan', 'pengajuans.slug', 'pengajuans.send_at', 'pengajuans.validated_at', 'pengajuans.status', 'sekolahs.nama_sekolah', 'sekolahs.npsn', 'jenjangs.slug as jenjang'])
        ->when($npsn, function (Builder $query, string $npsn) {
            $query->where('pengajuans.status', '!=', 'draft')->where('sekolahs.npsn', $npsn);
        }, function (Builder $query) {
            $query->where([
                    'pengajuans.status' => 'validasi',
                    'pengajuans.validated_at' => null
                ])->orWhere('pengajuans.status', 'divalidasi')->where('pengajuans.approved_at', null);
        })
        ->whereYear('pengajuans.created_at', $request->tahun)
        ->orderBy('pengajuans.send_at', 'asc')
        ->get();

        return Inertia::render('bos/pengajuan/daftar-pengajuan', [
            'pengajuans' => DaftarPengajuanResource::collection($pengajuans),
            'jenjangs' => $request->jenjangs,
            'npsn' => $request->npsn,
            'sekolah' => $sekolah,
        ]);
    }

    public function daftar_rincian(Request $request): Response
    {
        if(Gate::denies('isTimBos')) {
            abort(404);
        }

        $sekolah = DB::table('sekolahs')
                    ->leftJoin('jenjangs', 'sekolahs.jenjang_id', '=', 'jenjangs.id')
                    ->select(['sekolahs.id', 'sekolahs.nama_sekolah', 'sekolahs.npsn', 'jenjangs.slug'])
                    ->where('sekolahs.npsn', $request->npsn)
                    ->firstOrFail();

        $findPengajuan = DB::table('pengajuans')->select('created_at', 'id', 'no_pengajuan', 'status', 'send_at', 'slug', 'sekolah_id', 'validated_at', 'approved_at')
                    ->where('slug', '=', $request->nomor)->where('status', '!=', 'draft')->firstOrFail();

        $transaksis = DB::table('transaksis')->select('transaksis.id', 'transaksis.uraian', 
                    'transaksis.nominal', 'transaksis.rka_id', 'transaksis.status', 'transaksis.created_at', 
                    'penerimas.alamat', 'penerimas.nama_penerima', 'penerimas.nama_bank', 'penerimas.no_rekening')
                    ->leftJoin('penerimas', 'transaksis.penerima_id', '=', 'penerimas.id')
                    ->where('transaksis.pengajuan_id', $findPengajuan->id,)
                    ->get();

        return Inertia::render('bos/pengajuan/daftar-rincian', [
            'sekolah' => $sekolah,
            'pengajuan' => new PengajuanResource($findPengajuan),
            'rincianPengajuan' => RincianPengajuanResource::collection($transaksis)
        ]);
    }

    public function new(Request $request): RedirectResponse
    {
        if(Gate::denies('isKepsekBendahara')) {
            abort(404);
        }

        $currentMonth = Carbon::now()->month;

        switch ($currentMonth) {
            case 1: 
                $bulan = 'I';
                break;
            case 2: 
                $bulan = 'II';
                break;
            case 3: 
                $bulan = 'III';
                break;
            case 4: 
                $bulan = 'IV';
                break;
            case 5: 
                $bulan = 'V';
                break;
            case 6: 
                $bulan = 'VI';
                break;
            case 7: 
                $bulan = 'VII';
                break;
            case 8: 
                $bulan = 'VIII';
                break;
            case 9: 
                $bulan = 'IX';
                break;
            case 10: 
                $bulan = 'X';
                break;
            case 11: 
                $bulan = 'XI';
                break;
            case 12: 
                $bulan = 'XII';
                break;
            default: abort(404); break;
        }

        $namaSekolah = str_replace(' ', '.', $this->roleuser->nama_sekolah);

        $getNomor = Pengajuan::select('no_urut')
        ->where('sekolah_id', $this->roleuser->sekolah_id)
        ->whereYear('created_at', $request->tahun)
        ->orderBy('id', 'desc')
        ->limit(1)
        ->first();

        $nomorUrut = $getNomor === null ? 1 : $getNomor->no_urut + 1;

        $nomorPengajuan = sprintf("%03d", $nomorUrut)."/".$namaSekolah."/BOLSEL/".$bulan."/".$request->tahun;

        try {
            $newPengajuan = Pengajuan::create([
                'sekolah_id' => $this->roleuser->sekolah_id,
                'no_urut' => $nomorUrut,
                'no_pengajuan' => $nomorPengajuan,
                'slug' => Str::slug($nomorPengajuan),
                'status' => "draft",
            ]);

            Inertia::flash([
                'status' => 'success',
                'data' => [
                    'approved_at' => $newPengajuan->approved_at !== null ? Carbon::parse($newPengajuan->approved_at)->format('d M Y, H:i') : null,
                    'created_at' => Carbon::parse($newPengajuan->created_at)->format('d M Y, H:i'),
                    'id' => $newPengajuan->id,
                    'no_pengajuan' => $newPengajuan->no_pengajuan,
                    'sekolah_id' => $newPengajuan->sekolah_id,
                    'send_at' => $newPengajuan->send_at !== null ? Carbon::parse($newPengajuan->send_at)->format('d M Y, H:i') : null,
                    'slug' => $newPengajuan->slug,
                    'status' => $newPengajuan->status,
                    'validated_at' => $newPengajuan->validated_at !== null ? Carbon::parse($newPengajuan->validated_at)->format('d M Y, H:i') : null,
                ]
            ]);

            return redirect()->route('bos.pengajuan.rincian', [
                'tahun' => $request->tahun,
                'nomor' => $newPengajuan->slug
            ]);
            
        } catch (Exception) {
            Inertia::flash([
                'status' => 'error',
                'message' => 'Terjadi kesalahan pada sistem, beritahu admin terkait masalah ini.',
            ]);

            return back();
        }
    }

    public function destroy(Pengajuan $pengajuan, Request $request): RedirectResponse
    {
        if(Gate::denies('canAkses', $pengajuan)) {
            abort(404);
        }

        try {
            $pengajuan->delete();
            
            Inertia::flash([
                'status' => 'success',
                'message' => 'Pengajuan '.$pengajuan->no_pengajuan.' berhasil dihapus',
            ]);

            return redirect()->route('bos.pengajuan.rincian', [
                'tahun' => $request->tahun,
            ]);

        } catch (Exception) {
            Inertia::flash([
                'status' => 'error',
                'message' => 'Terjadi kesalahan pada sistem, beritahu admin terkait masalah ini.',
            ]);

            return back();
        }
    }

    public function kirim_rincian(Request $request): RedirectResponse
    {
        if(Gate::denies('isKepsekBendahara')) {
            abort(404);
        }

        try {

            $pengajuan = Pengajuan::where([
                'slug' => $request->nomor,
                'send_at' => null
            ])->firstOrFail();

            $pengajuan->update([
                'send_at' => now(),
                'status' => 'validasi',
            ]);

            $pengajuan->transaksis()->update([
                'status' => 'validasi',
            ]);

            $newData = [
                'info' => "pengajuan-baru",
                'data' => [
                    'approved_at' => $pengajuan->approved_at !== null ? Carbon::parse($pengajuan->approved_at)->format('Y-m-d') : null,
                    'created_at' => $pengajuan->created_at !== null ? Carbon::parse($pengajuan->created_at)->format('d M Y, H:i') : null,
                    'dikirim' => Carbon::parse($pengajuan->send_at)->diffForHumans(),
                    'id' => $pengajuan->id,
                    'jenjang' => $this->roleuser->jenjang,
                    'nama_sekolah' => $this->roleuser->nama_sekolah,
                    'no_pengajuan' => $pengajuan->no_pengajuan,
                    'npsn' => $this->roleuser->npsn,
                    'slug' => $pengajuan->slug,
                    'status' => $pengajuan->status,
                    'validated_at' => $pengajuan->validated_at !== null ? Carbon::parse($pengajuan->validated_at)->format('d M Y, H:i') : null
                ]
            ];

            broadcast(new TransaksiEvent($this->roleuser->sekolah_id, $newData))->toOthers();

            Inertia::flash([
                'status' => 'success',
                'message' => 'Pengajuan berhasil dikirim.',
            ]);
            
            return back();

        } catch (Exception) {
            Inertia::flash([
                'type' => 'error',
                'message' => 'Gagal dikirim, hubungi admin.',
            ]);

            return back();
        }
    }

    public function batal_kirim(Request $request): RedirectResponse
    {
        if(Gate::denies('isKepsekBendahara')) {
            abort(404);
        }

        try {

            $pengajuan = Pengajuan::where('slug', $request->nomor)->firstOrFail();

            $pengajuan->update([
                'status' => 'draft',
                'send_at' => null,
            ]);

            $newData = [
                'info' => "pengajuan-batal",
                'data' => [
                    'id' => $pengajuan->id,
                ]
            ];

            broadcast(new TransaksiEvent($this->roleuser->sekolah_id, $newData))->toOthers();
            
            Inertia::flash([
                'status' => 'success',
                'message' => 'Pengajuan berhasil dibatalkan.',
            ]);
            
            return back();

        } catch (Exception) {
            Inertia::flash([
                'type' => 'error',
                'message' => 'Gagal dikirim, hubungi admin.',
            ]);

            return back();
        }
    }

    public function download_rincian(Pengajuan $pengajuan)
    {
        if(Gate::denies('canAkses', $pengajuan)) {
            abort(404);
        }

        $nomor = explode('/', $pengajuan->no_pengajuan);

        return Excel::download(new TransaksisExport($pengajuan->id), "pengajuan-{$nomor[0]}-{$this->roleuser->nama_sekolah}.xlsx");
    }

    
}


