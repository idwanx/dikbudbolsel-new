<?php

namespace App\Http\Controllers\Bos;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\Builder;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;


class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): Response
    {
        // $latestPosts = DB::table('transaksis')
        // ->select('rka_id', DB::raw('SUM(nominal) as total_sales'))
        // // ->where('is_published', true)
        // ->groupBy('rka_id');
    
        // $rkas = DB::table('rkas')
        //     ->joinSub($latestPosts, 'latest_posts', function (JoinClause $join) {
        //         $join->on('rkas.id', '=', 'latest_posts.rka_id');
        //     })->get();

        // $rkas = DB::table('rkas')
        // ->select('rkas.*')
        // ->selectSub(function ($query) {
        //     $query->selectRaw('SUM(transaksis.nominal)')
        //         ->from('transaksis')
        //         ->whereColumn('transaksis.rka_id', 'rkas.id');
        // }, 'total_realisasi')
        // ->where([
        //     'sekolah_id' => 65,
        //     'sumber_dana_id' => 1,
        //     'tahun' => 2026
        // ])->get();

        // $rkas = DB::table('sekolahs')
        // ->leftJoin('pagu_anggarans', function (JoinClause $join) {
        //     $join->on('sekolahs.id', '=', 'pagu_anggarans.sekolah_id')
        //         ->where([
        //             'pagu_anggarans.sumber_dana_id' => 1,
        //             'pagu_anggarans.tahun' => 2026
        //         ]);
        // })
        // ->where('sekolahs.npsn', '70041346')
        // ->firstOrFail();

        $rkas = DB::table('pengajuans')
        ->select('pengajuans.*')
        ->selectSub(function ($query) {
            $query->selectRaw('count(id)')
                ->from('transaksis')
                ->whereColumn('transaksis.pengajuan_id', 'pengajuans.id');
        }, 'total_realisasi')->get();

        // ->select(DB::raw('count(*) as user_count, status'))


        return Inertia::render('bos/dashboard', [
            'rkas' => $rkas
        ]);
    }
}
