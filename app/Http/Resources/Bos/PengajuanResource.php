<?php

namespace App\Http\Resources\Bos;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class PengajuanResource extends JsonResource
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
            'id' => $this->id,
            'no_pengajuan' => $this->no_pengajuan,
            'sekolah_id' => $this->sekolah_id,
            'send_at' => $this->send_at !== null ? Carbon::parse($this->send_at)->format('d M Y, H:i') : null,
            'status' => $this->status,
            'slug' => $this->slug,
            'validated_at' => $this->validated_at !== null ? Carbon::parse($this->validated_at)->format('d M Y, H:i') : null,
        ];
    }
}
