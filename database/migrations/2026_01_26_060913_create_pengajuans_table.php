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
        Schema::create('pengajuans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sekolah_id')->index()->constrained('sekolahs')->onDelete('restrict');
            $table->tinyInteger('no_urut');
            $table->string('no_pengajuan');
            $table->string('slug')->index()->unique();
            $table->enum('status', ['draft', 'validasi', 'divalidasi', 'disetujui'])->default('draft');
            $table->timestamp('send_at')->nullable();
            $table->timestamp('validated_at')->nullable();
            $table->timestamp('approved_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pengajuans');
    }
};
