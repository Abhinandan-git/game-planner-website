const mongoose = require("mongoose");
const { Schema } = mongoose;

const CharacterSchema = new Schema({
	rarity_key: { type: Number, unique: true },
	name_key: { type: Number, unique: true },
	name: { type: String, required: true },
	rarity: { type: Number, required: true },
	element: { type: String, required: true },
	weapon: { type: String, required: true },
	talent_books: { type: String, required: true },
	local_speciality: { type: String, required: true },
	world_boss_drops: { type: String, required: true },
	weekly_drops: { type: String, required: true },
	common_drops: {
		type: Object,
		one_star: { type: String, required: true },
		two_star: { type: String, required: true },
		three_star: { type: String, required: true }
	},
	src: { type: String, required: true }
});

const Character = mongoose.model('characterinfo', CharacterSchema);
Character.createIndexes();
module.exports = Character;