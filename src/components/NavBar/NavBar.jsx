import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import logo from '../../logo.png';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="indigo lighten-2">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
         <img src={logo} alt="Brain Bloom Logo" style={{ height: '63px', marginLeft: -1067 }} />
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/quizs">Quizs Page</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <span className="user-greeting">Welcome, {user.name}</span>
          </li>
          <li>
            <Link to="/" onClick={handleLogOut}>
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
