const express = require('express')
const app = express()
const port = 3000
//const func =  require('./callbackfunction.js');
//console.log(func.functionsssff);



const functionsssff= (req, res) => res.send('Hello World! again ');
app.get('/', functionsssff)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))