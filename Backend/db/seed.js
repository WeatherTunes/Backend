const mongoose = require('./connection');

const Mood = require('../models/Mood');
const User = require('../models/User');
const moodseeds = require('./seeds.json');

User.deleteMany()
	// Use insertMany and pass it the seed data
	.then(() => User.insertMany(seedData))
	// Log the successful results
	.then(console.log)

	.then(() => Todo.deleteMany())

	.then(() => Todo.insertMany(seedTodoData))

	.then(console.log)
	// Log any errors if things didn't work
	.catch(console.error)
	// Use finally, so that this code will run whether or not
	// things worked and close our connection to the database.
	.finally(process.exit);
