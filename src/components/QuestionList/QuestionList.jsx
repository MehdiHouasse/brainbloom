import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Fetch questions from your API or database and set them in the 'questions' state.
    axios.get('/api/questions').then((response) => setQuestions(response.data));
  }, []);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    // Check if the selected answer is correct and update the score if needed.
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }

    // Move to the next question or finish the quiz.
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz is finished. time to display the final score
    }


    setSelectedAnswer('');
  };

  if (questions.length === 0) {
    return <div>Loading questions...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h1>Quiz</h1>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{currentQuestion.question}</p>
      <ul>
        {currentQuestion.incorrect_answers.map((answer, index) => (
          <li key={index}>
            <button
              onClick={() => handleAnswerSelection(answer)}
              className={selectedAnswer === answer ? 'selected' : ''}
            >
              {answer}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => handleAnswerSelection(currentQuestion.correct_answer)}
            className={
              selectedAnswer === currentQuestion.correct_answer ? 'selected' : ''
            }
          >
            {currentQuestion.correct_answer}
          </button>
        </li>
      </ul>
      <button onClick={handleNextQuestion}>
        {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
      </button>
    </div>
  );
};

export default Quiz;
