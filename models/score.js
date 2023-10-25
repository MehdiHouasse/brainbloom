
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  category: String,
  score: Number
});

module.exports = mongoose.model('Score', scoreSchema);
