// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import 'bootstrap/dist/css/bootstrap.min.css';

class LoginForm extends React.Component {
  render() {
    return (
      <Formik
        initialValues = {
          {
            email: '',
            password: ''
         }
       }
        validate = {
          values => {
            const errors = {};
            if (!values.email){
              errors.email = 'Email can\'t be empty.';
            }
            else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Enter a valid email, dumbass.'
            }
            if (!values.password) {
              errors.password = 'Password can\'t be empty.';
            }
            console.log(errors);
            return errors;
          }
        }
        onSubmit = { (values, actions) => {
          setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
        }}
        >
        <Form>
          <div class="form-group">
            <Field id="email" type="text" className='form-control' placeholder='Email' />
            <ErrorMessage name="email" className='invalid-feedback' />
          </div>
          <div class="form-group">
            <Field id="password" type="password" className='form-control' placeholder='Password' />
            <ErrorMessage name="password" className='invalid-feedback' />
          </div>
        </Form>
      </Formik>
    )
  }
}
export default LoginForm;
