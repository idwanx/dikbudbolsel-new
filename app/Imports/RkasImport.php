<?php

namespace App\Imports;

use App\Models\Jenjang;
use App\Models\Kegiatan;
use App\Models\RincianBelanja;
use App\Models\Rka;
use Maatwebsite\Excel\Concerns\ToCollection;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithValidation;

class RkasImport implements ToCollection, SkipsEmptyRows, WithStartRow, WithChunkReading
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function collection(Collection $rows)
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
        
        $jenjang = Jenjang::where('slug', 'sd')->first();

        $filteredCollection = $rows->map(function ($row) {
            // Saring nilai null atau kosong dari larik/koleksi baris.

            $filteredRow = collect($row)->filter(function ($value) {
                // Keeps 0, removes null, "", [], false
                return !empty($value) || $value === 0;
            })->all();

            // Kembalikan baris yang difilter hanya jika baris tersebut masih berisi data.
            if (!empty($filteredRow[3]) && !empty($filteredRow[6]) && $filteredRow[6] !== "Kode Kegiatan") {
                return $filteredRow;
            }
            
        })->filter()->values();

        // Gruping data
        $grouped = $filteredCollection->groupBy(function ($item) {
            return $item[3] . '-' . $item[6];
        });

        // Ambil data hasil gruping hanya yang baris pertama
        $firstRows = $grouped->map(function ($group) {
            return $group->first();
        });
        
        $resultFilters = $firstRows->filter(function ($item) {
            if (request('sumberdana') === "bosp-reguler") {
                return $item[15] !== 0 || $item[16] !== 0;
            } else {
                return $item[21] !== 0 || $item[24] !== 0;
            }
        });

        foreach ($resultFilters as $row) {

            $rincianBelanja = RincianBelanja::where('kode_rincian_belanja', $row[3])->first();

            $kegiatan = Kegiatan::select('kegiatans.id', 'kegiatans.uraian_kegiatan')
            ->leftJoin('sub_programs', 'kegiatans.sub_program_id', '=', 'sub_programs.id')
            ->leftJoin('programs', 'sub_programs.program_id', '=', 'programs.id')
            ->where('kegiatans.kode_kegiatan', '=', $row[6])
            ->where('programs.jenjang_id', $jenjang->id)
            ->first();

            Rka::updateOrCreate(
                [
                    'sekolah_id' => request('sekolahId'),
                    'sumber_dana_id' => $sumberDana,
                    'tahun' => request('tahun'),
                    'rincian_belanja_id' => $rincianBelanja->id,
                    'kegiatan_id' => $kegiatan ? $kegiatan->id : null,
                ],
                [
                    'sekolah_id' => request('sekolahId'),
                    'sumber_dana_id' => $sumberDana,
                    'tahun' => request('tahun'),
                    'rincian_belanja_id' => $rincianBelanja->id,
                    'kegiatan_id' => $kegiatan ? $kegiatan->id : null,
                    'jumlah' => $sumberDana === 1 ? ($row[15]+$row[16]) : ($row[21]+$row[24]),
                ]
            );
        }
    }

    public function startRow(): int
    {
        return 39;
    }

    public function chunkSize(): int
    {
        return 1000;
    }

    // public function rules(): array
    // {
    //     return [
    //         '15' => ['numeric', 'regex:/^[0-9]+$/', 'min:0'],
    //         '16' => ['numeric', 'regex:/^[0-9]+$/', 'min:0'],
    //     ];
    // }
    // public function customValidationMessages()
    // {
    //     return [
    //         '15.numeric' => 'Nilai pada belanja operasi harus di isi angka.',
    //         '15.regex' => 'Nilai pada belanja operasi harus di isi angka.',
    //         '15.min' => 'Nilai minimal 0.',
    //         '16.numeric' => 'Nilai pada belanja modal harus di isi angka.',
    //         '16.regex' => 'Nilai pada belanja modal harus di isi angka.',
    //         '16.min' => 'Nilai minimal 0.',
    //     ];
    // }
}