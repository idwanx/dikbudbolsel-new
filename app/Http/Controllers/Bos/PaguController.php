<?php

namespace App\Http\Controllers\Bos;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bos\RekapRkasRequest;
use App\Imports\PaguAnggaranImport;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Gate;

class PaguController extends Controller
{
    public function index(RekapRkasRequest $request): Response
    {
        if(Gate::denies('isTimDinas')) {
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

            $pagu = DB::table('pagu_anggarans')
            ->select('pagu_anggarans.id', 'pagu_anggarans.jumlah', 'sekolahs.id', 'sekolahs.npsn', 'sekolahs.nama_sekolah', 'sekolahs.status')
            ->leftJoin('sekolahs', 'pagu_anggarans.sekolah_id', '=', 'sekolahs.id')
            ->leftJoin('jenjangs', 'sekolahs.jenjang_id', '=', 'jenjangs.id')
            ->where([
                'pagu_anggarans.tahun' => $request->tahun,
                'pagu_anggarans.sumber_dana_id' => $sumberDana,
                'jenjangs.slug' => $request->jenjangs
            ])->get();
        }

        return Inertia::render('bos/pagu/rincian-pagu', [
            'pagu' => $request->jenjangs ? $pagu : null,
            'jenjangs' => $request->jenjangs,
            'sumberdana' => $request->sumberdana,
        ]);
    }

    public function import(Request $request)
    {
        if(Gate::denies('isTimDinas')) {
            abort(404);
        }
        
        $file = $request->file('file');
        
        Excel::import(new PaguAnggaranImport($request->tahun, $request->sumberdana), $file);
        
        return back()->with('success', 'Data imported and processed successfully!');
    }
}
