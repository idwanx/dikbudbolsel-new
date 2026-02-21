<?php

namespace App\Imports;

use App\Models\PaguAnggaran;
use App\Models\Sekolah;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Maatwebsite\Excel\Concerns\WithUpserts;
use Maatwebsite\Excel\Concerns\WithUpsertColumns;


class PaguAnggaranImport implements ToModel, SkipsEmptyRows, WithStartRow, WithChunkReading
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        switch (request('sumberdana')) {
            case 'bosp-reguler': 
                $sumberDana = 1;
                break;
            case 'bosp-kinerja': 
                $sumberDana = 2;
                break;
            default: abort(404); break;
        }

        $sekolah = Sekolah::where('npsn', $row[0])->first();

        PaguAnggaran::updateOrCreate(
            [
                'sumber_dana_id' => $sumberDana,
                'tahun' => request('tahun'),
                'sekolah_id' => $sekolah->id,
            ],
            [
                'sumber_dana_id' => $sumberDana,
                'tahun' => request('tahun'),
                'sekolah_id' => $sekolah->id,
                'jumlah' => $row[2],
            ]
        );
    }

    public function startRow(): int
    {
        return 3;
    }

    public function chunkSize(): int
    {
        return 1000;
    }
}
