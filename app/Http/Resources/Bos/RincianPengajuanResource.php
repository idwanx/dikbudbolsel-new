<?php

namespace App\Http\Resources\Bos;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RincianPengajuanResource extends JsonResource
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
            'no_rekening' => $this->no_rekening,
            'nominal' => $this->nominal,
            'rka_id' => $this->rka_id,
            'status' => $this->status,
            'uraian' => $this->uraian,
        ];
    }
}