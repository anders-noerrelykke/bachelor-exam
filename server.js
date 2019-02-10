const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const mongo = require("mongodb").MongoClient;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

global.db = null;
dbPath = "mongodb://arne:bookie123@ds215563.mlab.com:15563/bookie-db";

mongo.connect(dbPath, (err, db) => {
  if (err) {
    console.log("Couldn't connect to database");
    console.log(err);
    return false;
  }
  console.log("Connected to database!");
  global.db = db;
});

app.get("/", (req, res) => {
  res.send("client/index.html");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
