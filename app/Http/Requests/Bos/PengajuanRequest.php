<?php

namespace App\Http\Requests\Bos;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PengajuanRequest extends FormRequest
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
        $roleuser = Auth::user()->roleuser()->firstOrFail();

        $arrayIsNotEmpty = !empty($this->input('optionpajaks'));

        if (!empty($this->input('rka_id'))) {
            $rkas = DB::table('rkas')
            ->where([
                'id' => $this->input('rka_id'),
                'sekolah_id' => $roleuser->sekolah_id,
            ])->firstOrFail();

            $sisaDana = $rkas->jumlah - $rkas->realisasi;

            if (!empty($this->input('optionpajaks'))) {
                $collect = collect($this->optionpajaks);
                $pajak = $collect->sum('jumlah_pajak');
                $totalRincian = ($this->nominal - $pajak)+$pajak;
            } else {
                $totalRincian = $this->nominal;
            }

        } else {
            $sisaDana = 0;
            $totalRincian = 0;
        }

        $this->merge([
            'total' => $totalRincian,
        ]);

        $rules = [
            'pengajuan_id' => [
                'required', 
                'numeric',
                Rule::exists('pengajuans', 'id')->where(function ($query) use ($roleuser) {
                    return $query->where([
                        'sekolah_id' => $roleuser->sekolah_id,
                        'send_at' => null
                    ]);
                }),
            ],
            'penerima_id' => [
                'required',
                Rule::exists('penerimas', 'id')->where(function ($query) use ($roleuser) {
                    return $query->where('sekolah_id', $roleuser->sekolah_id);
                }),
            ],
            'penerima_pajak' => [
                'nullable',
                Rule::requiredIf($arrayIsNotEmpty),
                Rule::exists('penerimas', 'id')->where(function ($query) use ($roleuser) {
                    return $query->where('sekolah_id', $roleuser->sekolah_id);
                }),
            ],
            'uraian' => [
                'required', 
                // 'regex:/^[A-Za-z0-9 !@#$%&_,\.\/\-]+$/', 
                'string',
                'max:250'
            ],
            'nominal' => ['required', 'numeric'],
            'total' => Rule::numeric()->max($sisaDana),
            'rka_id' => [
                'required',
                Rule::exists('rkas', 'id')->where(function ($query) use ($roleuser) {
                    return $query->where('sekolah_id', $roleuser->sekolah_id);
                }),
            ],
            'sumber_dana_id' => ['required', 'numeric'],
            'rincian_belanja_id' => ['required', 'numeric'],
            'sub_jenis_transaksi_id' => ['required', 'numeric'],
            'optionpajaks' => ['nullable', 'array'],
            'optionpajaks.*.pajak_id' => ['required', 'string', 'max:20'],
            'optionpajaks.*.jumlah_pajak' => ['required', 'numeric'],
        ];
        return $rules;
    }

     public function messages(): array
    {
        return [
            'pengajuan_id.required' => 'Pengajuan tidak valid.',
            'pengajuan_id.numeric' => 'Pengajuan tidak valid.',
            'pengajuan_id.exists' => 'Tidak dibolehkan lagi menambah rincian.',
            'penerima_id.required' => 'Penerima harus dipilih.',
            'penerima_id.exists' => 'Penerima tidak valid.',
            'penerima_pajak.required' => 'Penerima pajak harus dipilih.',
            'penerima_pajak.exists' => 'Penerima pajak tidak valid.',
            'uraian.required' => 'Uraian harus di isi.',
            // 'uraian.regex' => 'Uraian tidak valid.',
            'uraian.string' => 'Uraian tidak valid.',
            'uraian.max' => 'Uraian masksimal 250 karakter.',
            'nominal.required' => 'nominal harus di isi.',
            'nominal.numeric' => 'Nominal harus di isi angka.',
            'total.max' => 'Nilai total tidak boleh melebihi pagu/sisa dana.',
            'rka_id.required' => 'Rkas harus dipilih.',
            'rka_id.exists' => 'Rkas tidak valid.',
            'sumber_dana_id.required' => 'Sumber dana harus di isi.',
            'sumber_dana_id.numeric' => 'Sumber dana tidak valid.',
            'rincian_belanja_id.required' => 'Rincian belanja harus di isi.',
            'rincian_belanja_id.numeric' => 'Rincian belanja tidak valid.',
            'sub_jenis_transaksi_id.required' => 'Jenis transaksi harus di isi.',
            'sub_jenis_transaksi_id.numeric' => 'Jenis transaksi tidak valid.',
            'optionpajaks.*.pajak_id.required' => 'Pajak belum dipilih.',
            'optionpajaks.*.pajak_id.max' => 'Pajak tidak valid.',
            'optionpajaks.*.jumlah_pajak.required' => 'Jumlah pajak harus di isi.',
            'optionpajaks.*.jumlah_pajak.numeric' => 'Jumlah pajak harus di isi angka.',
        ];
    }
}
