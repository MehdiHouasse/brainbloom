import React from 'react';

const ScoreBoard = ({ scoreboard }) => {
  return (
    <div>
      <h2>Scoreboard</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Category</th>
            <th>Difficulty</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scoreboard.map((entry, index) => (
            <tr key={index}>
              <td>{entry.user.name}</td>
              <td>{entry.category}</td>
              <td>{entry.difficulty}</td>
              <td>{entry.qScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreBoard;
