import React, { Component } from "react";
import "./Register.css";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      confirm: "",
      birthday: "",
      gender: "",
    };
  }
  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.username === "" ||
      this.state.email === "" ||
      this.state.birthday === "" ||
      this.state.password === "" ||
      this.state.gender === ""
    ) {
      alert("All fields are required");
    } else if (this.state.password !== this.state.confirm) {
      alert("Password does not match");
    } else {
      let formData = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        birthday: this.state.birthday,
        gender: this.state.gender,
      };
      console.log(formData);
      this.setState({
        username: "",
        email: "",
        password: "",
        confirm: "",
        birthday: "",
        gender: "",
      });
    }
  };
  render() {
    return (
      <div className="register">
        <h2>Register</h2>
        <div className="register-form">
          <form action="">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={this.state.username}
                placeholder="Input your username"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                placeholder="Input your email"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                placeholder="Input your password"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm">Confirm your password</label>
              <input
                type="password"
                name="confirm"
                id="confirm"
                value={this.state.confirm}
                placeholder="Confirm your password"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="birthday">Birthday</label>
              <div className="birthday">
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  value={this.state.birthday}
                  placeholder="Birthday"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="gender">Gender</label>
              <div className="gender">
                <div>
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    onClick={this.handleChange}
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    onClick={this.handleChange}
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    id="others"
                    value="others"
                    onClick={this.handleChange}
                  />
                  <label htmlFor="others">Others</label>
                </div>
              </div>
            </div>
            <button type="submit" onClick={this.handleSubmit}>
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}
