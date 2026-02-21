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
        Schema::create('rincian_barangs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('transaksi_id')->index()->constrained('transaksis')->onDelete('restrict');
            $table->foreignId('jenis_aset_id')->nullable()->index()->constrained('jenis_asets')->onDelete('restrict');
            $table->string('nama_barang');
            $table->string('merek');
            $table->string('type');
            $table->string('warna');
            $table->tinyInteger('volume');
            $table->double('harga');
            $table->enum('status', ['baik', 'rusak', 'hilang'])->default('baik');
            $table->text('spesifikasi');
            $table->text('keterangan')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rincian_barangs');
    }
};
