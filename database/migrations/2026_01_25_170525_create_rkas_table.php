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
        Schema::create('rkas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sekolah_id')->index()->constrained('sekolahs')->onDelete('restrict');
            $table->foreignId('sumber_dana_id')->index()->constrained('sumber_danas')->onDelete('restrict');
            $table->year('tahun')->index();
            $table->foreignId('rincian_belanja_id')->index()->constrained('rincian_belanjas')->onDelete('restrict');
            $table->foreignId('kegiatan_id')->nullable()->index()->constrained('kegiatans')->onDelete('restrict');
            $table->double('jumlah');
            $table->double('realisasi')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rkas');
    }
};
