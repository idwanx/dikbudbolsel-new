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
        Schema::create('dana_masuks', function (Blueprint $table) {
            $table->id();
            $table->year('tahun')->index();
            $table->foreignId('sumber_dana_id')->index()->constrained('sumber_danas')->onDelete('restrict');
            $table->foreignId('sekolah_id')->index()->constrained('sekolahs')->onDelete('restrict');
            $table->double('jumlah');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dana_masuks');
    }
};
