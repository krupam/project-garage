import React, {Component} from 'react';

class UsrName extends Component {
  render() {
    return (
      <div className="form-group" id="signuppage">
        <div className="ic-pic ic-userpic">
          <input
                type="text"
                name="username"
                className="form-control "
                placeholder="username"

          />
        </div>
      </div>
    );
  }
}

export default UsrName;
