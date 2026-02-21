<?php

namespace App\Imports;

use App\Models\Sekolah;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Maatwebsite\Excel\Concerns\WithUpsertColumns;
use Maatwebsite\Excel\Concerns\WithUpserts;
use Maatwebsite\Excel\Concerns\WithValidation;

class SekolahsImport implements ToModel, SkipsEmptyRows, WithUpsertColumns, WithStartRow, WithUpserts, WithChunkReading, WithValidation
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        
        return Sekolah::create([
            'jenjang_id' => request('jenjang_id'),
            'npsn' => $row[0],
            'nama_sekolah' => $row[1],
            'status' => $row[4],
        ]);
    }

    public function startRow(): int
    {
        return 3;
    }

    public function uniqueBy()
    {
        return 'npsn';
    }

    public function upsertColumns()
    {
        return ['nama_sekolah', 'status'];
    }

    public function chunkSize(): int
    {
        return 1000;
    }

    public function rules(): array
    {
        return [
            '0' => ['string', 'regex:/^[a-zA-Z0-9 ]+$/'],
            '1' => ['string', 'max:200'],
            '4' => ['in:Negeri,Swasta'],
        ];
    }
    public function customValidationMessages()
    {
        return [
            '0.regex' => 'NPSN hanya boleh diisi angka atau huruf.',
            '1.string' => 'Nama sekolah hanya boleh diisi dengan huruf',
            '1.max' => 'Nama sekolah maksimal 200 karakter',
            '4.in' => 'Status hanya boleh diisi dengan Negeri atau Swasta',
        ];
    }
}
