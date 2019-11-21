// Render Prop
import React from 'react';
import fetch from 'isomorphic-unfetch';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Form, FormGroup, FormFeedback, Label, Input } from 'reactstrap'

import config from '../../../config.json';
import './form.css'

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      formControl: {
        email: {
          val: '',
          state: '',
          error: ''
        },
        password: {
          val: '',
          state: '',
          error: ''
        }
      }
    };
  }

  // submitHandler = event => {
  //   event.preventDefault();
  //   console.dir(this.state.formControl);

  //   fetch(config.apiLocation + '/authentication/login/karma', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       "email": this.state.formControl.email.value,
  //       "password": this.state.formControl.password.value
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => data.token)
  //     .then(token => {
  //       localStorage.setItem('usertoken', token);
  //       console.log(`usertoken: ${token}`)
  //     })
  //     .catch(err => console.error(err));
  // }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { formControl } = this.state;
    const empty = /^.{0}$/;
      if(empty.test(e.target.value)){
        formControl.email.state = ''
      }
      else if (emailRex.test(e.target.value)) {
        formControl.email.state = 'has-success'
      } else {
        formControl.email.state = 'has-danger'
      }
      this.setState({ formControl })
    }
  validatePassword(e) {
    const emailRex = /^.{12,30}$/;
    const empty = /^.{0}$/;
    const { formControl } = this.state
      if(empty.test(e.target.value)){
        formControl.password.state = ''
      }
      else if (emailRex.test(e.target.value)) {
        formControl.password.state = 'has-success'
      } else {
        formControl.password.state = 'has-danger'
      }
      this.setState({ formControl })
    }
  handleChangeEmail = async (event) => {
    const { target } = event;
    const { formControl } = this.state
    const value = target.type === 'checkbox' ? target.checked : target.value;
    formControl.email.val = value;
    }

  handleChangePassword = async (event) => {
    const { target } = event;
    const { formControl } = this.state
    const value = target.type === 'checkbox' ? target.checked : target.value;
    formControl.password.val = value;
    await this.setState({
      formControl
    });
  }
  submitForm(e) {
    e.preventDefault();
    const { email } = this.state.formControl;
    const { password } = this.state.formControl;
    // console.dir(this.state.formControl);
    const details = {
        email: email.val,
        password: password.val
      }
      // console.log(details);
    if(email.state === 'has-success' && password.state === 'has-success'){
        fetch(config.apiLocation + '/authentication/login/karma', {
        method: 'POST',
        body: JSON.stringify(details),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        // .then(response => response.text())
        // .then(text => console.log(text))
        .then(response => response.json())
        .then(data => data.token)
        .then(token => {
          localStorage.setItem('usertoken', token);
          console.log(`usertoken: ${token}`)
        })
        .catch(err => console.error(err));
    }    
      
  }
  render() {
    return (
      // <form>
      //   <input type="email" name="email" value={this.state.formControl.email.value} onChange={this.changeHandler} />
      //   {(this.state.formControl.email.error) ? <span className="invalid-feedback"> + this.state.formControl.email.error </span> : ''}
      //   <input type="password" name="password" value={this.state.formControl.password.value} onChange={this.changeHandler} />
      //   {(this.state.formControl.password.error) ? <span className="invalid-feedback"> + this.state.formControl.password.error </span> : ''}
      //   <button onClick={this.submitHandler}>Submit</button>
      // </form>
      <Container className="form-div">
        <Form onSubmit={(e) => this.submitForm(e)}>
          <FormGroup class="form-group">
            <Input
              type="email"
              name="email"
              id="email"
              value={this.state.formControl.email.value}
              valid={this.state.formControl.email.state === 'has-success'}
              invalid={this.state.formControl.email.state === 'has-danger'}
              onChange={ (e) => {
                            this.validateEmail(e)
                            this.handleChangeEmail(e)
                          } }
              required
            />
            <Label for="email" className="form-label"><span className="content">Email</span></Label>
            <FormFeedback invalid>
                Please enter a valid email.
            </FormFeedback>
          </FormGroup>
          <FormGroup className="form-group">
            <Input
              type="password"
              name="password"
              id="password"
              value={this.state.formControl.password.value}
              valid={this.state.formControl.password.state === 'has-success'}
              invalid={this.state.formControl.password.state === 'has-danger'}
              onChange={ (e) => {
                            this.validatePassword(e)
                            this.handleChangePassword(e)
                          } }
              required
            />
            <Label for="password" className="form-label"><span className="content">Password</span></Label>
            <FormFeedback invalid>
                Please enter a valid password.
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Button className="class-submit">Submit</Button>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}
export default LoginForm;
