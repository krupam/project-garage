import React, { Component } from 'react';
import UsrName from './usrName.js';
import EmailId from './emailId.js';
import Pwd from './password.js';


class SignUpForm extends Component {

  render() {
    return (
      <div className="container-fluid signlogin">
        <div className="col-xs-12 col-md-6 col-md-offset-3 ">
          <div className="signup">

            <h3>Sign Up</h3>
            <form>
                <UsrName/>
                <EmailId/>
                <Pwd/>
                <button className="btn-signup">SIGN UP</button>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default SignUpForm;
