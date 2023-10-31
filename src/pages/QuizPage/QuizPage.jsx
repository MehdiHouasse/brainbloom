import React, { useState, useEffect } from "react";
import * as quizAPI from "../../utilities/quiz-api";
import "./QuizPage.css";

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

      while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [answers[currentIndex], answers[randomIndex]] = [
          answers[randomIndex],
          answers[currentIndex],
        ];
      }

      setAnswerChoices(answers);
    }

    shuffle();
  }, [questions, currentQuestionIndex]);

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

  async function saveQuiz() {
    const data = {
      category: questions[0].category,
      difficulty: questions[0].difficulty,
      qScore: score,
    };
    const quiz = await quizAPI.save(data);
    console.log(quiz);
  }

  return (
    <div className="container">
      {!quizCompleted && questions && questions[currentQuestionIndex] ? (
        <div className="card indigo lighten-2">
          {" "}
          {/* Change the card class here */}
          <div className="card-content white-text">
            <h2>Question {currentQuestionIndex + 1}</h2>
            <p className="question-text">
              {questions[currentQuestionIndex].question}
            </p>
            <ul className="answer-list">
              {answerChoices.map((answer, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleAnswerSelection(answer)}
                    className={`waves-effect waves-light btn-large answer-button ${
                      isAnswerSelected
                        //  ? answer ===
                        //    questions[currentQuestionIndex].selectedAnswer
                          ? answer ===
                            questions[currentQuestionIndex].correct_answer
                            ? "correct-answer"
                            : "incorrect-answer"
                          // ? "incorrect_answer"
                        : "default-answer"
                        // ? answer === questions[currentQuestionIndex].selectedAnswer  && answer === questions[currentQuestionIndex].correct_answer
                        // ? "correct-answer"
                        // ? answer === answer === questions[currentQuestionIndex].selectedAnswer  && answer === questions[currentQuestionIndex].incorrect_answer
                        // ? "incorrect-answer"
                        // : "default-answer"



                    }`}
                  >
                    {answer}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={handleNextQuestion}
              className="waves-effect waves-light btn-large next-button"
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
        <p className="center-align loading-text">Loading questions...</p>
      )}
    </div>
  );
};

export default QuizPage;
