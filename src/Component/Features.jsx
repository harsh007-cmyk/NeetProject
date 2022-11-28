import React from 'react'
import { FeaturesArr } from '../Images/FeatrueArray';
const st={
  fontSize:'2rem' ,
  color:'#D946EF'
};
console.log("arr",FeaturesArr[0].icon);
const cards=FeaturesArr.map((feature)=>(
  
    <div className="feature-card">
            <div className="feature-icon">   
            <feature.icon style={st}/>
            </div>
            <h2>{feature.heading}</h2>
            <div className="feature-desc">
                <p>Silicon is the powerful front-end solution based on Bootstrap 5 — the world’s most popular responsive, mobile-first front-end component library.</p>
            </div>
  </div>
))


function Features() {
  return (
    <div className='Features-silicon'>
       {cards}
    </div>
  )
}

export default Features