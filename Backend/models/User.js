

const mongoose = require('../db/connection');


const UserSchema = new mongoose.Schema({
	username: String,
	name: String,
});


const User = mongoose.model('User', UserSchema);

module.exports = User;
