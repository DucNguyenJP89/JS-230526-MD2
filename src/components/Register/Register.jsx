import React, { Component } from 'react';
import "./Register.css";

export default class Register extends Component {
    render() {
        return (
            <div className="register">
                <h2>Register</h2>
                <div className="register-form">
                    <form action="">
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" placeholder="Input your username" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Input your email" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Input your password" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirm">Confirm your password</label>
                            <input type="password" name="confirm" id="confirm" placeholder="Confirm your password" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="birthday">Birthday</label>
                            <div className="birthday">
                                <input type="text" name="birthday-year" id="year" placeholder="Year" />
                                <input type="text" name="birthday-month" id="month" placeholder="Month" />
                                <input type="text" name="birthday-day" id="day" placeholder="Day" />
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="gender">Gender</label>
                            <div className="gender">
                                <div>
                                    <input type="radio" name="gender" id="male" value="male"/>
                                    <label htmlFor="male">Male</label>
                                </div>
                                <div>
                                    <input type="radio" name="gender" id="female" value="female" />
                                    <label htmlFor="female">Female</label>
                                </div>
                                <div>
                                    <input type="radio" name="gender" id="others" value="others" />
                                    <label htmlFor="others">Others</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}
