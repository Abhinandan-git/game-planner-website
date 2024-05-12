const Character = require('../models/CharacterInfo');
const Material = require('../models/MaterialInfo');
const express = require('express');
const router = express.Router();

router.get('/getcharacterinfo', async (req, res) => {
	try {
		const characters = await Character.find();
		res.json(characters);
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
});

router.get('/getmaterialinfo', async (req, res) => {
	try {
		const material = await Material.find();
		res.json(material);
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
});

module.exports = router;