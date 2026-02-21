<?php

namespace App\Http\Resources\Bos;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class DaftarPengajuanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            'approved_at' => $this->approved_at !== null ? Carbon::parse($this->approved_at)->format('d M Y, H:i') : null,
            'created_at' => $this->created_at !== null ? Carbon::parse($this->created_at)->format('d M Y, H:i') : null,
            'dikirim' => $this->whenNotNull(Carbon::parse($this->send_at)->diffForHumans()),
            'id' => $this->id,
            'jenjang' => $this->jenjang,
            'no_pengajuan' => $this->no_pengajuan,
            'nama_sekolah' => $this->nama_sekolah,
            'npsn' => $this->npsn,
            'slug' => $this->slug,
            'status' => $this->status,
            'validated_at' => $this->validated_at !== null ? Carbon::parse($this->validated_at)->format('d M Y, H:i') : null,
        ];
    }
}