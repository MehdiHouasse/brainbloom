const Quiz = require('../../models/quiz');

module.exports = {
  create,
};


async function create(req, res) {
  const BASE_URL = `https://opentdb.com/api.php?amount=10&category=${req.body.category}&difficulty=${req.body.difficulty}&type=multiple`
  try {
    // Add the user to the db
    const quiz = await fetch(BASE_URL).then(res => res.json())
    console.log (quiz)
    res.json(quiz)


  } catch (err) {
    res.status(400).json(err);
  }
}
