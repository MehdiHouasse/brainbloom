
import * as users from "../../utilities/users-api"

const Scoreboard = ({ users }) => {
  return (
    <div>
      <h2>Scoreboard</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>{user.name}</strong>
            <ul>
              {user.quizzesTaken.map((quiz, quizIndex) => (
                <li key={quizIndex}>
                  Category: {quiz.category}, Difficulty: {quiz.difficulty}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scoreboard;
