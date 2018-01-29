const express = require("express");
const moment = require("moment");

var timeStamp = function(timestamp){
	var unix;
	var natural;
	console.log()
	if(isNaN(timestamp)&&new Date(timestamp)!= "Invalid Date"){
		natural = timestamp;
		unix = new Date(timestamp).getTime();
	} else if(!isNaN(timestamp)&&timestamp>=0) {

		natural = moment.unix(timestamp).format("LL");
		unix = timestamp;

	} else {
		natural = null,
		unix = null
	}

	var myObj = {

		"unix" :  unix, 
		"natural": natural

	} 

	return myObj;	
}

module.exports = timeStamp;