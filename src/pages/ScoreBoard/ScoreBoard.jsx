import React, { useState, useEffect } from 'react';
import * as quizAPI from '../../utilities/quiz-api';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';

const ScoreboardPage = () => {
  const [scoreboard, setScoreboard] = useState([]);

  useEffect(() => {
    async function fetchScoreboard() {
      const data = await quizAPI.scoreBoard();
      console.log(data);
      setScoreboard(data);
    }

    fetchScoreboard();
  }, []);

  return (
    <div>
      <h1>Scoreboard Page</h1>
      <ScoreBoard scoreboard={scoreboard} />
    </div>
  );
};

export default ScoreboardPage;
