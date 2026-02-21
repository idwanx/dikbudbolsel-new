<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => ':attribute harus diterima.',
    'accepted_if' => ':attribute harus diterima ketika :other adalah :value.',
    'active_url' => ':attribute bukan URL yang valid.',
    'after' => ':attribute harus tanggal setelah :date.',
    'after_or_equal' => ':attribute harus tanggal setelah atau sama dengan :date.',
    'alpha' => ':attribute hanya boleh berisi huruf.',
    'alpha_dash' => ':attribute hanya boleh berisi huruf, angka, tanda hubung, dan garis bawah.',
    'alpha_num' => ':attribute hanya boleh berisi huruf dan angka.',
    'array' => ':attribute harus berupa array.',
    'before' => ':attribute harus tanggal sebelum :date.',
    'before_or_equal' => ':attribute harus tanggal sebelum atau sama dengan :date.',
    'between' => [
        'array' => ':attribute harus diantara :min dan :max items.',
        'file' => ':attribute harus diantara :min dan :max kilobytes.',
        'numeric' => ':attribute harus diantara :min dan :max.',
        'string' => 'The :attribute harus diantara :min dan :max characters.',
    ],
    'boolean' => ':attribute harus benar atau salah.',
    'confirmed' => 'konfirmasi :attribute tidak cocok.',
    'current_password' => 'Kata sandi salah.',
    'date' => ':attribute bukan tanggal yang valid.',
    'date_equals' => ':attribute harus tanggal yang sama dengan :date.',
    'date_format' => ':attribute tidak sesuai dengan format :format.',
    'declined' => ':attribute harus ditolak.',
    'declined_if' => ':attribute harus ditolak ketika :other adalah :value.',
    'different' => ':attribute dan :other harus beda.',
    'digits' => ':attribute harus :digits digits.',
    'digits_between' => ':attribute harus diantara :min dan :max digits.',
    'dimensions' => ':attribute memiliki dimensi gambar yang tidak valid.',
    'distinct' => ':attribute memiliki nilai duplikat.',
    'doesnt_start_with' => ':attribute tidak boleh dimulai dengan salah satu dari berikut ini: :values.',
    'email' => ':attribute harus alamat e-mail yang valid.',
    'ends_with' => ':attribute harus diakhiri dengan salah satu dari berikut ini: :values.',
    'enum' => ':attribute tidak valid.',
    'exists' => ':attribute tidak valid.',
    'file' => ':attribute harus berupa file.',
    'filled' => ':attribute harus memiliki nilai.',
    'gt' => [
        'array' => ':attribute harus lebih dari :value items.',
        'file' => ':attribute harus lebih besar dari :value kilobytes.',
        'numeric' => ':attribute harus lebih besar dari :value.',
        'string' => ':attribute harus lebih besar dari :value characters.',
    ],
    'gte' => [
        'array' => ':attribute harus :value item atau lebih.',
        'file' => ':attribute harus lebih besar atau sama dengan :value kilobytes.',
        'numeric' => ':attribute harus lebih besar atau sama dengan :value.',
        'string' => ':attribute harus lebih besar atau sama dengan :value characters.',
    ],
    'image' => ':attribute harus berupa gambar.',
    'in' => ':attribute tidak valid.',
    'in_array' => ':attribute tidak ada di :other.',
    'integer' => ':attribute harus sebuah integer.',
    'ip' => ':attribute harus alamat IP yang valid.',
    'ipv4' => ':attribute harus alamat IPv4 yang valid.',
    'ipv6' => ':attribute harus alamat IPv6 yang valid.',
    'json' => ':attribute harus berupa string JSON yang valid.',
    'lt' => [
        'array' => ':attribute harus bernilai kurang dari :value item.',
        'file' => ':attribute harus kurang dari :value kilobytes.',
        'numeric' => ':attribute harus kurang dari :value.',
        'string' => ':attribute harus kurang dari :value karakter.',
    ],
    'lte' => [
        'array' => ':attribute tidak boleh lebih dari :value items.',
        'file' => ':attribute harus kurang dari atau sama dengan :value kilobytes.',
        'numeric' => ':attribute harus kurang dari atau sama dengan :value.',
        'string' => ':attribute harus kurang dari atau sama dengan :value karakter.',
    ],
    'mac_address' => ':attribute harus alamat MAC yang valid.',
    'max' => [
        'array' => ':attribute tidak boleh lebih dari :max items.',
        'file' => ':attribute tidak boleh lebih besar dari :max kilobytes.',
        'numeric' => ':attribute tidak boleh lebih besar dari :max.',
        'string' => ':attribute tidak boleh lebih besar dari :max karakter.',
    ],
    'mimes' => ':attribute harus berupa file bertipe: :values.',
    'mimetypes' => ':attribute harus berupa file bertipe: :values.',
    'min' => [
        'array' => ':attribute harus memiliki setidaknya :min item.',
        'file' => ':attribute harus setidaknya :min kilobytes.',
        'numeric' => ':attribute harus setidaknya :min.',
        'string' => ':attribute harus setidaknya :min karakter.',
    ],
    'multiple_of' => ':attribute harus kelipatan :value.',
    'not_in' => ':attribute tidak valid.',
    'not_regex' => ':attribute format is invalid.',
    'numeric' => ':attribute harus angka.',
    'password' => [
        'letters' => ':attribute harus mengandung setidaknya satu huruf.',
        'mixed' => ':attribute harus mengandung setidaknya satu huruf besar dan satu huruf kecil.',
        'numbers' => ':attribute harus mengandung setidaknya satu angka.',
        'symbols' => ':attribute harus mengandung setidaknya satu simbol.',
        'uncompromised' => ':attribute telah muncul dalam kebocoran data. Silahkan pilih :attribute yang berbeda.',
    ],
    'present' => ':attribute harus ada.',
    'prohibited' => ':attribute dilarang.',
    'prohibited_if' => ':attribute field dilarang ketika :other adalah :value.',
    'prohibited_unless' => ':attribute dilarang kecuali :other ada dalam :values.',
    'prohibits' => ':attribute dilarang :other dari yang ada.',
    'regex' => ':attribute format tidak valid.',
    'required' => ':attribute wajib diisi.',
    'required_array_keys' => ':attribute harus berisi entri untuk: :values.',
    'required_if' => ':attribute wajib diisi ketika :other adalah :value.',
    'required_unless' => ':attribute wajib diisi kecuali :other berada dalam :values.',
    'required_with' => ':attribute wajib diisi ketika :values adalah ada.',
    'required_with_all' => ':attribute wajib diisi ketika :values ada.',
    'required_without' => ':attribute wajic diisi ketika :values tidak ada.',
    'required_without_all' => ':attribute wajib diisi jika tidak ada :values are present.',
    'same' => ':attribute dan :other harus sama.',
    'size' => [
        'array' => ':attribute harus :size item.',
        'file' => ':attribute harus :size kilobytes.',
        'numeric' => ':attribute harus :size.',
        'string' => ':attribute harus :size karakter.',
    ],
    'starts_with' => ':attribute harus dimulai dengan salah satu dari berikut ini: :values.',
    'string' => ':attribute harus string.',
    'timezone' => ':attribute harus zona waktu yang valid.',
    'unique' => ':attribute sudah ada.',
    'uploaded' => ':attribute gagal diunggah.',
    'url' => ':attribute harus alamat URL yang valid.',
    'uuid' => ':attribute harus UUID yang valid.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [],

];
