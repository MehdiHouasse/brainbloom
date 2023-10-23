import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizPage = (props) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Extract the category from the URL parameter
  const category = new URLSearchParams(props.location.search).get('category');

  useEffect(() => {
    // Load questions when the category changes
    axios
      .get(
        `https://opentdb.com/api.php?amount=10&category=${category}`
      )
      .then((response) => {
        const formattedQuestions = response.data.results.map((question) => ({
          ...question,
          selectedAnswer: null,
        }));
        setQuestions(formattedQuestions);
      })
      .catch((error) => console.error(error));
  }, [category]);

  const handleAnswerSelection = (answer) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].selectedAnswer = answer;
    setQuestions(updatedQuestions);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // You've reached the end of the questions. Handle game completion here.
      // For this example, you can reset the game.
      setCurrentQuestionIndex(0);
    }
  };

  return (
    <div>
      <h1>Trivia Game</h1>
      {questions.length > 0 ? (
        <div>
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{questions[currentQuestionIndex].question}</p>
          <ul>
            {questions[currentQuestionIndex].incorrect_answers.map(
              (answer, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleAnswerSelection(answer)}
                    className={
                      questions[currentQuestionIndex].selectedAnswer === answer
                        ? 'selected'
                        : ''
                    }
                  >
                    {answer}
                  </button>
                </li>
              )
            )}
            <li>
              <button
                onClick={() =>
                  handleAnswerSelection(questions[currentQuestionIndex].correct_answer)
                }
                className={
                  questions[currentQuestionIndex].selectedAnswer ===
                  questions[currentQuestionIndex].correct_answer
                    ? 'selected'
                    : ''
                }
              >
                {questions[currentQuestionIndex].correct_answer}
              </button>
            </li>
          </ul>
          <button onClick={handleNextQuestion}>
            {currentQuestionIndex < questions.length - 1
              ? 'Next Question'
              : 'Finish Game'}
          </button>
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default QuizPage;
