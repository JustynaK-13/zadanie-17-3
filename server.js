var express = require('express');
var app = express();
var fs = require('fs');
var stringifyFile;

app.use(bodyParser.json());



fs.readFile('./test.json', 'utf8', function(err, data) {
    if (err) throw err;
    stringifyFile = data
    res.send(data);
});