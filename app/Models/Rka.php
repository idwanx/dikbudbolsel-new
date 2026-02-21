<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Rka extends Model
{
    protected $fillable = [
        'sekolah_id',
        'sumber_dana_id',
        'tahun',
        'rincian_belanja_id',
        'kegiatan_id',
        'jumlah',
        'realisasi',
    ];

    public function sekolah(): BelongsTo
    {
        return $this->belongsTo(Sekolah::class);
    }

    public function rincianBelanja(): BelongsTo
    {
        return $this->belongsTo(RincianBelanja::class);
    }

    public function kegiatan(): BelongsTo
    {
        return $this->belongsTo(Kegiatan::class);
    }

    public function perubahans(): HasMany
    {
        return $this->hasMany(PerubahanRka::class);
    }

    public function transaksis(): HasMany
    {
        return $this->hasMany(Transaksi::class);
    }
}
