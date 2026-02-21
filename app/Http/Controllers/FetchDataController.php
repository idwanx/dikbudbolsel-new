<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Models\Jenjang;
use App\Models\Penerima;
use App\Models\Sekolah;
use App\Models\SubJenisTransaksi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FetchDataController extends Controller
{
    public $roleuser;

    public function __construct()
    {
        $this->roleuser = Auth::user()->roleuser()->firstOrFail();
    }

    public function getSekolah(Jenjang $jenjang)
    {
        $sekolahs = Sekolah::where('jenjang_id', $jenjang->id)
        ->orderBy('nama_sekolah', 'asc')->get(['npsn', 'nama_sekolah']);

        return response()->json([
            'sekolahs' => $sekolahs
        ]);
    }

    public function getPenerima()
    {
         $penerimas = Penerima::select('id', 'nama_penerima', 'alamat', 'no_rekening', 'nama_bank', 'npwp')
            ->where('sekolah_id', $this->roleuser->sekolah_id)
            ->orderBy('sekolah_id', 'desc');

        return response()->json([
            'penerimas' => $penerimas
        ]);
    }

    public function getRkas(Request $request)
    {
        switch ($request->sumberdana) {
            case 'bosp-reguler': 
                $sumberDana = 1;
                break;
            case 'bosp-kinerja': 
                $sumberDana = 2;
                break;
            default: abort(404); break;
        }

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
        ->where([
            'sekolah_id' => $this->roleuser->sekolah_id,
            'sumber_dana_id' => $sumberDana,
            'tahun' => $request->tahun
        ])
        ->orderBy('rkas.id', 'asc')
        ->get();

        return response()->json([
            'rkas' => $rkas,
            'penerimas' => Penerima::select('id', 'nama_penerima', 'no_rekening', 'nama_bank')->where('sekolah_id', $this->roleuser->sekolah_id)->orderBy('nama_penerima', 'asc')->get(),
            'pajaks' => SubJenisTransaksi::select('id', 'sub_jenis_transaksi', 'nilai')->where('jenis_transaksi_id', 2)->get(),
        ]);
    }
}
