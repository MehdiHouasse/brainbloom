// models/quiz.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  category: String,
  difficulty: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  qScore: Number
});

module.exports = mongoose.model('Quiz', quizSchema);
