"use strict";
var express = require('express');
var app = express();
process.env['NODE_ENV'] = 'production';
app.use(express.static('build'))

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/build/index.html');
})

app.listen(8000, function() {
  console.log('listening on port 8000')
});
