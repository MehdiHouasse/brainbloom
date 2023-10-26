import React from 'react';
import Scoreboard from '../../components/ScoreBoard/ScoreBoard';

const ProfilePage = ({ savedQuiz }) => {
  return (
    <div className="row">
      {savedQuiz.map((quiz, index) => (
        <div key={index} className="col s12 m6 l4">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Saved Quiz</span>
              <p><strong>Category:</strong> {quiz.category}</p>
              <p><strong>Difficulty:</strong> {quiz.difficulty}</p>
              <p><strong>Score:</strong> {quiz.qScore}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfilePage;
