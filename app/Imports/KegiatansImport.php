<?php

namespace App\Imports;

use App\Models\Jenjang;
use App\Models\Kegiatan;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithStartRow;

class KegiatansImport implements ToCollection, WithHeadingRow, WithStartRow, WithChunkReading
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function collection(Collection $rows)
    {
        $grouped = $rows->groupBy(function ($item) {
            return $item['jenjang'] . '-' . $item['kode_kegiatan'];
        });

        $firstRows = $grouped->map(function ($group) {
            return $group->first();
        });

        foreach ($firstRows as $row) {
            $jenjang = Jenjang::where('nama_jenjang', $row['jenjang'])->first();
            
            $subProgram = $jenjang->programSubprogram()->where('kode_sub_program', $row['kode_sub_program'])->first();

            Kegiatan::updateOrCreate(
                [
                    'sub_program_id' => $subProgram->id,
                    'kode_kegiatan' => $row['kode_kegiatan'],
                    
                ],
                [
                    'sub_program_id' => $subProgram->id,
                    'kode_kegiatan' => $row['kode_kegiatan'],
                    'uraian_kegiatan' => $row['uraian_kegiatan'],
                ]
            );
        }
    }

    public function startRow(): int
    {
        return 2;
    }

    public function headingRow(): int
    {
        return 1;
    }

    public function chunkSize(): int
    {
        return 1000;
    }
}