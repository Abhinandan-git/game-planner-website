const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://databaseAdmin:UO2OE8yrYQ5POVk5@gamedatabase.y9jviu5.mongodb.net/planner";

const connectToMongo = async () => {
	mongoose.connect(mongoURI);
	console.log('Connected to MongoDB Atlas');
}

module.exports = connectToMongo;