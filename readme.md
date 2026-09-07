# Welcome to Flights Service

## Project Setup
- Clone the project on your local 
- execute `npm install` on the same path as of your rootbdirectory of the downloaded project
-create a `.env` file in the root directory and add the following environment variable
    -`PORT=3000`
-Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
-Once you'va added your db config as listed above , go to the src folder from your terminal and execute `npx sequelize db:create`
and the execute

`npx sequelize db:migrate`
```

## DB Design
 - Airplane Table
 - Flight Table
 - Airport
 - City

-a flight belongs to an airplane but one airplane can be used in multiple flights
-A city has many airports but one airport belongs to one airport