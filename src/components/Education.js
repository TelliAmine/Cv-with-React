import React, { Component } from 'react';
const Educat=[
  {
   
    place:'Secondary School of Grombalia',
    description:'Graduated with honors',
    date:'2009/2013',
  },
  {
  
    place:'The sectoral center for training in the field of construction and its dependencies of Ibn Sina',
    description:'Senior Technical Certificate in Smart Systems',
    date:'2017/2019',
  },


]
class   Education extends Component {
  render() {
    return (
      <div className="Education">
     <div><h4 style={{borderTop:  'solid 2px   ',borderBottom:  'solid 2px   ', width:'100% ' ,borderColor: '#F4F4F4',color:'#017C73',}}>Education</h4></div>
    
      {Educat.map((item)=>{
        return(
          <div style={{display:'flex'}}>
            <div><h5>{item.date}</h5></div>
            <div style={{marginLeft:'50px'}}><p>{item.place}</p>
            <p>{item.description}</p>
            </div>
           
          </div>
        )
      })
      }
   
      
      </div>
    );
  }
}

export default Education;
