<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'guest:api'], function () {
    Auth::routes();
});

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('logout', 'Auth\LoginController@logout');

    Route::apiResources([
        'company' => 'API\CompanyController',
        'employee' => 'API\EmployeeController'
    ]);

    Route::get('companies', 'API\CompanyController@allCompanies');
});
