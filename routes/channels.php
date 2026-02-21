<?php

use App\Models\User;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Auth;

Broadcast::channel('tim-bos', function (User $user) {
    $role = $user->roleuser()->firstOrFail();
    return $role->slug === 'admin' || $role->slug === 'approval' || $role->slug === 'checker';
});

Broadcast::channel('sekolah.{sekolah}', function ($sekolah) {
    return Auth::check();
});