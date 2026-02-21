<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SubProgram extends Model
{
    protected $fillable = [
        'program_id',
        'kode_sub_program',
        'uraian_sub_program',
    ];

    public function program(): BelongsTo
    {
        return $this->belongsTo(Program::class);
    }
}
