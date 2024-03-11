<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\StudentController;

Route::prefix('students')->group(function () {
    Route::post('/', [StudentController::class, 'index']);
    Route::post('/store', [StudentController::class, 'store']);
    Route::delete('/{student}', [StudentController::class, 'destroy']);
});
