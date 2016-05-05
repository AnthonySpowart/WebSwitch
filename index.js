var config = require('./config');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var redis = require("redis"),
    client = redis.createClient();

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/setSwitch', function(req,res){ 
  var key = buildKey(req.query);
  var value = req.query.value;

  client.set(config.appkey + key, value, redis.print);
  res.render('setSwitch');
});

app.post('/setSwitch', function(req,res){ 
  var key = buildKey(req.body);
  var value = req.body.value;
  
  client.set(config.appkey + key, value, redis.print);
  res.status('200').send('OK');
  
});

app.get('/getSwitch', function(req,res){
  var key = buildKey(req.query);
  
  client.get(config.appkey + key, function (err, reply) {
    res.send(reply);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

function buildKey(params) {

  var keyString = "";
  
  for (var propName in params) {
    if (params.hasOwnProperty(propName) && propName !== 'value' ) {
     keyString += params[propName];
    }
  }

  return keyString;
}