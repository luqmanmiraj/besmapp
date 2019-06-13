const express = require('express')
const app = express()
const port = 3000
//const func =  require('./callbackfunction.js');
//console.log(func.functionsssff);
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

const mongoConnect = require('./util/database');


//const functionsssff= (req, res) => res.send('Hello World! again ');
//app.get('/', functionsssff)

mongoConnect(client => {
    console.log(client);
    app.listen(port);
  });