<?php

namespace App\Http\Controllers\API;

use App\Company;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return company::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validateCompany($request);
        $file = $request->file('logo');
        $file_name = $file->getClientOriginalName();
        $path = "companies\logos";
        $file_path = $file->storeAs($path, $file_name, 'public');

        Company::create(
            array_merge($request->except('logo'), ['logo' => $file_path])
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function show(Company $company)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Company $company)
    {
        $this->validateCompany($request);
        Company::where('id', $request->id)
            ->update($request->except('id'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy(Company $company)
    {
        Company::destroy($company->id);
    }

    /**
     * Validate company model after create or update
     *
     * @param \Illuminate\Http\Request $request
     *
     */
    protected function validateCompany(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:191',
            'email' => 'nullable|email|max:191',
            'logo' => 'nullable|image|dimensions:min_width=100,min_height=100',
            'website' => 'nullable|url|max:191',
        ]);
    }
}
