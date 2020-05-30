'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ClientSchema = Schema({
	
	 completeName:String
	,title:String
	,telephone:String
	,companyName:String
	,companyDirection:String
	,companyTelephone:String


});

module.exports = mongoose.model('Cliente',ClientSchema);


