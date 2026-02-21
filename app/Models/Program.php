<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Program extends Model
{
    protected $fillable = [
        'jenjang_id',
        'kode_program',
        'uraian_program',
    ];

    public function jenjang(): BelongsTo
    {
        return $this->belongsTo(Jenjang::class);
    }
}
