<?php

namespace App\Http\Resources\Bos;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FetchRincianPengajuanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            'alamat' => $this->alamat,
            'id' => $this->id,
            'created_at' => Carbon::parse($this->created_at)->format('d M Y, H:i'),
            'nama_bank' => $this->nama_bank,
            'nama_penerima' => $this->nama_penerima,
            'no_pengajuan' => $this->no_pengajuan,
            'no_rekening' => $this->no_rekening,
            'nominal' => $this->nominal,
            'rka_id' => $this->rka_id,
            'send_at' => Carbon::parse($this->send_at)->format('d M Y, H:i'),
            'status' => $this->status,
            'uraian' => $this->uraian,
        ];
    }
}
