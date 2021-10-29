

const mongoose = require('../db/connection');


const userSchema = new mongoose.Schema(
{
	email: {
    type: String,
    match: /.+\@.+\..+/,
    unique: true
  },
	firstname: {
		type: String,
	}, 
	zipcode: Number,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
