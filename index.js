const express = require('express')
const bodyParser = require('body-parser');
const app = express()
require('dotenv').config()

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))