<<<<<<< HEAD
var app = require('./server.js');

var port = 3000;

app.listen(port, () => {
  console.log(`listening on port:${port}`);
=======

const app = require('./app.js');
const port = 3000;

app.listen(port, () => {
  console.log('listening on 3000');
>>>>>>> 4e96623ddc82fb05518a47178c0b578d85e0b18e
})