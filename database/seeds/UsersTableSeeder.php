<?php

use Illuminate\Database\Seeder;
use App\User;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = [
            "name" => 'Admin',
            "password" => Hash::make('password'),
            "email" => 'admin@admin.com',
        ];

        User::insert($user);
    }
}
