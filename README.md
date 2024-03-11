# Student Manager App

please run:
1. `npm install` in `frontend` folder
2. `npm run dev` in `frontend` folder
3. `php artisan migrate` in backend folder
4. `php artisan serve` in backend folder

This application uses lightweight SQLite database placed in `database/database.sqlite`

this application uses axios as an HTTP client to request the server.

`frontend/src/core/services/ApiService.ts` is responsible for initializing and creating axios instance.

we use interceptors for: 
1. Laravel validation errors(We perform validation on both the frontend and backend)
2. Success messages

Navigation through pages is handled with `vue-router`, index page displays all students, and creating a student redirects the user to the create-user route while displaying a modal at the same time. Any routes that don't exist redirect to the 404 error page.

In the backend, void actions executed within a custom `tryCatch` helper function will return either a 0 or 1 status, along with a proper message and a "withResponse" key. This information is tracked in `axios` interceptors for easy handling.

The application list features pagination, displaying up to 5 students per page.

The test file is located in the `tests/Feature/StudentTest.php` directory. please run `php artisan test --testsuite=Feature` for test apis

This application employs `Data Transfer Objects (DTO)` and `Service` architecture to manage student data.






