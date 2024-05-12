const { body, validationResult } = require('express-validator');
const fetchUser = require('../middleware/fetchUser');
const Input = require('../models/Input');
const express = require('express');
const router = express.Router();

router.post('/getmaterials', fetchUser, async (req, res) => {
	try {
		const materials = await Input.find({ username: req.user.id });
		res.json(materials);
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
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

router.put('/updatematerials/:id', fetchUser, async (req, res) => {
	try {
		const { materials } = req.body;
		const newMaterials = {};
		if (materials) { newMaterials.materials = materials; }
		let material = await Input.findById(req.params.id);
		if (!material) { return res.status(404).send("Not Found"); }
		if (material.username.toString() !== req.user.id) { return res.status(401).send("Not Alowed"); }
		material = await Input.findByIdAndUpdate(req.params.id, { $set: newMaterials }, { new: true });
		res.json({ material });
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
});

module.exports = router;