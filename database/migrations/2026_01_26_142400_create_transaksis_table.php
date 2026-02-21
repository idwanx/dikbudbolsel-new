<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transaksis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sekolah_id')->index()->constrained('sekolahs')->onDelete('restrict');
            $table->foreignId('pengajuan_id')->index()->constrained('pengajuans')->onDelete('restrict');
            $table->foreignId('penerima_id')->index()->constrained('penerimas')->onDelete('restrict');
            $table->foreignId('rka_id')->index()->constrained('rkas')->onDelete('restrict');
            $table->foreignId('sumber_dana_id')->index()->constrained('sumber_danas')->onDelete('restrict');
            $table->foreignId('rincian_belanja_id')->index()->constrained('rincian_belanjas')->onDelete('restrict');
            $table->foreignId('sub_jenis_transaksi_id')->index()->constrained('sub_jenis_transaksis')->onDelete('restrict');
            $table->foreignId('parent_id')->nullable();
            $table->text('uraian');
            $table->double('nominal');
            $table->enum('d_k', ['D', 'K'])->default('D');
            $table->boolean('is_active')->default(true);
            $table->boolean('saldo_awal')->default(false);
            $table->enum('status', ['draft', 'validasi', 'divalidasi', 'berhasil', 'gagal'])->default('draft');
            $table->text('keterangan')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaksis');
    }
};
