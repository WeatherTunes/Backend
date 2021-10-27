const mongoose = require('./connection');

const Mood = require('../models/Mood');
const User = require('../models/User');
const moodseeds = require('./seeds.json');

Mood.deleteMany({})
	.then(() => User.deleteMany({}))
	.then(() => {
		return User.create({ email: 'fake@email.com', name: 'Fake Person' })
			.then((user) =>
				Moodseeds.map((mood) => ({ ...mood, owner: user._id }))
			)
			.then((Moods) => Mood.insertMany(Moods));
	})
	.then(console.log)
	.catch(console.error)
	.finally(() => {
		process.exit();
	});
