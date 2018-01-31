import React, {Component} from 'react';

class EmailId extends Component {
  render() {
    return (
      <div className="form-group" id="signuppage">
        <div className="ic-pic ic-emailpic">
          <input
            type="text"
            name="emailid"
            className="form-control"
            placeholder="reactor@appartner.cpm"
          />
        </div>
      </div>
    );
  }
}

export default EmailId;
