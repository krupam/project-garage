import React, { Component } from 'react';
import axios from 'axios';

class SignUpOnly extends Component {
  constructor(props) {
        super(props);
        this.state = {
          username: '',
          email: '',
          password: '',
        }

      }

      onChange = (e) => {
            // Because we named the inputs to match their corresponding values in state, it's
            // super easy to update the state
            const state = this.state
            state[e.target.name] = e.target.value;
            this.setState(state);
          }


          onSubmit = (e) => {
            e.preventDefault();
            // get our form data out of state
            const {username, email, password } = this.state;
            console.log("email",email);

            var params = new URLSearchParams();
            params.append('username', username);
            params.append('password', password);
            params.append('email', email);

            axios({
                method: 'post',
                url: 'http://dev3.apppartner.com/Reactors/scripts/user-signup.php',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: params
              }).then(response => {
                console.log(response);
              })
              .catch(error => {
                // throw(error);
                console.log(error.response.data.message);
              });
          }

          function dothisthing() {
            funtction handleClick(e) {
              e.preventDefault();
              document.getElementById('log-in').display = "none";
              document.getElementById('sign-up').display="block";
            }

          }



  render() {
    const {username, email, password} = this.state;
    let dothisthing;
    return (
      <div className="container-fluid signlogin">
        <div className="col-xs-12 col-md-6 col-md-offset-3 ">
          <div className="signup">
            <div className="row">
              <div className="col-sm-6"><h3 onClick={dothisthing}>Sign Up</h3></div>
              <div className="col-sm-6"><h3>Login</h3></div>
            </div>

            <form onSubmit={this.onSubmit} id="sign-up" style={{display:"none"}}>
              <div className="form-group" id="signuppage">
                <div className="ic-pic ic-userpic">
                  <input
                        type="text"
                        name="username"
                        className="form-control "
                        placeholder="username"
                        value={username}
                        onChange={this.onChange}

                  />
                </div>
                <div className="ic-pic ic-emailpic">
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="reactor@appartner.cpm"
                    value={email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="ic-pic ic-pwdpic">
                  <input
                    type="text"
                    name="password"
                    className="form-control"
                    placeholder="password"
                    value={password}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <button className="btn-signup" type="submit">SIGN UP</button>

            </form>

            <form onSubmit={this.onSubmit} id="log-in" style={{display:"none"}}>
              <div className="form-group" id="signuppage">
                <div className="ic-pic ic-userpic">
                  <input
                        type="text"
                        name="username"
                        className="form-control "
                        placeholder="username"
                        value={username}
                        onChange={this.onChange}

                  />
                </div>
                <div className="ic-pic ic-emailpic">
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="reactor@appartner.cpm"
                    value={email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="ic-pic ic-pwdpic">
                  <input
                    type="text"
                    name="password"
                    className="form-control"
                    placeholder="password"
                    value={password}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <button className="btn-signup" type="submit">SIGN UP</button>

            </form>



          </div>
        </div>
      </div>

    );
  }
}

export default SignUpOnly;
