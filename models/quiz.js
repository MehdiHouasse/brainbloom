const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  category: {
    type: String,
    enum: [''],
  },
  type: {
    type: String,
  },
  difficulty: String,
  question: String,
  correct_answer: String,
  incorrect_answers: [],
})
const quizSchema = new Schema({
  questions: [questionSchema],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  score: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Score',
  },

});

module.exports = mongoose.model('Quiz', quizSchema);
