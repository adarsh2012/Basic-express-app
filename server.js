var express = require('express');
var path = require('path');
var http = require('http');
var app = express();
var server = http.Server(app);
var PORT = process.env.PORT || 8080;

app.use('/', express.static(path.join(__dirname)));
app.get('/', (req,res) => {
	res.sendFile("/index.html");
});

server.listen(PORT, () => {
	console.log("Listening to",PORT);
});
