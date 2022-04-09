require('dotenv').config();
const key = process.env.API_KEY;
const axios = require('axios');
const Promise = require('bluebird');


// uses query string to retrieve available titles from API
var getTitleIds = (string) => {
  return new Promise((resolve, reject) => {
    resolve(axios.get(`https://api.watchmode.com/v1/search/?apiKey=${key}&search_field=name&search_value=${string}`))
  }).then(res => {
    let results = res.data.title_results;
    return results.map(obj => obj.id);
  });
}


// uses array of ids to gather all title detail objects from API
var getTitleDetails = (ids) => {
  var promises = [];
  for (let i = 0; i < ids.length; i++) {
    var id = Number(ids[i]);
    promises.push(new Promise((resolve, reject) => {
      resolve(axios.get(`https://api.watchmode.com/v1/title/${id}/details/?apiKey=${key}&append_to_response=sources`))
    }))
  }
  return Promise.all(promises).then(data => data.map(obj => obj.data)).catch(err => {
    console.log('error completing all promises for related titles')
  })
}


// uses id to retrieve all related title detail objects
var getRelated = (id) => {
  var promises = [];
  for (let i = 0; i < array.length; i++) {
    var id = Number(array[i]);
    promises.push(new Promise((resolve, reject) => {
      resolve(axios.get(`https://api.watchmode.com/v1/title/${id}/details/?apiKey=${key}&append_to_response=sources`))
    }));
  }
  return Promise.all(promises).then(data => data.map(obj => obj.data)).catch(err => {
    console.log('error completing all promises for related titles')
  })
}


module.exports = {

  getTitleIds: getTitleIds,
  getTitleDetails: getTitleDetails,
  getRelated: getRelated

}