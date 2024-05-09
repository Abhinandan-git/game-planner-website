const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://databaseAdmin:UO2OE8yrYQ5POVk5@gamedatabase.y9jviu5.mongodb.net/";
const client = new MongoClient(mongoURI);

const connectToMongo = async () => {
	try {
		await client.connect();
		console.log('Connected to MongoDB Atlas');
	} catch (error) {
		console.error('Error connecting to MongoDB Atlas', error);
	}
}

module.exports = connectToMongo;