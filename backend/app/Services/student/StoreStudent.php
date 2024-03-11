<?php

namespace App\Services\student;

use App\Dtos\StoreStudentDto;
use App\Models\Student;

class StoreStudent
{
    public function __construct(public StoreStudentDto $storeStudentDto)
    {
        $this->init();
    }

    public function init()
    {
        return Student::create([
            'username' => $this->storeStudentDto->username,
            'email' => $this->storeStudentDto->email,
        ]);
    }
}
