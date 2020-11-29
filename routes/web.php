<?php

use Illuminate\Support\Facades\Route;

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
    return view('startpage');
});

Route::get('/dashboard', function () {
    return view('startpage');
});

Route::get('/dashboard/anmelden', function () {
    return view('startpage');
});

Route::get('/dashboard/anstehend', function () {
    return view('startpage');
});

Route::get('/dashboard/vergangen', function () {
    return view('startpage');
});

Route::get('/dashboard/angemeldet', function () {
    return view('startpage');
});

Route::get('/styleguide', function () {
    return view('startpage');
});

Route::get('/impressum', function () {
    return view('startpage');
});

Route::get('/richtlinien', function () {
    return view('startpage');
});

Route::get('/datenschutz', function () {
    return view('startpage');
});

Route::get('/feedback', function () {
    return view('startpage');
});

Route::get('/kontakt', function () {
    return view('startpage');
});

Route::get('meetings', 'MeetingController@index');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
