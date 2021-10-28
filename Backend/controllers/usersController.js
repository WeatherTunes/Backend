const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.get('/', async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (error) {
        next(error)
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        res.json(user);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
	try {
		const user = await User.create(req.body);
		res.status(201).json(user);
	} catch (error) {
		next(error);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const id = req.params.id;
		const deletedOne = await User.findByIdAndDelete(id);
		// res.sendStatus(204);
		res.status(204).json(deletedOne);
	} catch (error) {
		next(error);
	}
});



module.exports = router;