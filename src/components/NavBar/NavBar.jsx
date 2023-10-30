import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import logo from '../../logo.png';

const textStyle = {
  fontWeight: 'bold', // Make the text bold
};

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="indigo lighten-2">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
         <img src={logo} alt="Brain Bloom Logo" style={{ height: '63px', marginLeft: -1067, borderRadius: 25 }} />
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/scoreboard" style={textStyle}>
              ScoreBoard
            </Link>
          </li>
          <li>
            <Link to="/profile" style={textStyle}>
              Profile
            </Link>
          </li>
          <li>
            <span className="user-greeting" style={textStyle}>
              Welcome, {user.name}
            </span>
          </li>
          <li>
            <Link to="/" onClick={handleLogOut} style={textStyle}>
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
