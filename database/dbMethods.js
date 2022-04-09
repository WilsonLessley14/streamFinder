const { Title, User } = require('./index');
const { formatTitleObj, formatUserObj } = require('./objFormatting.js');


// Insert database title record
var insertTitle = (obj) => {
  var formattedObj = formatTitleObj(obj);
  return Title.create(formattedObj);
}

var insertUser = (obj) => {
  var formattedUser = formatUserObj(obj);
  return User.create(formattedObj)
}

var retrieveUser = (id) => {
  return User.find({ id: id });
}

var retrieveWatchlist = (id) => {
  return User.find({ id: id })
    .then(obj => {
      return {
        'watch_list': obj.watch_list,
        'watch_history': obj.watch_history
      }
    })
}


module.exports = {

  insertTitle: insertTitle,
  insertUser: insertUser,
  retrieveUser: retrieveUser,
  retrieveWatchlist: retrieveWatchlist

}