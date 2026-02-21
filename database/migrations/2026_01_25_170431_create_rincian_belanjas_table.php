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
        Schema::create('rincian_belanjas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('jenis_belanja_id')->constrained('jenis_belanjas')->onDelete('restrict');
            $table->string('kode_rincian_belanja')->unique();
            $table->string('nama_rincian_belanja');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rincian_belanjas');
    }
};
