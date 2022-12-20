const axios = require('axios').default;
const db = require("../models");
const { Pollution } = db.pollutions;

const getNearestCityPollutionData = async (params) => {
  const { lat, lon, key } = params
  try {
    // Get nearest city data using IP geolocation
    if (!(params.hasOwnProperty('lat') && params.hasOwnProperty('lon'))) {
      const data = await axios.get('http://api.airvisual.com/v2/nearest_city', {
        params: {
          key
        }
      })
      return data.data.data
  
      // Get nearest city data using GPS coordinates
    } else {
      const data = await axios.get('http://api.airvisual.com/v2/nearest_city', {
        params: {
          lat,
          lon,
          key
        }
      })
      return data.data.data
    }
  } catch (error) {
    return error.message || "Some error occurred while retreiving the nearest city data pollution."
  }
}

const createPollutionData = async (pollutionData) => {
  try {
    // Create a Pollution
    const { city, location, current } = pollutionData
    const pollution = new Pollution({
      city: city,
      latitude: location.coordinates[1],
      longitude: location.coordinates[0],
      ts: current.pollution.ts,
      aqius: current.pollution.aqius,
      mainus: current.pollution.mainus,
      aqicn: current.pollution.aqicn,
      maincn: current.pollution.maincn,
    });

    // Save PollutionData in the database
    pollution.save(pollution).then(data => {
      console.log(`Pollution data created at ${new Date(data.ts)}`, data)
    }).catch(err => {
      return err.message || "Some error occurred while creating the pollution data."
    });
  } catch (error) {
    return error.message || "Some error occurred while creating the Pollutions data."
  }
};

// NOT WORKING Having some issue with the find funtion not returning any data.
const findPollutionData = async (params) => {
  Pollution.find({latitude: params.lat, longitude: params.lon})
    .then(data => {
      return data.sort({aqicn: -1})
    })
    .catch(err => {
      return err.message || "Some error occurred while retrieving Pollutions."
    });
}

module.exports = {
  getNearestCityPollutionData,
  createPollutionData,
  findPollutionData
}