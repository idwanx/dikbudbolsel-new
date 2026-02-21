<?php

namespace App\Http\Controllers\DataPendukung;

use App\Http\Controllers\Controller;
use App\Http\Requests\DataPendukung\PenerimaRequest;
use App\Http\Resources\DataPendukung\PenerimaResource;
use App\Models\Penerima;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Str;
use Exception;
use Illuminate\Support\Facades\Auth;

class PenerimaController extends Controller
{
    public $roleuser;
    public $loadDefault = '15';

    public function __construct()
    {
        $this->roleuser = Auth::user()->roleuser()->firstOrFail();
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if ($this->roleuser->slug === "admin" || $this->roleuser->slug === "approval" || $this->roleuser->slug === "checker") {
            $penerimas = Penerima::select('penerimas.id', 'penerimas.nama_penerima', 'penerimas.alamat', 'penerimas.no_rekening', 'penerimas.nama_bank', 'penerimas.npwp', 'sekolahs.nama_sekolah')
            ->leftJoin('sekolahs', 'penerimas.sekolah_id', '=', 'sekolahs.id')
            ->orderBy('penerimas.sekolah_id', 'desc');
        } else {
            $penerimas = Penerima::select('id', 'nama_penerima', 'alamat', 'no_rekening', 'nama_bank', 'npwp')
            ->where('sekolah_id', $this->roleuser->sekolah_id)
            ->orderBy('sekolah_id', 'desc');
        }

        return Inertia::render('data-pendukung/penerima/main', [
            'penerimas' => PenerimaResource::collection($penerimas->paginate($request->load ?? $this->loadDefault)->withQueryString()),
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
    public function store(PenerimaRequest $request): RedirectResponse
    {
        
        try {
            Penerima::create([
                'sekolah_id' => $this->roleuser->sekolah_id,
                'nama_penerima' => $request->nama_penerima,
                'alamat' => $request->alamat,
                'no_rekening' => $request->no_rekening,
                'nama_bank' => $request->nama_bank,
                'npwp' => $request->npwp
            ]);

            return back()->with([
                'type' => 'success',
                'message' => 'Penerima berhasil ditambahkan',
            ]);
            
        } catch (Exception) {
            return back()->with([
                'type' => 'error',
                'message' => 'Gagal ditambahkan, hubungi admin',
            ]);
        }
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
    public function update(Penerima $penerima, PenerimaRequest $request): RedirectResponse
    {
        try {
            $penerima->update([
                'nama_penerima' => $request->nama_penerima,
                'alamat' => $request->alamat,
                'no_rekening' => $request->no_rekening,
                'nama_bank' => $request->nama_bank,
                'npwp' => $request->npwp
            ]);

            return back()->with([
                'type' => 'success',
                'message' => 'Penerima berhasil disimpan',
            ]);
            
        } catch (Exception) {
            return back()->with([
                'type' => 'error',
                'message' => 'Gagal diupdate, hubungi admin',
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Penerima $penerima): RedirectResponse
    {
        try {
            $penerima->delete();

            return back()->with([
                'type' => 'success',
                'message' => 'Penerima '.$penerima->nama_penerima.' berhasil dihapus',
            ]);
            
        } catch (Exception) {
            return back()->with([
                'type' => 'error',
                'message' => 'Gagal dihapus, hubungi admin',
            ]);
        }
    }
}
