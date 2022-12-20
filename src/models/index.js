const dbConfig = require('../configs/db.config');
const pollutions = require('./pollution.model')
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.pollutions = pollutions;

module.exports = db;