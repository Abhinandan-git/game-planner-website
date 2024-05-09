const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const express = require('express');
const router = express.Router()

router.post('/', [
	body('username').trim().notEmpty().isLength({ min: 3 }),
	body('password').trim().notEmpty().isLength({ min: 5 }),
], (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	User.create({
		username: req.body.username,
		password: req.body.password
	}).then(user => res.json(user)).catch(error => {
		console.log(error);
		res.json({
			error: 'Enter unique value for username',
			message: error.message
		})
	});
});

module.exports = router;