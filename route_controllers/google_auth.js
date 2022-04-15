const { google } = require("googleapis");
const app = require("express")();
const axios = require("axios");
require("dotenv").config();
const $ = require("jquery");

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "http://localhost:3000/oauth/redirect/google"
);

const scopes = [
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/userinfo.email",
];

module.exports.get_url = function () {
  let url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });
  return url;
};

module.exports.get_code = async function getAuthorizationCode() {
  console.log("Testing");
  console.log("URL: ", google_auth_url);
  const code = await axios.get({
    method: "GET",
    url: google_auth_url,
  });
  return code;
};
