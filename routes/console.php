<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('logs:clear', function () {
    $logPath = storage_path('logs/');
    $files = File::glob($logPath . '*.log');
    foreach ($files as $file) {
        if (File::exists($file)) {
            // Truncate the file to zero size
            file_put_contents($file, '');
        }
    }
    $this->comment('Logs have been cleared!');
})->describe('Clear log files');