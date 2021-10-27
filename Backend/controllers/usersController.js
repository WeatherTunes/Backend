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
		
		const newUser = await User.create(req.body);
		res(newUser);
	} catch (error) {
		next(error);
	}
});



module.exports = router;