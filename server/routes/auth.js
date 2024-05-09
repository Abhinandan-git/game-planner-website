const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const JWT_SECRET = 'abc';

router.post('/createUser', [
	body('username').trim().notEmpty().isLength({ min: 3 }),
	body('password').trim().notEmpty().isLength({ min: 5 }),
], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	try {
		let user = await User.findOne({ password: req.body.password });
		if (user) {
			return res.status(400).json({ error: "A user with this username already exists" })
		}
		const salt = await bcrypt.genSalt(10);
		const securedPassword = await bcrypt.hash(req.body.password, salt);
		user = await User.create({
			username: req.body.username,
			password: securedPassword
		});
		const data = {
			user: {
				id: user.id
			}
		}
		const authToken = jwt.sign(data, JWT_SECRET);
		res.json({ authtoken: authToken });
	} catch (error) {
		res.status(500).send("Error");
	}
});

module.exports = router;