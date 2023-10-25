import React, { useState, useEffect } from "react";
import * as quizAPI from "../../utilities/quiz-api";

const QuizPage = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answerChoices, setAnswerChoices] = useState([]);
  const handleAnswerSelection = (answer) => {
    if (isAnswerSelected || !questions || !questions[currentQuestionIndex]) {
      return;
    }

    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].selectedAnswer = answer;
    setIsAnswerSelected(true);

    if (answer === questions[currentQuestionIndex].correct_answer) {
      setScore(score + 1);
    }
  };
  useEffect(() => {
    const a = [];
    a.push(
      questions[currentQuestionIndex].incorrect_answers,
      questions[currentQuestionIndex].correct_answer
    );
    const answers = a.flat();
    function shuffle() {
      let currentIndex = answers.length,
        randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [answers[currentIndex], answers[randomIndex]] = [
          answers[randomIndex],
          answers[currentIndex],
        ];
      }

      setAnswerChoices(answers);
    }
    shuffle();
  }, [currentQuestionIndex]);

  const handleNextQuestion = () => {
    if (!questions) {
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswerSelected(false);
    } else {
      setQuizCompleted(true);
      saveQuiz();
    }
  };
  async function saveQuiz(){
    console.log(questions)
    const data = {
      category: questions[0].category,
      difficulty: questions[0].difficulty,
      qScore: score
    }
    const quiz = await quizAPI.save(data);
    console.log(quiz);
  }
  return (
    <div className="container">
      <h1 className="center-align">Quiz</h1>
      {!quizCompleted && questions && questions[currentQuestionIndex] ? (
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <h2>Question {currentQuestionIndex + 1}</h2>
            <p>{questions[currentQuestionIndex].question}</p>
            <ul>
              {answerChoices.map(
                (answer, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleAnswerSelection(answer)}
                      className={`waves-effect waves-light btn-large ${
                        isAnswerSelected
                          ? answer ===
                            questions[currentQuestionIndex].correct_answer
                            ? "green"
                            : "red"
                          : "blue"
                      }`}
                    >
                      {answer}
                    </button>
                  </li>
                )
              )}
              {/* <li>
                <button
                  onClick={() =>
                    handleAnswerSelection(
                      questions[currentQuestionIndex].correct_answer
                    )
                  }
                  className={`waves-effect waves-light btn-large ${
                    isAnswerSelected
                      ? questions[currentQuestionIndex].selectedAnswer ===
                        questions[currentQuestionIndex].correct_answer
                        ? "green"
                        : "red"
                      : "blue"
                  }`}
                >
                  {questions[currentQuestionIndex].correct_answer}
                </button>
              </li> */}
            </ul>
            <button
              onClick={handleNextQuestion}
              className="waves-effect waves-light btn-large"
            >
              {currentQuestionIndex < questions.length - 1
                ? "Next Question"
                : "Finish Quiz"}
            </button>
          </div>
        </div>
      ) : quizCompleted ? (
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <h2>Quiz Completed!</h2>
            <p>
              Your Score: {score}/{questions.length}
            </p>
          </div>
        </div>
      ) : (
        <p className="center-align">Loading questions...</p>
      )}
    </div>
  );
};

export default QuizPage;
