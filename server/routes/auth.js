const { body, validationResult } = require('express-validator');
const fetchUser = require('../middleware/fetchUser');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const JWT_SECRET = 'abc';

// Create User Endpoint
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
		res.status(500).send("Internal Server Error");
	}
});

// Login Endpoint
router.post('/login', [
	body('username').trim(),
	body('password').exists(),
], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	const { email, password } = req.body;
	try {
		let user = await User.findOne({ email });
			if (!user) {
				return res.status(400).json({ errors: "Login with correct credentials" });
			}
			const passwordCompare = await bcrypt.compare(password, user.password);
			if (!passwordCompare) {
				return res.status(400).json({ errors: "Login with correct credentials" });
			}
			const payload = {
				user: {
					id: user.id
				}
			}
			const authToken = jwt.sign(payload, JWT_SECRET);
			res.json({ authToken });
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
});

// Get user details
router.post('/getuser', fetchUser, async (req, res) => {
	try {
		let userId = req.user.id;
		const user = await User.findById(userId).select("-password");	
		res.send(user);
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
});

module.exports = router;