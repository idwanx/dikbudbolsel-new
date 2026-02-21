<?php

namespace App\Http\Resources\DataPendukung;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class JenjangResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nama_jenjang' => $this->nama_jenjang,
            'slug' => $this->slug,
            'sekolahs' => SekolahResource::collection($this->whenLoaded('sekolahs')),
        ];
    }
}
