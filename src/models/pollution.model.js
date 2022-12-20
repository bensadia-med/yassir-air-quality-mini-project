const mongoose = require('mongoose')

const pollutionSchema = mongoose.Schema({
  city: {
    type: String
  },
  latitude: {
    type: String
  },
  longitude: {
    type: String
  },
  ts: {
    type: Date
  },
  aqius: {
    type: Number
  },
  mainus: {
    type: String
  },
  aqicn: {
    type: Number
  },
  maincn: {
    type: String
  },
}, {
  timestamps: true
});

pollutionSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Pollution = mongoose.model("pollution", pollutionSchema);

module.exports = {
  Pollution
}