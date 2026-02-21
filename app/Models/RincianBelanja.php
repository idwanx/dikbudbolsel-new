<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class RincianBelanja extends Model
{
    protected $fillable = [
        'jenis_belanja_id',
        'kode_rincian_belanja',
        'nama_rincian_belanja',
    ];

    public function rka(): HasOne
    {
        return $this->hasOne(Rka::class);
    }
}
