<?php

namespace App\Http\Resources\DataPendukung;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class SekolahResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // $url = Str::of('https://laravel.com')->chopStart('https://');

        return [
            'npsn' => $this->npsn,
            // 'jenjang' => Str::words($this->nama_sekolah, 1, ''),
            // 'nama_sekolah' => Str::title(Str::of($this->nama_sekolah)->chopStart(Str::words($this->nama_sekolah, 1, ''))),
            'nama_sekolah' => Str::title($this->nama_sekolah),
        ];
    }
}
