'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonalModel = Schema({
	name: String,
	surname: String,
	age: Number,
	position: String,
	identification: Number,
	image: String
});

module.exports = mongoose.model('Personal', PersonalModel);