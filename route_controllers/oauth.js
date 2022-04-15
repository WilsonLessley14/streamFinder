const express = require("express");
const router = express.Router();
const google_oauth = require("./google_auth.js");

router.use((req, res, next) => {
  console.log("The router has been used: " + Date.now());
  next();
});

router.get("/", (req, res) => {
  console.log("Is it here?");
});

//Getting the user from Google with the code
router.get("/google", (req, res) => {
  const url = google_oauth.get_url();
  console.log("oauth url controller", url);
  res.send(url);
});

//Getting the current user
router.get("/redirect/google", (req, res) => {
  console.log("This is a successful redirect..");
  console.log(req.query);
  res.end();
});

// router.get("/google", google);
// router.get("/facebook", facebook);
// roter.get("/myspace", myspace);

module.exports = router;
