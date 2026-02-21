<?php

namespace App\Imports;

use App\Models\Jenjang;
use App\Models\Program;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithStartRow;

class ProgramsImport implements ToCollection, WithHeadingRow, WithStartRow, WithChunkReading
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function collection(Collection $rows)
    {
        $grouped = $rows->groupBy(function ($item) {
            return $item['jenjang'] . '-' . $item['kode_program'];
        });

        $firstRows = $grouped->map(function ($group) {
            return $group->first();
        });

        foreach ($firstRows as $row) {

            $jenjang = Jenjang::where('nama_jenjang', $row['jenjang'])->first();

            Program::updateOrCreate(
                [
                    'jenjang_id' => $jenjang->id,
                    'kode_program' => $row['kode_program'],
                    
                ],
                [
                    'jenjang_id' => $jenjang->id,
                    'kode_program' => $row['kode_program'],
                    'uraian_program' => $row['uraian_program'],
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
