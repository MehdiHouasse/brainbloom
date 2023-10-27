const Quiz = require('../../models/quiz');

module.exports = {
  create,
  save,
  getAll,
  deleteQuiz
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
async function save(req, res) {
  console.log(req.body);
  req.body.user = req.user._id
  const quiz = await Quiz.create(req.body)
  res.json(quiz);
}
async function getAll (req, res){
  const quizs = await Quiz.find().populate('user');
  res.json(quizs);
}

async function deleteQuiz(req, res) {
  const quiz =  await Quiz.findOneAndDelete(

    { _id: req.params.id, user: req.user._id }
  );
  res.json(quiz);
}
