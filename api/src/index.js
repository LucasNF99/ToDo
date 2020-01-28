const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const dotenv = require('../config/dotenv');
const username = dotenv('DB_USERNAME');
const password = dotenv('DB_PASSWORD');


mongoose.connect(`mongodb+srv://${username}:${password}@cluster0-ysyzi.mongodb.net/todo?retryWrites=true&w=majority`,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

app.listen(3333, console.log('Rodando na porta 3333'));