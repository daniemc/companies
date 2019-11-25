<?php

namespace App\Http\Controllers\API;

use App\Company;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Mail\CompanyCreated;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Mail;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Company::paginate(10);
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
        $file_path = $this->storeFile($request->file('logo'));

        $company = Company::create(
            array_merge($request->except('logo'), ['logo' => $file_path])
        );

        Mail::to([$request->email])
            ->queue(
                (new CompanyCreated($company))
                ->onQueue('emails')
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
        $validateLogo = true;
        if (!$request->file('logo')) {
            $validateLogo = false;
        }
        $this->validateCompany($request, $validateLogo);
        $file_path = $this->storeFile($request->file('logo'));
        Company::where('id', $request->id)
            ->update(
                array_merge($request->except(['logo', 'id']), ['logo' => $file_path ? $file_path : $company->logo])
            );
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
     * Return all companies without pagination
     *
     * @return \Illuminate\Http\Response
     */
    public function allCompanies()
    {
        return Company::all();
    }

    public function updateLogo(Request $request)
    {
        $file_path = $this->storeFile($request->file('logo'));
        Company::where('id', $request->id)
            ->update(['logo' => $file_path]);
    }

    /**
     * Validate company model after create or update
     *
     * @param \Illuminate\Http\Request $request
     * @param Boolean $validateLogo
     */
    protected function validateCompany(Request $request, $validateLogo = true)
    {
        $request->validate([
            'name' => 'required|string|max:191',
            'email' => 'nullable|email|max:191',
            'logo' => $validateLogo ? 'required|image|dimensions:min_width=100,min_height=100' : '',
            'website' => 'nullable|url|max:191',
        ]);
    }

    /**
     * Store uploaded file and returns file path
     *
     * @param UploadedFile|null $file
     * @return String
     */
    protected function storeFile($file)
    {
        if (!$file) {
            return null;
        }

        $file_name = $file->getClientOriginalName();
        $path = "companies\logos";
        $file_path = $file->storeAs($path, $file_name, 'public');

        return $file_path;
    }
}
