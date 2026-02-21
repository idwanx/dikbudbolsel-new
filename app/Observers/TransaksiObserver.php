<?php

namespace App\Observers;

use App\Models\Rka;
use App\Models\Transaksi;
use Illuminate\Support\Facades\Log;

class TransaksiObserver
{
    /**
     * Handle the Transaksi "created" event.
     */
    
    public function created(Transaksi $transaksi): void
    {
        if ($transaksi->wasRecentlyCreated) {

            /** @var \App\Models\Rka $rka */

            $rka = Rka::find($transaksi->rka_id);

            $realisasi = $rka->realisasi + $transaksi->nominal;

            $rka->realisasi = $realisasi;

            $rka->save();
        }
    }

    /**
     * Handle the Transaksi "updated" event.
     */
    public function updated(Transaksi $transaksi): void
    {
        // Log::info("Perubahan status rincian transaksi " . $transaksi);
    }

    /**
     * Handle the Transaksi "deleted" event.
     */
    public function deleted(Transaksi $transaksi): void
    {
        /** @var \App\Models\Rka $rka */

        $rka = Rka::find($transaksi->rka_id);

        $realisasi = $rka->realisasi - $transaksi->nominal;

        $rka->realisasi = $realisasi;

        $rka->save();
    }

    /**
     * Handle the Transaksi "restored" event.
     */
    public function restored(Transaksi $transaksi): void
    {
        //
    }

    /**
     * Handle the Transaksi "force deleted" event.
     */
    public function forceDeleted(Transaksi $transaksi): void
    {
        //
    }
}
