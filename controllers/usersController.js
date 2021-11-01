const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all
router.get('/', async (req, res, next) => {
    try {
        const users = await User.find({});
        res.json(users)
    } catch (err) {
        next(err)
    }
});

// Get by ID
router.get('/:id', async (req, res, next) => {
	try {
        const id = req.params.id;
		const user = await User.findById(req.params.id);
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
});

// Create a new user
router.post('/create', async (req, res, next) => {
	try {
		const user = await User.create(req.body);
		res.status(201).json(user);
	} catch (error) {
		next(error);
	}
});

// delete user
router.delete('/:id', async (req, res, next) => {
	try {
		const id = req.params.id;
		const deletedOne = await User.findByIdAndDelete(id);
		res.status(204).json(deletedOne);
	} catch (error) {
		next(error);
	}
});



module.exports = router;