<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PerubahanRka extends Model
{
    protected $fillable = [
        'rka_id',
        'sekolah_id',
        'sumber_dana_id',
        'tahun',
        'rincian_belanja_id',
        'kegiatan_id',
        'jumlah',
    ];

    public function rka(): BelongsTo
    {
        return $this->belongsTo(Rka::class);
    }
}
