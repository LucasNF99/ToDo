const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  name: String,
  card: [String],
});

module.exports = mongoose.model('List', ListSchema);