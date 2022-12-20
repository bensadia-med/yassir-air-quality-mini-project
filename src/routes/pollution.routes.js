const pollutions = require('../controllers/pollution.controllers');

let router = require('express').Router();


router.get('/mostPollutedCity', pollutions.findCityPollutionData)

router.get('/nearestCity', pollutions.findNearestCityPollutionData)

module.exports = router;