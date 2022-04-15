var app = require('./server.js');

var port = 3000;

app.listen(port, () => {
  console.log(`listening on port:${port}`);
})