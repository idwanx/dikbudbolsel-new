<?php

namespace Database\Seeders;

use App\Models\JenisBelanja;
use App\Models\Jenjang;
use App\Models\Role;
use App\Models\Sekolah;
use App\Models\SumberDana;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $roles = [
            [
                'nama_role' => 'Admin',
                'slug' => Str::slug('admin'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_role' => 'Approval',
                'slug' => Str::slug('approval'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_role' => 'Checker',
                'slug' => Str::slug('checker'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_role' => 'Kepala Sekolah',
                'slug' => Str::slug('kepala-sekolah'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_role' => 'Bendahara',
                'slug' => Str::slug('bendahara'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_role' => 'Operator Sekolah',
                'slug' => Str::slug('operator-sekolah'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        Role::insert($roles);

        $jenjangs = [
            [
                'nama_jenjang' => 'SD',
                'slug' => Str::slug('sd'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_jenjang' => 'SMP',
                'slug' => Str::slug('smp'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_jenjang' => 'TK',
                'slug' => Str::slug('tk'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_jenjang' => 'KB',
                'slug' => Str::slug('kb'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_jenjang' => 'TPA',
                'slug' => Str::slug('tpa'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_jenjang' => 'SPS',
                'slug' => Str::slug('sps'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_jenjang' => 'PKBM',
                'slug' => Str::slug('pkbm'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_jenjang' => 'SKB',
                'slug' => Str::slug('skb'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        Jenjang::insert($jenjangs);


        $jenisbelanja = [
            [
                'kode_jenis_belanja' => '5.1',
                'nama_jenis_belanja' => 'Belanja Operasi',
                'slug' => Str::slug('belanja-operasi'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kode_jenis_belanja' => '5.2',
                'nama_jenis_belanja' => 'Belanja Modal',
                'slug' => Str::slug('belanja-modal'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        JenisBelanja::insert($jenisbelanja);

        $sumberdana = [
            [
                'nama_sumber_dana' => 'BOSP Reguler',
                'slug' => Str::slug('bosp-reguler'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_sumber_dana' => 'BOSP Kinerja',
                'slug' => Str::slug('bosp-kinerja'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_sumber_dana' => 'BOSP Daerah',
                'slug' => Str::slug('bosp-daerah'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        SumberDana::insert($sumberdana);

        $userAdmin = User::firstOrCreate(
            ['email' => 'admin@gmail.com'],
            [
                'name' => 'admin',
                'password' => 'jangan123',
                'email_verified_at' => now(),
                'active_at' => now(),
            ]
        );

        $userAdmin->roles()->syncWithPivotValues(
            1, ['sekolah_id' => null]
        );
    }
}
