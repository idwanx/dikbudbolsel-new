<?php

namespace App\Http\Requests\Bos;

use Illuminate\Foundation\Http\FormRequest;

class RekapRkasRequest extends FormRequest
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
        $this->merge([
            'tahun' => $this->tahun,
            'jenjangs' => $this->jenjangs,
            'sumberdana' => $this->sumberdana,
            'npsn' => $this->npsn
        ]);

        return [
            'tahun' => ['nullable', 'numeric'],
            'jenjangs' => ['nullable', 'string', 'max:5', 'in:sd,smp,tk,kb,tpa,sps,pkbm,skb'],
            'sumberdana' => ['nullable', 'regex:/^[a-zA-Z0-9-]+$/', 'max:20'],
            'npsn' => ['nullable', 'alpha_num', 'max:10'],
        ];
    }

    public function messages(): array
    {
        return [
            'tahun.numeric' => 'Tahun tidak valid',
            'jenjangs.in' => 'Jenjang tidak valid',
            'sumberdana.regex' => 'Sumber dana tidak valid',
            'npsn.alpha_num' => 'Npsn tidak valid',
            'npsn.max' => 'Npsn maksimal 10 karakter',
        ];
    }
}
