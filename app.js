const express = require('express');
var cors = require('cors')
const app = express();
const path = require('path');
const PORT = 8000;

require('dotenv').config();

const Types2Route = require('./routes/Types2Router');
const Types3Route = require('./routes/Types3Router');
app.use('Types3', Types3Route);
app.use('Types2', Types2Route);
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const conn = require('./middlewares/tidb');
console.log("Trying to establish a connection to TiDB...");

if (conn) {
  console.log("Connection to TiDB successful");
} else {
  console.log("Connection to TiDB failed");
}


//Please don't delete this health API
app.use('/api/health', (req, res) => {
    res.send('Hello Autopilot');
  });

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

module.exports = app;