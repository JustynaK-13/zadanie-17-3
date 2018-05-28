var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var stringifyFile;

app.use(bodyParser.json());


app.get('/getNote', function (req, res) {

	fs.readFile('./test.json', 'utf8', function(err, data) {
	    if (err) throw err;
	    stringifyFile = data
	    res.send(data);
	});
});

app.post('/updateNote/:note', function (req, res){
	
	fs.readFile('./test.json', 'utf8', function(err, data) {
		if (err) throw err;
		stringifyFile += req.params.note;
	});	
	fs.writeFile('./example.json', stringifyFile, function (err) {     
	        res.send(stringifyFile);
		    console.log('file updated');
	});
});

app.listen(3000, 'localhost', function() {
    console.log('Nasłuchuje na porcie 3000');
});