const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema({
  name: String,
  user: String,
  list: String,
  description: String,
});

module.exports = mongoose.model('Board', BoardSchema);