<?php

namespace App\Http\Controllers\DataPendukung;

use App\Http\Controllers\Controller;
use App\Http\Requests\DataPendukung\ImportSekolahRequest;
use App\Imports\KegiatansImport;
use App\Imports\PaguAnggaranImport;
use App\Imports\ProgramsImport;
use App\Imports\RincianBelanjaImport;
use App\Imports\RkasImport;
use App\Imports\SekolahsImport;
use App\Imports\SubProgramsImport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Validators\ValidationException;

class ImportDataController extends Controller
{
    public function sekolah(ImportSekolahRequest $request)
    {
        try {
            Excel::import(new SekolahsImport($request->jenjang_id), request()->file('files'));
            
            return back()->with('success', 'Users imported successfully!');

        } catch (ValidationException $e) {
            $failures = $e->failures();
            $errors = [];

            foreach ($failures as $failure) {
                $errors[] = 'Pada file, Baris ke ' . $failure->row() . ': ' . implode(', ', $failure->errors());
            }

            return back()->withErrors($errors);
        }
    }

    public function program(Request $request)
    {

        $file = $request->file('file');
        
        Excel::import(new ProgramsImport, $file);
        
        return back()->with('success', 'Data imported and processed successfully!');
    }

    public function sub_program(Request $request)
    {
        try {
            $file = $request->file('file');
        
            Excel::import(new SubProgramsImport, $file);
            
            return back()->with('success', 'Users imported successfully!');

        } catch (ValidationException $e) {
            $failures = $e->failures();
            $errors = [];

            foreach ($failures as $failure) {
                $errors[] = 'Pada file, Baris ke ' . $failure->row() . ': ' . implode(', ', $failure->errors());
            }

            return back()->withErrors($errors);
        }
    }


    public function kegiatans(Request $request)
    {
        try {
            $file = $request->file('file');
        
            Excel::import(new KegiatansImport, $file);
            
            return back()->with('success', 'Users imported successfully!');

        } catch (ValidationException $e) {
            $failures = $e->failures();
            $errors = [];

            foreach ($failures as $failure) {
                $errors[] = 'Pada file, Baris ke ' . $failure->row() . ': ' . implode(', ', $failure->errors());
            }

            return back()->withErrors($errors);
        }
    }

    public function rincian_belanja(Request $request)
    {
        try {
            $file = $request->file('file');
        
            Excel::import(new RincianBelanjaImport, $file);
            
            return back()->with('success', 'Users imported successfully!');

        } catch (ValidationException $e) {
            $failures = $e->failures();
            $errors = [];

            foreach ($failures as $failure) {
                $errors[] = 'Pada file, Baris ke ' . $failure->row() . ': ' . implode(', ', $failure->errors());
            }

            return back()->withErrors($errors);
        }
    }

    
}
