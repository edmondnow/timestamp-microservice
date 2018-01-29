const express = require("express");
const app = express();
const router = express.Router();
const fs = require("fs");
const timeStamp = require("./timestamp.js");

//serve static files
app.use('/assets', express.static('assets'))
//setup routes;
router.get("/timestamp/:time", function(req, res, next){
	res.writeHead(200, {"Content-Type":"text/json"});
	var time = timeStamp(req.params.time);
	res.end(JSON.stringify(time));

});

//connect the router to the app
app.use(router);

//serve html
router.get("/timestamp", function(req, res, next){
	var myReadStream = fs.createReadStream(__dirname + '/assets/index.html', 'utf8');
	res.writeHead(200, {"Content-Type":"text/html"});
	myReadStream.pipe(res);
});

//connect to the port
app.listen(process.env.port || 3000, function(){
	console.log("Now listening for requests");
});
