@extends('emails.template')

@section('content')
<div class="justify-center">
    <div>
        <img height="200px" src="{{ $message->embed(asset('img/company.png')) }}" alt="">
    </div>
    <br>
    <div>
        <span class="sub-title">
            Se ha creado la empresa <b>{{ $company->name }}</b>
        </span>
    </div>
    <br>
    <div>
        @if($company->website)
            <span class="sub-title">
                <a href="{{ $company->website }}">Visitar</a>
            </span>
        @endif
    </div>
</div>
@endsection
