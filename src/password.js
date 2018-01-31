import React, {Component} from 'react';

class Pwd extends Component {
  render() {
    return (
      <div className="form-group" id="signuppage">
        <div className="ic-pic ic-pwdpic">
          <input
            type="text"
            name="password"
            className="form-control"
            placeholder="password"
          />
        </div>
      </div>
    );
  }
}

export default Pwd;
