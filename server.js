var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var stringifyFile;

app.use(bodyParser.json());
path = require("path");

app.get('/getNote', function (req, res) {

	fs.readFile('./test.json', 'utf8', function(err, data) {
	    if (err) throw err;
	    stringifyFile = data
	    res.send(data);
	});
});

app.post('/updateNote/:note', function (req, res){
	stringifyFile + req.params.note;
	fs.writeFile('./test.json', stringifyFile, function(err) {
	    If (err) throw err;
	    res.send(req.params.note);
	    console.log('file updated');
	});

});

app.listen(3000, 'localhost', function() {
    console.log('Nasłuchuje na porcie 3000');
});