<?php

namespace App\Http\Requests\DataPendukung;

use Illuminate\Foundation\Http\FormRequest;

class ImportSekolahRequest extends FormRequest
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
            'jenjang_id' => ['required', 'exists:jenjangs,id'],
            'files' => ['required', 'mimes:xls,xlsx', 'file', 'max:2048'],
        ];
    }

    public function messages(): array
    {
        return [
            'jenjang_id.required' => 'Jenjang belum di pilih',
            'files.required' => 'File belum di pilih',
            'files.mimes' => 'File harus xls atau xlsx',
            'files.max' => 'Kapasitas file maksimal 2 MB',
        ];
    }
}
