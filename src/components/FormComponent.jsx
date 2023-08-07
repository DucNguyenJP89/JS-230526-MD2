import React, { Component } from "react";

export default class FormComponent extends Component {
  constructor() {
    super();
    this.state = {
      studentId: "",
      studentName: "",
      pass: "",
      gender: "",
      age: 0,
      address: "",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    for (let key in this.state) {
      console.log(key, this.state[key]);
    }
    let formData = {
      studentId: this.state.studentId,
      studentName: this.state.studentName,
      pass: this.state.pass,
      gender: this.state.gender,
      age: this.state.age,
      address: this.state.address,
    };
    console.log("Form data: ", formData);
    // reset value of state
    this.setState({
      studentId: "",
      studentName: "",
      pass: "",
      gender: "",
      age: 0,
      address: "",
    });
  };
  render() {
    return (
      <div>
        <form action="">
          <div>
            StudentID:
            <input
              type="text"
              name="studentId"
              id="studentId"
              value={this.state.studentId}
              onChange={this.handleChange}
            />
          </div>
          <div>
            StudentName:
            <input
              type="text"
              name="studentName"
              id="studentName"
              value={this.state.studentName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            Password:
            <input
              type="password"
              name="pass"
              id="pass"
              value={this.state.pass}
              onChange={this.handleChange}
            />
          </div>
          <div>
            Gender: Male
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={this.handleChange}
            />
            Female
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={this.handleChange}
            />
          </div>
          <div>
            Age:
            <input
              type="number"
              name="age"
              id="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </div>
          <div>
            Address:
            <select
              name="address"
              id="address"
              value={this.state.address}
              onChange={this.handleChange}
            >
              <option value="HN">Hanoi</option>
              <option value="DN">Da Nang</option>
              <option value="HCM">Ho Chi Minh</option>
            </select>
          </div>
          <button type="submit" name="submit" onClick={this.handleSubmit}>
            Register
          </button>
        </form>
      </div>
    );
  }
}
