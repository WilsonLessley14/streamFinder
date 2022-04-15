const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
<<<<<<< HEAD:server/server.js
const path = require('path');
const port = 3000;

const { getTitleIds, getTitleDetails, getRelated } = require('../apiMethods/search.js');
const { insertTitle, insertUser } = require('../database/dbMethods.js');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'))

// app.listen(port, () => {
//   console.log('listening on port ', port);
// });
=======
const path = require("path");
const oauth = require("./route_controllers/oauth.js");
require("dotenv").config();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
>>>>>>> 4e96623ddc82fb05518a47178c0b578d85e0b18e:server.js

app.use("/oauth", oauth);

app.get("/search", (req, res) => {
  console.log("get request search button");
  res.send("get request search button");
  cosole.log(process.env.GOOGLE_CLIENT_ID);
});

app.listen(port, () => {
  console.log("listening on port ", port);
});
<<<<<<< HEAD:server/server.js



//////////////////////
// Login / Signup
///////////////////////

app.get('/login', (req, res) => {})

app.get('/signup', (req, res) => {
  var user = req.body.user;
  insertUser(user)
  .then(data => {
    console.log('user creation success')
    res.send(data);
  })
})





///////////////////////
// Watchlist
///////////////////////

app.get('/watchlist/:userID', (req, res) => {

})


///////////////////////
// Settings
///////////////////////



module.exports = app;
=======
>>>>>>> 4e96623ddc82fb05518a47178c0b578d85e0b18e:server.js
