<?php

namespace App\Http\Middleware;

use App\Http\Resources\DataPendukung\JenjangResource;
use App\Models\Jenjang;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Builder;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        Cache::remember('daftarSekolahs', 1440, function () {
            $sekolahs = Jenjang::withWhereHas('sekolahs', function ($query) {
                $query->orderBy('nama_sekolah', 'asc');
            })->get();
            
            return JenjangResource::collection($sekolahs);
        });

        $userRole = $request->user() ? $request->user()->load('roleuser') : null;
        $tahun = $request->tahun === null ? now()->year : (int)$request->tahun;

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'auth' => [
                'user' => $request->user() ? $userRole : null,
            ],
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
            // 'flash' => [
            //     'type' => fn () => $request->session()->get('type'),
            //     'message' => fn () => $request->session()->get('message')
            // ],
            'tahun' => $tahun,
            'daftarSekolahs' => Cache::get('daftarSekolahs'),
        ];
    }
}
