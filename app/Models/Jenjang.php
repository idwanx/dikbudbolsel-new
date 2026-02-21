<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class Jenjang extends Model
{
    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function sekolahs(): HasMany
    {
        return $this->hasMany(Sekolah::class);
    }

    public function programs(): HasMany
    {
        return $this->hasMany(Program::class);
    }

    public function programSubprogram(): HasOneThrough
    {
        return $this->hasOneThrough(SubProgram::class, Program::class);
    }
}
