<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Transaksi extends Model
{
    protected $fillable = [
        'sekolah_id',
        'pengajuan_id',
        'penerima_id',
        'rka_id',
        'sumber_dana_id',
        'rincian_belanja_id',
        'sub_jenis_transaksi_id',
        'parent_id',
        'uraian',
        'nominal',
        'is_active',
        'saldo_awal',
        'status'
    ];

    protected function casts(): array
    {
        return [
            'created_at' => 'datetime',
        ];
    }
    
    public function pengajuan(): BelongsTo
    {
        return $this->belongsTo(Pengajuan::class);
    }

    public function rka(): BelongsTo
    {
        return $this->belongsTo(Rka::class);
    }
}

