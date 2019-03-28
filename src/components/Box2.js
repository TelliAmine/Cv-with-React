import React, { Component } from 'react';
import Skills from './Skills';
import Personalinfo from './Personalinfo';


class   Box2 extends Component {
  render() {
    return (
      <div className="Box2">
       <h1   >Mohamed Amine Telli</h1>
       <h3>Home Automation Technician</h3>
       <div  id='image'>
       <img  src='https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/42985478_1883908318329028_766247901050437632_n.jpg?_nc_cat=102&_nc_ht=scontent.ftun3-1.fna&oh=bbf80ef9c0ce7773987be766360e2ed1&oe=5D15DDD2'/>

     </div>
     <Personalinfo/>
     <Skills/>
      </div>
    );
  }
}

export default Box2;
