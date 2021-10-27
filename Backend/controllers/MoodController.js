
const express = require('express');
const router = express.Router();
const Mood = require('../models/Mood');




router.get('/', async (req, res, next) => {
	try {
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

		next(error);
	}
});

router.post('/', async (req, res, next) => {
	try {
	
		const mood = await Mood.create(req.body);
	
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
