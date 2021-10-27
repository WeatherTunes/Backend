
const express = require('express');
const router = express.Router();
const Mood = require('../models/Mood');




router.get('/', async (req, res, next) => {
	try {
		// 1. Get all the moods from the DB
		const moods = await Mood.find().populate({
			path: 'owner',
			select: 'name',
		});

		res.json(moods);
	} catch (error) {
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		/
		const id = req.params.id;
		const mood = await Mood.findById(id).populate({
            path: 'owner',
            select: 'name email -_id',
        });
		res.json(mood);
	} catch (error) {
		// 3. If there are errors, pass it on!
		next(error);
	}
});

// Create route: POST a new mood
router.post('/', async (req, res, next) => {
	try {
		// 1. Create a new mood
		const mood = await Mood.create(req.body);
		// 2. Send back the mood to the user, with status 201 Created
		res.status(201).json(mood);
	} catch (error) {
		next(error);
	}
});

router.put('/:id', async (req, res, next) => {
	try {
		const id = req.params.id;
		const mood = await Mood.findOneAndUpdate({ _id: id }, req.body, {
		});
		res.json(mood);
	} catch (error) {
		next(error);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const id = req.params.id;
		const deletedOne = await Mood.findByIdAndDelete(id);
		res.json(deletedOne);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
