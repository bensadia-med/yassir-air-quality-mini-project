const {getNearestCityPollutionData, findPollutionData} = require('../services/pollution.services')

const findNearestCityPollutionData = async (req, res) => {
    try {
      const data = await getNearestCityPollutionData(req.query)
      res.send({
        Result: {
          Pollution: data.current.pollution
        }
      })
    } catch (error) {
      res.status(500).send({
        message:
          error.message || "Some error occurred while retrieving pollution data."
      })
    }
}
const findCityPollutionData = async (req, res) => {
  try {
    const data = await findPollutionData(req.query)
    res.send(data)
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while finding the most polluted datetime of a city."
    })
  }
}
module.exports = {
  findNearestCityPollutionData,
  findCityPollutionData
}