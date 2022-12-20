const cron = require('node-cron');
const {getNearestCityPollutionData, createPollutionData} = require('../services/pollution.services')

const params = {
  lat: process.env.COUNTRY_LAT,
  lon: process.env.COUNTRY_LON,
  key: process.env.API_KEY
}

const pollutionCron = () => {
  cron.schedule('* * * * *', async () => {
    const pollutionData = await getNearestCityPollutionData(params)
    await createPollutionData(pollutionData)
  }).start();
}

module.exports = {
  pollutionCron
}