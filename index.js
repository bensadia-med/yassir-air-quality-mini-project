const express = require('express')
const cors = require("cors");
const app = express()
require('dotenv').config()
const pollutionRouter = require('./src/routes/pollution.routes');

// defining the cors 
var corsOptions = {
  origin: "http://localhost:8080"
};
app.use(cors(corsOptions));

// Setting the cron job
const crons = require('./src/utils/pollution.util')
crons.pollutionCron()



// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true,
  })
);
// Use the router.
app.use('/api/pollutions', pollutionRouter)

// connecting to the database.
const db = require('./src/models')
db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to the database.')
}).catch(err => {
  console.log('Cannot connect to the databse!', err)
  process.exit();
})

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to air-quality rest api." });
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))