<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'foo' => 'Hola desde prop'
    ]);
});


Route::get('/about', function () {
    return Inertia::render('About', [
        'foo' => 'Desde About'
    ]);
});

Route::get('/contact', function () {
    return Inertia::render('Contact', [
        'foo' => 'Desde Contact'
    ]);
});

Route::group(["middleware" => ['auth:sanctum', 'verified']], function(){
    Route::get('/dashboard', function(){
        return Inertia::render('Dashboard', [
            'foo' => 'Dashboard'
        ]);
    })->name('dashboard');

    Route::resource('projects', ProjectController::class)->except(["show"]);
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
