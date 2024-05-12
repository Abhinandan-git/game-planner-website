const mongoose = require("mongoose");
const { Schema } = mongoose;

const MaterialSchema = new Schema({
	key: { type: Number, required: true },
	name: { type: String, required: true },
	rarity: { type: Number, required: true },
	src: { type: String, required: true },
});

const Material = mongoose.model('materialinfo', MaterialSchema);
Material.createIndexes();
module.exports = Material;