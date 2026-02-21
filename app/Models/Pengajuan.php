<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Pengajuan extends Model
{
    protected $fillable = [
        'sekolah_id',
        'no_urut',
        'no_pengajuan',
        'slug',
        'status',
        'send_at',
        'validated_at',
        'approved_at',
    ];

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    protected function casts(): array
    {
        return [
            'created_at' => 'datetime',
        ];
    }

    public function transaksis(): HasMany
    {
        return $this->hasMany(Transaksi::class);
    }
}
