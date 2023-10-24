import React, { useState } from 'react';
import * as usersService from '../../utilities/users-service';

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
              <span className="card-title">Log In</span>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="text"
                    className="validate"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    className="validate"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button className="btn waves-effect waves-light" type="submit">
                  LOG IN
                </button>
                <button className="btn waves-effect waves-light right" type="button">
                  SIGN UP
                </button>
              </form>
            </div>
            {error && (
              <div className="card-action red-text">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
