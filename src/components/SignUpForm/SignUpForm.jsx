import React, { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import logo from '../../logo.png'; // Replace with the actual path to your logo

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: '',
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card" style={{ borderRadius: '25px' }}>
              <div className="card-content">
                <div className="center-align">
                  <img src={logo} alt="Logo" style={{ width: '340px', height: '100px', borderRadius: '25px' }} />
                  <h4 className="center-align card-title">Sign Up</h4>
                </div>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                  <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="confirm">Confirm</label>
                    <input
                      id="confirm"
                      type="password"
                      name="confirm"
                      value={this.state.confirm}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="center-align">
                    <button className="btn waves-effect waves-light" type="submit" disabled={disable}>
                      SIGN UP
                    </button>
                  </div>
                </form>
              </div>
              {this.state.error && (
                <div className="card-action red-text center-align">
                  {this.state.error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
