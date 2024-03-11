<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Dtos\StoreStudentDto;
use App\Services\student\StoreStudent;
use App\Http\Resources\StudentResource;
use App\Http\Requests\StoreStudentRequest;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): AnonymousResourceCollection
    {
        $students = Student::select('id', 'username', 'email')->paginate(5);

        return StudentResource::collection($students);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStudentRequest $request): array
    {
        $data = new StoreStudentDto($request->validated());

        return tryCatch(
            fn() => new StoreStudent($data),
            'Student created successfully',
            'Problem creating Student',
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student): array
    {
        return tryCatch(
            fn() => $student->delete(),
            'Student deleted successfully',
            'Problem deleting Student',
        );
    }
}
