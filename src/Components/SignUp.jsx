import axios from 'axios'
import React, { Component } from 'react'
import '../Css/AccessPage.scss';


class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {         
            email: '',
            password: '',
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveMember = this.saveMember.bind(this);
    }


    saveMember = (hndl) => {
        hndl.preventDefault();
        axios.post('http://134.209.136.146:8000/register', {
            email: this.state.email,
            password: this.state.password,
          })
        .then(response => {
            console.log(response)        
            window.location.href = '/SignIn';
        },(error) => {
            console.log(error);
            this.setState({errorMessage: "The acoount is already exist!"});
          });    
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
        console.log(this.state.email,this.state.password) 
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div className="fromContainer">
            <div className="formWrapper">
              <span className="logo">Be My Pet</span>
              <span className="title">Sign Up</span>
              <form>
              <input type="email" placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.changeEmailHandler}/>
            <input type="password" placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.changePasswordHandler}/>
            <button name="btn" onClick={this.saveMember}>
                Sign Up
            </button>
              </form>
              <p>Already have an account? Sign In <a href="/SignIn">Here</a></p>
              { <p className="error"> { this.state.errorMessage }  </p> }
            </div>
          </div>
        )
    }
}
export default SignUp