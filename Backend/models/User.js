

const mongoose = require('../db/connection');


const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	firstname: {
		type: String,
		Required: true,
	}, 
	zipcode: Number,
});


const User = mongoose.model('User', UserSchema);

module.exports = User;
