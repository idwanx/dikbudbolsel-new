<?php

namespace App\Exports;

use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithHeadings;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class TransaksisExport implements FromCollection, WithColumnFormatting, WithHeadings, ShouldAutoSize
{
    /**
    * @return \Illuminate\Support\Collection
    */

    protected $pengajuan;

    public function __construct(int $pengajuan)
    {
        $this->pengajuan = $pengajuan;
    }

    public function collection()
    {
        return DB::table('transaksis')->select('penerimas.no_rekening', 'transaksis.nominal', 'pengajuans.no_pengajuan', 'transaksis.uraian')
            ->leftJoin('pengajuans', 'transaksis.pengajuan_id', '=', 'pengajuans.id')
            ->leftJoin('penerimas', 'transaksis.penerima_id', '=', 'penerimas.id')
            ->where('transaksis.pengajuan_id', $this->pengajuan)
            ->get();
    }
    public function columnFormats(): array
    {
        return [
            'A' => NumberFormat::FORMAT_TEXT,
            'B' => NumberFormat::FORMAT_NUMBER_COMMA_SEPARATED2,
        ];
    }
    public function headings(): array
    {
        return [
            'No. Rekening Tujuan',
            'Nominal',
            'No. Pengajuan',
            'Uraian',
        ];
    }
}
