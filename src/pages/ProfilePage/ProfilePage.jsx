import React, { useState } from 'react';
import * as quizAPI from "../../utilities/quiz-api";
//import Scoreboard from '../../components/ScoreBoard/ScoreBoard';

const ProfilePage = ({ savedQuiz }) => {
  const [quizList, setQuizList] = useState(savedQuiz);

  async function handleDelete(id) {
    const quiz = await quizAPI.deleteQuiz(id);
    const updatedQuizList = quizList.filter(q => q._id !== quiz._id);
    setQuizList(updatedQuizList);
  };

  return (
    <div className="row">
      {quizList.map((quiz, index) => (
        <div key={index} className="col s12 m6 l4">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Saved Quiz</span>
              <p><strong>Category:</strong> {quiz.category}</p>
              <p><strong>Difficulty:</strong> {quiz.difficulty}</p>
              <p><strong>Score:</strong> {quiz.qScore}</p>
            </div>
              <button onClick={() => handleDelete(quiz._id)} className="waves-effect waves-light btn indigo lighten-2">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfilePage;
