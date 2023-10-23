const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose (for populating Menu Item queries)
require('./category');
const quizSchema = require('./quizSchema');

module.exports = mongoose.model('Quiz', quizSchema);
