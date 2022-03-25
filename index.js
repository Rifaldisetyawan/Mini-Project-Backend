require("dotenv").config()
const express = require('express')
const db = require('./config/db')
const app = express()
const port = process.env.PORT
const merchants = require('./routes/merchant')
var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to our store')
})
app.use('/merchants',merchants)

app.listen(port, function(){
    console.log(`Example app listening on port ${port}`);
    db.connect(function(err){
      if(err) throw err;
      console.log('database connected');
    })
  })