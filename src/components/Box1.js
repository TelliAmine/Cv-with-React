import React, { Component } from 'react';
import Education from './Education'
import Experience from './Experience'



class Box1 extends Component {
  render() {
    return (
      <div className="Box1">
      <div>Specialist in electronics and IT applied to the field of housing, professional programming and remote control,
Having  several fields of application: security, comfort, energy management and telecommunications.</div>
     <Experience/>
     <Education/>
      </div>
    );
  }
}

export default Box1;
