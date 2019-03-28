import React, { Component } from 'react';

const listofskills=[
  {
   title:'Autocad',
   style:{width:'60%'}
  },
  {
    title:'Micro C',
    style:{width:'68%'}
  },
  {  title:'Isis',
    style:{width:'75%'}
  },
  {  title:'Ets 5',
    style:{width:'85%'}
  },
  {  title:'Dialux',
    style:{width:'70%'}
   },
  {  title:'Ecodial',
    style:{width:'60%'}
  },
  {  title:'Html',
  style:{width:'75%'}
  },
  {  title:'Css',
   style:{width:'70%'}
  },
  {  title:'Js',
  style:{width:'65%'}
  },

]

class Skills extends Component {
  render() {
    return (
      <div className="Skills" style={{  color:"white",width:"500 px"}} >
        <div className='color'><h4 style={{color:'white',marginLeft:'20px' }}>Skills</h4></div>
        {listofskills.map((skill=>{
       return(
         <div>
           <h4 style={{color:'white', marginLeft:'20px'}} >{skill.title}</h4>
           <span className='bar' style={{background:'#017C73',display:'block',height:'10px',marginLeft:'20px',marginRight:'20px'}}><span  style={skill.style} ></span></span>
     </div>
       )
        })

        )
        }
       </div>
    );
  }
}

export default Skills;
