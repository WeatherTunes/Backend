
require('dotenv').config();
const mongoose = require('mongoose');


const mongoURI = "";
if (process.env.NODE_ENV === 'production') {
	mongoURI = process.env.DB_URL;
} else {
	mongoURI = 'mongodb://localhost/8000';
}
const db = mongoose.connection;


mongoose.connect(mongoURI);


db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));


db.on('open', () => {
	console.log('✅ mongo connection made!');
});


module.exports = mongoose;