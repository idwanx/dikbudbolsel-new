<?php

namespace App\Observers;

use App\Models\Sekolah;
use Illuminate\Support\Facades\Cache;

class SekolahObserver
{
    /**
     * Handle the Sekolah "created" event.
     */
    public function created(Sekolah $sekolah): void
    {
        Cache::forget('daftarSekolahs');
    }

    /**
     * Handle the Sekolah "updated" event.
     */
    public function updated(Sekolah $sekolah): void
    {
        Cache::forget('daftarSekolahs');
    }

    /**
     * Handle the Sekolah "deleted" event.
     */
    public function deleted(Sekolah $sekolah): void
    {
        Cache::forget('daftarSekolahs');
    }

    /**
     * Handle the Sekolah "restored" event.
     */
    public function restored(Sekolah $sekolah): void
    {
        //
    }

    /**
     * Handle the Sekolah "force deleted" event.
     */
    public function forceDeleted(Sekolah $sekolah): void
    {
        //
    }
}
