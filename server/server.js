const connectToMongo = require("./db");
const express = require('express');

connectToMongo();
const app = express();
const port = 5000;

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/input', require('./routes/input'));
app.use('/api/info', require('./routes/info'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});