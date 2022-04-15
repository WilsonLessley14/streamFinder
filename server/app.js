const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
const port = 3000;

const { getTitleIds, getTitleDetails, getRelated } = require('../apiMethods/search.js');
const { insertTitle, insertUser, retrieveAllStreams, retrieveOneStream, insertStream} = require('../database/dbMethods.js');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'))

///////////////////////
// Test
///////////////////////

app.get('/test', (req, res) => {
  res.sendStatus(200);
})


///////////////////////
// Search
///////////////////////

// given a title string from the search component, this sends back all title detail objects
// currently limited to 5 results to save API calls
app.post('/search', (req, res) => {
  var searchTerm = req.body.query;
  getTitleIds(searchTerm)
  .then(ids => getTitleDetails(ids.slice(0, 5)))
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    console.log('error retrieving search results => ', err)
  });
});


// given an id, this sends back all related title detail objects
app.post('/related', (req, res) => {
  var id = req.body.query;
  getRelated(id)
  .then(data => res.send(data));
});



///////////////////////
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

app.put('/update_user', (req, res) => {
  let user = req.body.user;
  updateUser(user)
  .then(res => {
    console.log('user update successful')
  })
  .catch(err => {
    console.log('error updating user => ', err)
  })
})


///////////////////////
// Settings
///////////////////////

app.get('/streams', (req, res) => {
  retrieveAllStreams()
  .then(data => {
    res.status(200).json({success: true, data: data})
  })
  .catch(err => res.status(400).json({success: false, error: err}))
})

app.get('/streams/:stream', (req, res) => {
  retrieveOneStream(req.params.stream)
  .then(data => {
    res.status(200).json({success: true, data: data})
  })
  .catch(err => res.status(400).json({success:false, error: err}))
})

app.post('/streams', (req, res) => {
  insertStream(req.body)
  .then(() => res.status(201).json({success: true}))
  .catch(err => res.status(400).json({success: false, error: err}))

})

module.exports = app;
