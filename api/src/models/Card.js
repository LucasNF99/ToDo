const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  name: String,
  user: [String],
  list: String,
  description: String,
});

module.exports = mongoose.model('Card', CardSchema);