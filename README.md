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
Create .env file with the variables:
PS: the data provided are for coding challenge purpose.

```
HOST=localhost
PORT=3001

DATABASE_HOST=127.0.0.1
DATABASE_PORT=27017
DATABASE_NAME=air-quality-db
DATABASE_USERNAME= YOUR_DATABASE_USERNAME
DATABASE_PASSWORD= YOUR_DATABASE_PASSWORD

COUNTRY_LAT= YOUR_COUNTRY_LATITUDE
COUNTRY_LON= YOUR_COUNTRY_LONGITUDE

API_KEY= YOUR_API_KEY_FROM_YOUR_IQAIR
```

To install locally the project using yarn : 
```
yarn install
```

To run the project in development mode :
```
yarn run dev
```

## Endpoints

### GET Nearest City Air Quality.
```
http://localhost:3001/api/pollutions/nearestCity?lat={{LATITUDE}}&lon={{LONGITUDE}}&key={{API_KEY}}
```
Return nearest city's air quality, using GPS coordinates or IP geolocation.

### GET Most Polluted City ex. Paris.

```
http://localhost:3001/api/pollutions/mostPollutedCity?lat={{LATITUDE}}&lon={{LONGITUDE}}&key={{API_KEY}}
```

## CRON JOB
The cron job implemented on the /src/utils/pollution.util.js file runs to check the air quality for the Paris zone every 1 minute than it saves them in the database with date and time when saving it.

## Tests
To run the tests : 
```
yarn text
```
