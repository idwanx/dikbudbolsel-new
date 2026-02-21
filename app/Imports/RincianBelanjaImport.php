<?php

namespace App\Imports;

use App\Models\RincianBelanja;
use Maatwebsite\Excel\Concerns\ToModel;

class RincianBelanjaImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new RincianBelanja([
            'jenis_belanja_id' => 2,
            'kode_rincian_belanja' => $row[0],
            'nama_rincian_belanja' => $row[1],
        ]);
    }
}
