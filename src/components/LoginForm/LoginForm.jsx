import React, { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import logo from '../../logo.png';
import './LoginForm.css';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card">
            <div className="card-content">
              <div className="center-align">
                <img src={logo} alt="Logo" style={{ width: '340px', height: '100px', borderRadius: '25px' }} />
                <h4 className="center-align card-title">Log In</h4>
              </div>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="input-field">
                  <input
                    id="email"
                    type="text"
                    className="validate"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                  <input
                    id="password"
                    type="password"
                    className="validate"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="center-align">
                  <button className="btn waves-effect waves-light" type="submit">
                    LOG IN
                  </button>
                </div>
              </form>
            </div>
            {error && (
              <div className="card-action red-text center-align">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
