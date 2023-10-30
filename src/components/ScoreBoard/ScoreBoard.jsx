import React, { useState } from 'react';

const ScoreBoard = ({ scoreboard }) => {
  const [sortField, setSortField] = useState('user');
  const [sortDirection, setSortDirection] = useState(1);

  const handleSort = (field) => {
    if (field === sortField) {
      // Toggle sorting direction if the same field is clicked
      setSortDirection(-sortDirection);
    } else {
      // If a different field is clicked, set the field and direction
      setSortField(field);
      setSortDirection(1);
    }
  };

  const getArrow = (field) => {
    if (field === sortField) {
      return sortDirection === 1 ? '↑' : '↓';
    }
    return '';
  };

  const sortedScoreboard = [...scoreboard].sort((a, b) => {
    const fieldA = a[sortField];
    const fieldB = b[sortField];

    if (fieldA < fieldB) {
      return -sortDirection;
    }
    if (fieldA > fieldB) {
      return sortDirection;
    }
    return 0;
  });

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.5)', // Blurry background
    borderRadius: '25px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Box shadow for depth
    width: '60%', // Set the card width to 60% of the container
    margin: '0 auto', // Center the card horizontally
  };

  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <select value={sortField} onChange={(e) => handleSort(e.target.value)}>
            <option value="user">Sort by User</option>
            <option value="category">Sort by Category</option>
            <option value="difficulty">Sort by Difficulty</option>
            <option value="qScore">Sort by Score</option>
          </select>
        </div>
        <h2>Scoreboard</h2>
        <div>
          <select value={sortField} onChange={(e) => handleSort(e.target.value)}>
            <option value="user">Sort by User</option>
            <option value="category">Sort by Category</option>
            <option value="difficulty">Sort by Difficulty</option>
            <option value="qScore">Sort by Score</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('user')}>User {getArrow('user')}</th>
            <th onClick={() => handleSort('category')}>Category {getArrow('category')}</th>
            <th onClick={() => handleSort('difficulty')}>Difficulty {getArrow('difficulty')}</th>
            <th onClick={() => handleSort('qScore')}>Score {getArrow('qScore')}</th>
          </tr>
        </thead>
        <tbody>
          {sortedScoreboard.map((entry, index) => (
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
