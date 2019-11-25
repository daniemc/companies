# Develop Engineer Test

This app is developed with Laravel 5.7 in the backend and Vue.Js in the frontend.
The FrontEnd theme used is AdminLTE V3

## Instalation

To install and run, you must have installed NPM follow the nexts steps:

1. Clone this repo https://github.com/daniemc/companies.git
2. cd companies
3. Copy .env file: **cp .env.example .env**
4. Run: **composer install**
5. Run: **php artisan key:generate**
6. Run: **php artisan jwt:secret**
7. Edit **.env** file:
- Add Mailgun credentials (Mailgun is the service configured to send emails)
8. Run: **php artisan migrate** and later **php artisan db:seed** to populate users table
9. Run: **npm install**
10. run: **npm run watch** for development
11. run: **npm run production** for production
12. run: **php artisan storage:link**
13. In order to run queued jobs (to send emails), you must run **php artisan queue:work database --queue=emails --tries=1** and let it active
- The default queue driver is database, if you don't run the queue command, the jobs will stay pendings in database jobs table
