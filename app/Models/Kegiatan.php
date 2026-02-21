<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Kegiatan extends Model
{
    protected $fillable = [
        'sub_program_id',
        'kode_kegiatan',
        'uraian_kegiatan',
    ];

    public function rka(): HasOne
    {
        return $this->hasOne(Rka::class);
    }
}
