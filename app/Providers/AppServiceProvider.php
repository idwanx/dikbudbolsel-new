<?php

namespace App\Providers;

use App\Models\Rka;
use App\Models\Sekolah;
use App\Models\Transaksi;
use App\Observers\RkasObserver;
use App\Observers\SekolahObserver;
use App\Observers\TransaksiObserver;
use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Events\QueryExecuted;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Rka::observe(RkasObserver::class);
        Sekolah::observe(SekolahObserver::class);
        Transaksi::observe(TransaksiObserver::class);

        $this->configureDefaults();

        Model::preventLazyLoading(!app()->isProduction());
        
        JsonResource::withoutWrapping();

        DB::listen(function (QueryExecuted $query) {
            $query->sql;
            $query->bindings;
            $query->time;
            $query->toRawSql();
        });
    }

    protected function configureDefaults(): void
    {
        Date::use(CarbonImmutable::class);

        DB::prohibitDestructiveCommands(
            app()->isProduction(),
        );

        Password::defaults(fn (): ?Password => app()->isProduction()
            ? Password::min(12)
                ->mixedCase()
                ->letters()
                ->numbers()
                ->symbols()
                ->uncompromised()
            : null
        );
    }
}
