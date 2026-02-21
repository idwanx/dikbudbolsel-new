<?php

namespace App\Imports;

use App\Models\Jenjang;
use App\Models\Program;
use App\Models\SubProgram;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Maatwebsite\Excel\Concerns\WithUpsertColumns;
use Maatwebsite\Excel\Concerns\WithUpserts;

class SubProgramsImport implements ToCollection, WithHeadingRow, WithStartRow, WithChunkReading
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function collection(Collection $rows)
    {
        $grouped = $rows->groupBy(function ($item) {
            return $item['jenjang'] . '-' . $item['kode_sub_program'];
        });

        $firstRows = $grouped->map(function ($group) {
            return $group->first();
        });

        foreach ($firstRows as $row) {
            $jenjang = Jenjang::where('nama_jenjang', $row['jenjang'])->first();
            
            $program = $jenjang->programs()->where('kode_program', $row['kode_program'])->first();

            SubProgram::updateOrCreate(
                [
                    'program_id' => $program->id,
                    'kode_sub_program' => $row['kode_sub_program'],
                    
                ],
                [
                    'program_id' => $program->id,
                    'kode_sub_program' => $row['kode_sub_program'],
                    'uraian_sub_program' => $row['uraian_sub_program'],
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
