<?php

namespace App\Observers;

use App\Models\PerubahanRka;
use App\Models\Rka;
use Illuminate\Support\Facades\Log;

class RkasObserver
{
    /**
     * Handle the Rka "created" event.
     */
    public function created(Rka $rka): void
    {

    }

    /**
     * Handle the Rka "updated" event.
     */
    public function updated(Rka $rka): void
    {
        $newData = $rka->getOriginal();

        $rka->perubahans()->createMany([$newData]);
        
    }

    /**
     * Handle the Rka "deleted" event.
     */
    public function deleted(Rka $rka): void
    {
        //
    }

    /**
     * Handle the Rka "restored" event.
     */
    public function restored(Rka $rka): void
    {
        //
    }

    /**
     * Handle the Rka "force deleted" event.
     */
    public function forceDeleted(Rka $rka): void
    {
        //
    }
}
