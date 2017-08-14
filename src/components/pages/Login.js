import React from 'react';

//https://www.npmjs.com/package/react-facebook-login
import FacebookLogin from 'react-facebook-login';

class Login extends React.Component {
  constructor(props) {
    super();
  }



  render() {
    return (
    <div>
      <div id="fb">
        login with facebook:
        <FacebookLogin
        appId="1311437462287493"
        autoLoad={true}
        fields="name,email,picture"
        />

        <div id="login">
          <input type="text" ref="email"/>
          <input type="password" ref="password"/>
          <button onClick={this._handleLogin}>login</button>
        </div>
      </div>
    </div>
    )
  }
}

export default Login;
