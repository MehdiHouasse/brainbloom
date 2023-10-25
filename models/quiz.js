// models/quiz.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  // questions: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Question',
  //   },
  // ],
  category: String,
  difficulty: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  // score: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Score',
  // },
  qScore: Number
});

module.exports = mongoose.model('Quiz', quizSchema);
