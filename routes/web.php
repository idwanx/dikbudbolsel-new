<?php

use App\Http\Controllers\Bos\DashboardController;
use App\Http\Controllers\Bos\PaguController;
use App\Http\Controllers\Bos\PengajuanController;
use App\Http\Controllers\Bos\RkasController;
use App\Http\Controllers\Bos\TransaksiController;
use App\Http\Controllers\DataPendukung\ImportDataController;
use App\Http\Controllers\DataPendukung\JenisBelanjaController;
use App\Http\Controllers\DataPendukung\KegiatanController;
use App\Http\Controllers\DataPendukung\PenerimaController;
use App\Http\Controllers\DataPendukung\ProgramController;
use App\Http\Controllers\DataPendukung\RincianBelanjaController;
use App\Http\Controllers\DataPendukung\SekolahController;
use App\Http\Controllers\DataPendukung\SubProgramController;
use App\Http\Controllers\DataPendukung\SumberDanaController;
use App\Http\Controllers\FetchDataController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('bos/{tahun?}/dashboard', DashboardController::class)->name('bos.dashboard');

    // Transaksi
    Route::get('bos/{tahun?}/transaksi', [TransaksiController::class, 'index'])->name('bos.transaksi.index');
    Route::post('transaksi/store', [TransaksiController::class, 'store_transaksi'])->name('bos.transaksi.store');
    Route::delete('transaksi/destroy/{transaksi}', [TransaksiController::class, 'destroy_transaksi'])->name('bos.transaksi.destroy');


    Route::post('transaksi/validasi/{nomor}', [TransaksiController::class, 'validasi_transaksi'])->name('bos.transaksi.validasi');

    // Pengajuan
    Route::get('bos/{tahun?}/pengajuan', [PengajuanController::class, 'index'])->name('bos.pengajuan.index');
    Route::get('bos/{tahun?}/pengajuan/rincian/{nomor?}', [PengajuanController::class, 'rincian'])->name('bos.pengajuan.rincian');    
    Route::get('bos/{tahun?}/pengajuan/daftar/{jenjangs?}/{npsn?}', [PengajuanController::class, 'daftar'])->name('bos.pengajuan.daftar');
    Route::get('bos/{tahun?}/pengajuan/daftar/{rincian?}/{jenjangs?}/{npsn?}/{nomor?}', [PengajuanController::class, 'daftar_rincian'])->name('bos.pengajuan.daftarRincian');
    
    Route::patch('kirim/rincian-pengajuan/{nomor}', [PengajuanController::class, 'kirim_rincian'])->name('bos.pengajuan.kirimRincian');
    Route::patch('batal-kirim/rincian-pengajuan/{nomor}', [PengajuanController::class, 'batal_kirim'])->name('bos.pengajuan.batalKirim');

    Route::get('download/rincian-pengajuan/{pengajuan}', [PengajuanController::class, 'download_rincian'])->name('bos.pengajuan.downloadRincian');
    Route::delete('pengajuan/destroy/{pengajuan}/{tahun}', [PengajuanController::class, 'destroy'])->name('bos.pengajuan.destroy');
    Route::post('bos/pengajuan/new', [PengajuanController::class, 'new'])->name('bos.pengajuan.new');

    // Rkas
    Route::get('bos/{tahun?}/rkas-rincian/checkuser', [RkasController::class, 'rincian'])->name('bos.rkas.rincian');
    Route::get('bos/{tahun?}/rkas-rekapitulasi/checkuser', [RkasController::class, 'rekapitulasi'])->name('bos.rkas.rekapitulasi');

    Route::get('bos/{tahun?}/rkas/rincian/{jenjangs?}/{npsn?}/{sumberdana?}', [RkasController::class, 'detail_rincian'])->name('bos.rkas.detailRincian');
    Route::get('bos/{tahun?}/rkas/rekapitulasi/{jenjangs?}/{sumberdana?}', [RkasController::class, 'detail_rekapitulasi'])->name('bos.rkas.detailRekapitulasi');
    Route::post('import-data/rkas', [RkasController::class, 'import'])->name('bos.rkas.import');

    // Pagu
    Route::get('bos/{tahun?}/pagu/{jenjangs?}/{sumberdana?}', [PaguController::class, 'index'])->name('bos.pagu.index');
    Route::post('import-data/pagu', [PaguController::class, 'import'])->name('bos.pagu.import');

    Route::get('fetch-data/penerima', [FetchDataController::class, 'getPenerima'])->name('fetchData.penerima');
    Route::get('fetch-data/rkas/{tahun?}/{sumberdana?}', [FetchDataController::class, 'getRkas'])->name('fetchData.rkas');
    Route::get('fetch-data/sekolah/{jenjang:slug?}', [FetchDataController::class, 'getSekolah'])->name('fetchData.sekolah');
    
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('data-pendukung/sekolah', SekolahController::class)->except(['create', 'show', 'edit']);
    Route::resource('data-pendukung/sumber-dana', SumberDanaController::class)->except(['create', 'show', 'edit']);
    Route::resource('data-pendukung/jenis-belanja', JenisBelanjaController::class)->except(['create', 'show', 'edit']);
    Route::resource('data-pendukung/rincian-belanja', RincianBelanjaController::class)->except(['create', 'show', 'edit']);
    Route::resource('data-pendukung/program', ProgramController::class)->except(['create', 'show', 'edit']);
    Route::resource('data-pendukung/sub-program', SubProgramController::class)->except(['create', 'show', 'edit']);
    Route::resource('data-pendukung/kegiatan', KegiatanController::class)->except(['create', 'show', 'edit']);
    Route::resource('data-pendukung/penerima', PenerimaController::class)->except(['create', 'show', 'edit']);

    Route::post('import-data/sekolah', [ImportDataController::class, 'sekolah'])->name('importData.sekolah');
    Route::post('import-data/program', [ImportDataController::class, 'program'])->name('importData.program');
    Route::post('import-data/sub-program', [ImportDataController::class, 'sub_program'])->name('importData.subprogram');
    Route::post('import-data/kegiatan', [ImportDataController::class, 'kegiatans'])->name('importData.kegiatan');
    Route::post('import-data/rincian-belanja', [ImportDataController::class, 'rincian_belanja'])->name('importData.rincianbelanja');
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('users', [UsersController::class, 'index'])->name('users.index');
});


require __DIR__.'/settings.php';
