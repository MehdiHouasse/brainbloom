const axios = require('axios');
const Question = require('../../models/question');

module.exports = {
  create,
};

async function create(req, res) {
  const BASE_URL = `https://opentdb.com/api.php?amount=10&category=${req.body.category}&difficulty=${req.body.difficulty}&type=multiple`;

  try {
    // Fetch questions from the external API using Axios
    const response = await axios.get(BASE_URL);
    const quizData = response.data;
    const quizQuestions = quizData.results;

    if (!quizQuestions || quizQuestions.length === 0) {
      return res.status(404).json({ error: 'No questions found' });
    }

    // Map the external API data to your question model
    const questionsToInsert = quizQuestions.map((externalQuestion) => {
      return {
        category: externalQuestion.category,
        type: externalQuestion.type,
        difficulty: externalQuestion.difficulty,
        question: externalQuestion.question,
        correct_answer: externalQuestion.correct_answer,
        incorrect_answers: externalQuestion.incorrect_answers,
      };
    });

    // Insert the questions into your database
    const insertedQuestions = await Question.insertMany(questionsToInsert);

    res.json({ message: 'Questions added to the database', insertedQuestions });
  } catch (err) {
    res.status(400).json(err);
  }
}
