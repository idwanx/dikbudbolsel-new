<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Penerima extends Model
{
    protected $fillable = [
        'sekolah_id',
        'nama_penerima',
        'alamat',
        'no_rekening',
        'nama_bank',
        'npwp',
    ];
}
