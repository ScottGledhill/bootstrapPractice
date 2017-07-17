var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('bodyparser');
var cors = require('cors');
var path = require('path');

var app = express();

const port = 3000;

app.listen(port,() => {
  console.log(`server started at ${port} 3000`)
  }
);
