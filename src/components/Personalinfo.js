import React, { Component } from 'react';


 const Personal = [
  {
    
    titre: "Adress",
    contenue: "Grombalia,Nabeul,Tunisia",
   
  },
    {
    titre: "Phone",
    contenue: "52832868 ",  
  },
    {
    titre: "E-Mail",
    contenue: "medaminetelli@gmail.com ",
   
  },
    {
    titre: "Date Of Birth",
    contenue: "1993-06-19 ",
   
  },
    {
    titre: "LinkedIn",
    contenue: "linkedin.com/in/mohamed-amine-telli-7b8a4b167/ ",
   
  },
      ]
  

 


class Personalinfo extends Component {
      
  render() {
    return (
      <div className="Personalinfo">
      <div className='color'><h4 style={{color:'white'}}>Personal Info</h4></div>
    
     {Personal.map((item)=>{
          return (
              <div className='b' style={{marginTop:0,}}>
          <h4 style={{marginTop:6,color:'white'}} >{item.titre}  </h4>
         <h5  style={{marginTop:-10}}> {item.contenue}</h5>
          </div>
           )
        })}
    
      

      </div>
    );
  }
}

export default Personalinfo;
