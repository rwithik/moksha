import React from 'react';
import LoginForm from '../../simple/login_form'

class LoginPageContent extends React.Component {
  render() {
    return (
      <div id="login-page-content">
      <style jsx>
      {`
        input {
          width: 100%;
          display: block;
          background: blue;
        }
      `}
      </style>
        <LoginForm/>
      </div>
    )
  }
}

export default LoginPageContent;
