# Yassir air quality mini project
# Air Quality REST API
Rest API for exposing the air quality information of a nearest city to GPS coordinates using external IQair API. Created with Express and MongoDB as the database.

## Technologies
Project is created with:
* Express version : 4.18.2
* dotenv version : 16.0.3
* Mongoose version : 6.8.0
* node-cron version : 3.0.2
* axios version : 1.2.1
* chai version : 4.3.7
* mocha : 10.2.0

## Setup
To install locally the project using yarn : 
```
yarn install
```

To run the project in development mode :
```
npm run dev
```

To run the project in production mode :
```
npm run start
```

## Endpoints

### GET Air Quality with a given zone
```
http://localhost:3001/api/pollutions/nearestCity
```
Return nearest city's air quality, using GPS coordinates or IP geolocation.

#### Quert parameters
```json
{
    "lat": "48.856613",
    "lon": "2.352222",
    "key": "2f3bbab4-b50b-467f-a0e8-b43ea2cfa505"
}
```

## CRON JOB
The cron job implemented on the /src/utils/pollution.util.js file runs to check the air quality for the Paris zone every 1 minute than it saves them in the database with date and time when saving it.

## Tests
To run the tests : 
```
yarn text
```