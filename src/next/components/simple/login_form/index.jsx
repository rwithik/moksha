// Render Prop
import React from 'react';
import fetch from 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';

import config from '../../../config.json';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      formControl: {
        email: {
          value: '',
          isValid: false,
          touched: false,
          error: ''
        },
        password: {
          value: '',
          isValid: false,
          touched: false,
          error: ''
        }
      }
    };
  }

  submitHandler = event => {
    event.preventDefault();
    console.dir(this.state.formControl);

    fetch(config.apiLocation + '/authentication/login/karma', {
      method: 'POST',
      body: JSON.stringify({
        "email": this.state.formControl.email.value,
        "password": this.state.formControl.password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => data.token)
      .then(token => {
        localStorage.setItem('usertoken', token);
        console.log(`usertoken: ${token}`)
      })
      .catch(err => console.error(err));
  }

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    let err = '';

    let updatedValues = {
      ...this.state.formControl
    };
    let updatedElement = {
      ...updatedValues[name]
    };

    updatedElement.value = value;
    updatedElement.touched = true;

    if (!value){
      updatedElement.error = 'This value is required.';
      updatedElement.isValid = false;
    }
    else {
      updatedElement.error = '';
      updatedElement.isValid = true;
    }

    updatedValues[name] = updatedElement;

    this.setState({
      formControl: updatedValues,
    });

  }

  render() {
    return (
      <form>
        <input type="email" name="email" value={this.state.formControl.email.value} onChange={this.changeHandler} />
        {(this.state.formControl.email.error) ? <span className="invalid-feedback"> + this.state.formControl.email.error </span> : ''}
        <input type="password" name="password" value={this.state.formControl.password.value} onChange={this.changeHandler} />
        {(this.state.formControl.password.error) ? <span className="invalid-feedback"> + this.state.formControl.password.error </span> : ''}
        <button onClick={this.submitHandler}>Submit</button>
      </form>
    );
  }
}
export default LoginForm;
