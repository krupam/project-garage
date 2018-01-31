import React, { Component } from 'react';
import './App.css';
import Subscribe from './subscribe.js';
import FooterComp from './footercomp.js';
import SignUpForm from './formtry.js';
import SignUpOnly from './signIn.js';

class WhatWeDo extends Component {
  render(){
    let midcolor = '#f1faef';
    let rowHeight = '40vh';
    let leftAlign = 'left';
    let wwdcolor = '#1e3656';
    let marGreen = '80px';
    return (
      <div className="container-fluid">

        <div className="row">
            <div className="col-md-6" style={{height: rowHeight}}>
              <h2 className="head2 wwd">WHAT WE DO</h2>
            </div>
            <div className="col-md-6" style={{height: rowHeight}}>
              <div className=" wd" ><h3 className="head3">We do</h3>
                <div style={{color: '#red'}}>The quick, brown fox jumps over a lazy dog.</div>
                <div>Djs flock by when MTV ax quiz prog.</div>
                <div>Junk MTV quiz graced by fox whelps.</div>
                <div>Bawds jog, flick quartz, vex nymphs.</div>
              </div>
            </div>
        </div>


        <div className="row" style={{backgroundColor:midcolor, paddingBottom:marGreen, paddingTop:marGreen}}>
          <div className="col-md-6 col-sm-12">
            <div className="left-region" >
              <div className="left-pic"></div>
              <div className="left-text" style={{textAlign: leftAlign}}>
                  <h4 className="head4">Regional Cuisine Down Home Southern Cooking</h4>
                  <p>The quick, brown fox jumps over a lazy dog. Djs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.
                  </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="left-region">
              <div className="right-pic"></div>
              <div className="left-text" style={{textAlign: leftAlign}}>
                  <h4 className="head4">Regional Cuisine Down Home Southern Cooking</h4>
                  <p>The quick, brown fox jumps over a lazy dog. Djs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.
                  </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="maul">
              <h3>Maul By Air The Best Way Around The Island</h3>
              <div className="in-bloq">
                <div className="image1 image-1"></div>
                <div>
                  <h5 className="head5">East Josianfurt</h5>
                  <p className="caption">085 Daron Via</p>
                </div>
              </div>

              <div className="in-bloq">
                <div className="image2 image-1"></div>
                <div>
                  <h5 className="head5">South Cristopherport</h5>
                  <p className="caption">162 Chandler Ville</p>
                </div>
              </div>

              <div className="in-bloq">
                <div className="image3 image-1"></div>
                <div>
                  <h5 className="head5">Concepcionbury</h5>
                  <p className="caption">7643 Kylie Burgs</p>
                </div>
              </div>

              <div className="in-bloq">
                <div className="image4 image-1"></div>
                <div>
                  <h5 className="head5">Reychester</h5>
                  <p className="caption">5590 Gabe Views Apt. 044</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello, welcome to Reactor</h1>
        </header>
        <WhatWeDo/>
        <Subscribe/>
        <FooterComp/>
        <SignUpForm/>
        <SignUpOnly/>
      </div>

    );
  }
}

export default App;
