<?php

namespace App\Http\Requests\DataPendukung;

use Illuminate\Foundation\Http\FormRequest;

class PenerimaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nama_penerima' => ['required','string','max:200'],
            'alamat' => ['required','string','max:200'],
            'no_rekening' => ['required','string','max:50'],
            'nama_bank' => ['required','string','max:100'],
            'npwp' => ['required','string','max:20'],
            
        ];
    }

    public function messages(): array
    {
        return [
            'nama_penerima.required' => 'Nama penerima harus diisi',
            'nama_penerima.max' => 'Nama penerima maksimal 200 karakter',
            'alamat.required' => 'Alama penerima harus diisi',
            'alamat.max' => 'Alamat maksimal 200 karakter',
            'no_rekening.required' => 'Nomor rekekning harus diisi',
            'no_rekening.max' => 'Nomor rekekning maksimal 50 karakter',
            'nama_bank.required' => 'Nama bank harus diisi',
            'nama_bank.max' => 'Nama bank maksimal 50 karakter',
            'npwp.required' => 'Npwp harus diisi',
            'npwp.max' => 'Npwp maksimal 20 karakter',
            'alamat.required' => 'Npwp harus diisi',
            'alamat.max' => 'Npwp maksimal 255 karakter',
        ];
    }
}
