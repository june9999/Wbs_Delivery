require('dotenv/config');
const express = require('express');

const connectDB = require('./config/db');

const PORT = process.env.PORT || 8000;
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
})