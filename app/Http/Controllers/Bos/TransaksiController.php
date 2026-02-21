<?php

namespace App\Http\Controllers\Bos;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bos\PengajuanRequest;
use App\Models\Pengajuan;
use App\Models\Transaksi;
use Exception;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Collection;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class TransaksiController extends Controller
{
    public $roleuser;

    public function __construct()
    {
        $this->roleuser = Auth::user()->roleuser()->firstOrFail();
    }

    public function index(int $tahun, Request $request): Response
    {
        return Inertia::render('bos/transaksi', [

        ]);
    }

    public function store_transaksi(PengajuanRequest $request)
    {
        if(Gate::denies('isKepsekBendahara')) {
            abort(404);
        }

        $collect = collect($request->optionpajaks);

        try {
            if (!empty($request->input('optionpajaks'))) {
                $transaksi = Transaksi::create([
                    'sekolah_id' => $this->roleuser->sekolah_id,
                    'pengajuan_id' => $request->pengajuan_id,
                    'penerima_id' => $request->penerima_id,
                    'rka_id' => $request->rka_id,
                    'sumber_dana_id' => $request->sumber_dana_id,
                    'rincian_belanja_id' => $request->rincian_belanja_id,
                    'sub_jenis_transaksi_id' => 1,
                    'uraian' => $request->uraian,
                    'nominal' => $request->nominal-$collect->sum('jumlah_pajak'),
                ]);

                foreach ($request->optionpajaks as $row) {
                    $explodePajak = explode('-', $row['pajak_id']);

                    $transaksi = Transaksi::create([
                        'sekolah_id' => $this->roleuser->sekolah_id,
                        'pengajuan_id' => $request->pengajuan_id,
                        'penerima_id' => $request->penerima_pajak,
                        'rka_id' => $request->rka_id,
                        'sumber_dana_id' => $request->sumber_dana_id,
                        'rincian_belanja_id' => $request->rincian_belanja_id,
                        'sub_jenis_transaksi_id' => $explodePajak[0],
                        'parent_id' => $transaksi->id,
                        'uraian' => $explodePajak[1]." - ".$request->uraian,
                        'nominal' => $row['jumlah_pajak'],
                    ]);
                }
            } else {
                $transaksi = Transaksi::create([
                    'sekolah_id' => $this->roleuser->sekolah_id,
                    'pengajuan_id' => $request->pengajuan_id,
                    'penerima_id' => $request->penerima_id,
                    'rka_id' => $request->rka_id,
                    'sumber_dana_id' => $request->sumber_dana_id,
                    'rincian_belanja_id' => $request->rincian_belanja_id,
                    'sub_jenis_transaksi_id' => 1,
                    'uraian' => $request->uraian,
                    'nominal' => $request->nominal,
                ]);
            }

            if ($transaksi->wasRecentlyCreated) {
                Inertia::flash([
                    'status' => 'success',
                    'message' => 'Rincian pengajuan berhasil ditambahkan.',
                ]);
                
                return back();
            }

        } catch (Exception) {
            
            Inertia::flash([
                'type' => 'error',
                'message' => 'Rincian pengajuan gagal ditambahkan, hubungi admin.',
            ]);

            return back();
        }
    }

    public function validasi_transaksi(Request $request): RedirectResponse
    {
        $findPengajuan = Pengajuan::select('id', 'validated_at')->where('slug', $request->nomor)->firstOrFail();
        
        $findPengajuan->update([
            'validated_at' => now(),
            'status' => 'divalidasi',
        ]);

        // foreach ($request->data as $item) {
        //     DB::table('transaksis')->select('transaksis.*')
        //         ->where('id', $item)
        //         ->update([
        //             'status' => 'divalidasi'
        //         ]);
        // }

        $transaksis = Transaksi::where('pengajuan_id', $findPengajuan->id)
        ->chunkById(200, function (Collection $transaksis) {
            $transaksis->each->update(['status' => 'divalidasi']);
        }, column: 'id');

        // $findPengajuan->transaksis()->update([
        //     'status' => 'divalidasi',
        // ]);

        Inertia::flash([
            'status' => 'success',
            'message' => 'Rincian pengajuan berhasil divalidasi.',
            'rincians' => $transaksis,
        ]);
            
        return back();
    }

    public function destroy_transaksi(Transaksi $transaksi): RedirectResponse
    {
        if(Gate::denies('canAkses', $transaksi)) {
            abort(404);
        }

        try {
            $transaksi->delete();

            Inertia::flash([
                'status' => 'success',
                'message' => 'Pengajuan '.$transaksi->uraian.' berhasil dihapus',
            ]);
            
            return back();

        } catch (Exception) {
            $transaksi->delete();

            Inertia::flash([
                'status' => 'error',
                'message' => 'Gagal dihapus, hubungi admin',
            ]);

            return back();
        }
    }
}
