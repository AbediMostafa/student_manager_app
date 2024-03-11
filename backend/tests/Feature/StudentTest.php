<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class StudentTest extends TestCase
{
    use RefreshDatabase;


    public function test_create_student()
    {
        $response = $this->post('/api/students/store', [
            'username' => 'Sally',
            'email' => 'sally1@sally.sally',
        ]);

        $response
            ->assertStatus(200)
            ->assertJson([
                'status' => 1
            ]);
    }

    public function test_student_index()
    {
        $this->post('/api/students/store', [
            'username' => 'Sally',
            'email' => 'sally1@sally.sally',
        ]);

        $response = $this->post('/api/students');

        $response->assertJsonFragment(['username' => 'Sally']);
        $response->assertJsonFragment(['email' => 'sally1@sally.sally']);
    }

    public function test_delete_student()
    {
        $this->post('/api/students/store', [
            'username' => 'Sally',
            'email' => 'sally1@sally.sally',
        ]);

        $response = $this->delete('/api/students/1');

        $response
            ->assertStatus(200)
            ->assertJson([
                'status' => 1
            ]);
    }
}
