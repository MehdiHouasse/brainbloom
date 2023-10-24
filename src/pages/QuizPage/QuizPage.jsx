import React, { useState } from 'react';

const QuizPage = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

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

  const handleNextQuestion = () => {
    if (!questions) {
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswerSelected(false);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="container">
      <h1 className="center-align">Quiz</h1>
      {!quizCompleted && questions && questions[currentQuestionIndex] ? (
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <h2>Question {currentQuestionIndex + 1}</h2>
            <p>{questions[currentQuestionIndex].question}</p>
            <ul>
              {questions[currentQuestionIndex].incorrect_answers.map((answer, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleAnswerSelection(answer)}
                    className={`waves-effect waves-light btn-large ${
                      isAnswerSelected
                        ? answer === questions[currentQuestionIndex].correct_answer
                          ? 'green'
                          : 'red'
                        : 'blue'
                    }`}
                  >
                    {answer}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleAnswerSelection(questions[currentQuestionIndex].correct_answer)}
                  className={`waves-effect waves-light btn-large ${
                    isAnswerSelected
                      ? questions[currentQuestionIndex].selectedAnswer === questions[currentQuestionIndex].correct_answer
                        ? 'green'
                        : 'red'
                      : 'blue'
                  }`}
                >
                  {questions[currentQuestionIndex].correct_answer}
                </button>
              </li>
            </ul>
            <button
              onClick={handleNextQuestion}
              className="waves-effect waves-light btn-large"
            >
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        </div>
      ) : quizCompleted ? (
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <h2>Quiz Completed!</h2>
            <p>Your Score: {score}/{questions.length}</p>
          </div>
        </div>
      ) : (
        <p className="center-align">Loading questions...</p>
      )}
    </div>
  );
};

export default QuizPage;
