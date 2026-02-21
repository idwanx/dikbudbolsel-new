<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Sekolah extends Model
{
    protected $fillable = [
        'jenjang_id',
        'npsn',
        'nama_sekolah',
        'status',
    ];

    public function getRouteKeyName(): string
    {
        return 'npsn';
    }

    public function jenjang(): BelongsTo
    {
        return $this->belongsTo(Jenjang::class);
    }
    
    public function rkas(): HasMany
    {
        return $this->hasMany(Rka::class)
        ->select(['rkas.id', 'rkas.sekolah_id', 'rkas.sumber_dana_id', 'rkas.tahun', 'rkas.jumlah', 'rkas.rincian_belanja_id', 'rkas.kegiatan_id', 
        'rincian_belanjas.kode_rincian_belanja', 'rincian_belanjas.nama_rincian_belanja', 
        'jenis_belanjas.nama_jenis_belanja', 
        'kegiatans.sub_program_id', 'kegiatans.kode_kegiatan', 'kegiatans.uraian_kegiatan', 
        'sub_programs.program_id', 'sub_programs.kode_sub_program', 'sub_programs.uraian_sub_program', 
        'programs.kode_program', 'programs.uraian_program'])
        ->leftJoin('rincian_belanjas', 'rkas.rincian_belanja_id', '=', 'rincian_belanjas.id')
        ->leftJoin('jenis_belanjas', 'rincian_belanjas.jenis_belanja_id', '=', 'jenis_belanjas.id')
        ->leftJoin('kegiatans', 'rkas.kegiatan_id', '=', 'kegiatans.id')
        ->leftJoin('sub_programs', 'kegiatans.sub_program_id', '=', 'sub_programs.id')
        ->leftJoin('programs', 'sub_programs.program_id', '=', 'programs.id');
    }

    public function pagu(): HasOne
    {
        return $this->hasOne(PaguAnggaran::class);
    }
}
