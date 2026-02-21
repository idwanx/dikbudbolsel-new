<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PaguAnggaran extends Model
{
    protected $fillable = [
        'sumber_dana_id',
        'tahun',
        'sekolah_id',
        'jumlah',
    ];

    public function sekolah(): BelongsTo
    {
        return $this->belongsTo(Sekolah::class);
    }
}
