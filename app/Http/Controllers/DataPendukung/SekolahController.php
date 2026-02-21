<?php

namespace App\Http\Controllers\DataPendukung;

use App\Http\Controllers\Controller;
use App\Http\Resources\DataPendukung\SekolahResource;
use App\Models\Jenjang;
use App\Models\Sekolah;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class SekolahController extends Controller
{
    public $loadDefault = '150';

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        
        $sekolahs = Sekolah::query()->select('sekolahs.npsn', 'sekolahs.nama_sekolah', 'sekolahs.status', 'jenjangs.nama_jenjang', 'jenjangs.id')
        // ->when(request('cari'), function ($q) use ($request) {
        //     $q->where('rincian_belanjas.nama_rincian_belanja', 'like', "%{$request->cari}%");
        // })
        ->leftJoin('jenjangs', 'sekolahs.jenjang_id', '=', 'jenjangs.id')
        ->orderBy('jenjangs.id', 'asc')->orderBy('sekolahs.nama_sekolah', 'asc');

        return Inertia::render('data-pendukung/sekolah/main', [
            'sekolahs' => SekolahResource::collection($sekolahs->paginate($request->load ?? $this->loadDefault)->withQueryString()),
            'jenjangs' => Jenjang::orderBy('id', 'asc')->get(['id', 'nama_jenjang'])
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
