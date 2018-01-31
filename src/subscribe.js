import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Subscribe extends Component {
  constructor(props) {
        super(props);
        this.state = {
          email: '',
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
            const {email } = this.state;
            console.log("email",email);

            var params = new URLSearchParams();
            params.append('email', email);
            axios({
                method: 'post',
                url: 'http://dev3.apppartner.com/Reactors/scripts/add-email.php',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: params
              }).then(response => {
                console.log(response.data);
              })
              .catch(error => {
                throw(error);
              });
          }


  render() {
    const {email} = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="sub">
              <h2 className="head2">SUBSCRIBE TO NEWSLETTER</h2>

                <form onSubmit={this.onSubmit}>
                <div className="input-group">
                  <input type="text" name="email" value={email} placeholder="Your Email" id="subs-text" onChange={this.onChange} />
                  <span className="input-group-addon" id="basic-addon2"><button className="btn-sub" type="submit">Subscribe</button></span>
                </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscribe;
