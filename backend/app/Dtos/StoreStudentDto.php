<?php

namespace App\Dtos;

use Illuminate\Support\Arr;

class StoreStudentDto
{
    public readonly string $username;
    public readonly string $email;

    public function __construct(public readonly array $patientData)
    {
        $this->username = Arr::get($patientData, 'username');
        $this->email = Arr::get($patientData, 'email');
    }
}
