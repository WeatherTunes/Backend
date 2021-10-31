const mongoose = require('../db/connection');

const userSchema = new mongoose.Schema({
	firstname: String,
	zipcode: Number,
	email: { type: String, match: /.+\@.+\..+/ },
});

module.exports = mongoose.model('User', userSchema);
