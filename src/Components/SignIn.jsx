import axios from "axios";
import React, { Component } from "react";
import '../Css/AccessPage.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
    };
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.hndlSubmit = this.hndlSubmit.bind(this);
  }

  hndlSubmit = (hndl) => {
    hndl.preventDefault();
    axios
      .post("http://134.209.136.146:8000/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then(
        (response) => {
          console.log(response);
          const token = response.data.token;
          localStorage.setItem("token", token);
          window.location.href = "/";
        },
        (error) => {
          console.log(error);
          this.setState({ errorMessage: error.message });
        }
      );
  };

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="fromContainer">
        <div className="formWrapper">
          <span className="logo">Be My Pet</span>
          <span className="title">Sign In</span>
          <form>
            <input type="email" placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.changeEmailHandler}/>
            <input type="password" placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.changePasswordHandler}/>
            <button name="btn" onClick={this.hndlSubmit}>
                Sign In
            </button>
          </form>
          <p>Doesn't have an account? Sign Up <a href="/SignUp">Here</a></p>
          {this.state.errorMessage && (
                <p className="error">
                  {" "}
                  {"please put the right username or password!"}{" "}
                </p>
              )}
        </div>
      </div>
    );
  }
}
export default SignIn;
