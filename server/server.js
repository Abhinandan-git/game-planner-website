// // get account details
// // get the material details from database
// // send the material details to database
// // get characters to load

// // Import the 'express' module
// const { MongoClient } = require('mongodb');
// const bodyParser = require('body-parser');
// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();

// app.use(cors());

// const port = process.env.PORT;
// const uri = process.env.MONGOURI;

// const client = new MongoClient(uri);

// const filter = {};
// const projection = { '_id': 0 };

// // Connect to MongoDB when the application starts
// const connectMongoDB = async () => {
// 	try {
// 		await client.connect();
// 		console.log('Connected to MongoDB Atlas');
// 	} catch (error) {
// 		console.error('Error connecting to MongoDB Atlas', error);
// 	}
// }

// connectMongoDB();

// app.get('/api/materials', async (req, res) => {
// 	try {
// 		const database = client.db('GameDatabase');
// 		const collection = database.collection('details');
// 		const result = await collection.find(filter, { projection }).toArray();
// 		res.json(result);
// 	} catch (error) {
// 		console.error('Error retrieving data from MongoDB Atlas', error);
// 		res.status(500).send('Internal Server Error');
// 	}
// });

// // Start the server and listen on the specified port
// app.listen(port, () => {
// 	console.log(`Server is running on http://localhost:${port}`);
// });