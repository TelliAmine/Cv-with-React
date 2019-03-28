import React, { Component } from 'react';

const experiences=[
  {
    profession:'Intern',
    place:'Sotugese',
    description:'Installation of electronic security system, surveillance camera, fire, intruder and home automation system',
    date:'2018/2019',
  },
  {
    profession:'Intern',
    place:'Sodelec',
    description:'Installation of general electrical system',
    date:'2017/2018',
  },
  {
    profession:'Intern',
    place:'Progres technologique',
    description:'Installation of electronic security system',
    date:'2016/2017',
  },
  {
    profession:'Intern',
    place:'Tunisie cable',
    description:'Industrial electrical maintenance',
    date:'2015/2016',
  }
]

class Experience extends Component {
  render() {
    return (
      <div className="Experience">
       <div><h4 style={{borderTop:  'solid 2px   ',borderBottom:  'solid 2px   ', width:'100% ' ,borderColor: '#F4F4F4',color:'#017C73'}}>Experience</h4></div>
       {experiences.map((exp)=>{
          return (
              <div className='experiencebox' style={{display:'flex',margin:4,}} >
              <div><h5 style={{color:'#717474'}} > {exp. date}</h5></div>
              <div style={{marginLeft:'50px'}}><h5 style={{color:'#717474'}}>{exp.profession}  </h5>
              <p  > {exp. place}</p>
              <p  > {exp. description}</p></div>
              
          </div>
           )
        })}
     
     
     
      </div>
    );
  }
}

export default Experience;
