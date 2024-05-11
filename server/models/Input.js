const mongoose = require("mongoose");
const { Schema } = mongoose;

const InputSchema = new Schema({
	username: {
		type: mongoose.Schema.Types.ObjectId, ref: 'user'
	},
	materials: {
		type: Array, "default": []
	}
});

const Input = mongoose.model('input', InputSchema);
module.exports = Input;