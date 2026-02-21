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
        Schema::create('sub_jenis_transaksis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('jenis_transaksi_id')->index()->constrained('jenis_transaksis')->onDelete('restrict');
            $table->string('sub_jenis_transaksi');
            $table->string('nilai')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sub_jenis_transaksis');
    }
};
