const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");
const oauth = require("./route_controllers/oauth.js");
require("dotenv").config();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

app.use("/oauth", oauth);

app.get("/search", (req, res) => {
  console.log("get request search button");
  res.send("get request search button");
  cosole.log(process.env.GOOGLE_CLIENT_ID);
});

app.listen(port, () => {
  console.log("listening on port ", port);
});
