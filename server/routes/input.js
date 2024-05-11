const { body, validationResult } = require('express-validator');
const fetchUser = require('../middleware/fetchUser');
const Input = require('../models/Input');
const express = require('express');
const router = express.Router();

router.post('/getmaterials', fetchUser, async (req, res) => {
	const materials = await Input.find({ username: req.user.id });
	res.json(materials);
});

// Add materials Endpoint
router.post('/addmaterials', fetchUser, [
	body('materials').exists()
], async (req, res) => {
	try {
		const { materials } = req.body;
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const input = new Input({
			materials, username: req.user.id
		});
		const savedInput = await input.save();
		res.json(savedInput);
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
});

module.exports = router;