<?php

namespace App\Providers;

use App\Models\Transaksi;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        // $roleuser = Auth::user()->roleuser()->firstOrFail();

        Gate::define('isAdmin', function (User $user) {
            // $roleuser = Auth::user()->roleuser()->firstOrFail();
            $roleuser = $user->roleuser()->where('roles.slug', 'admin')->count();
            // $roleuser = $user->roleuser()->firstOrFail();
            return $roleuser > 0;
        });

        Gate::define('isTimDinas', function (User $user) {
            $roleuser = $user->roleuser()->whereIn('roles.slug', ['admin', 'approval', 'checker'])->count();
            return $roleuser > 0;
        });

        Gate::define('isTimBos', function (User $user) {
            $roleuser = $user->roleuser()->whereIn('roles.slug', ['admin', 'approval', 'checker', 'kepala-sekolah', 'bendahara'])->count();
            return $roleuser > 0;
        });

        Gate::define('isKepsekBendahara', function (User $user) {
            $roleuser = $user->roleuser()->whereIn('roles.slug', ['kepala-sekolah', 'bendahara'])->count();
            return $roleuser > 0;
        });

        Gate::define('canAkses', function (User $user, $value) {
            $roleuser = $user->roleuser()->whereIn('roles.slug', ['kepala-sekolah', 'bendahara'])->first();
            return $roleuser !== null && $roleuser->sekolah_id === $value->sekolah_id;
        });
    }
}
