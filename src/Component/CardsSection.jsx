import React from 'react'
import {arr} from '../Images/CardDetails'
const img=require('../Images/card1.jpg');
console.log(img);
function CardsSection() {
    const cardItem=arr.map((card)=>
       (
        
            <div className="card">
                <img src={card.img} alt="" />
               <div className='cardName'>{card.cardname}</div> 
            </div>
        )
    )
  return (
    <div className='LandingPage-main'>
         <h1>Landing Pages</h1>
        <p>Choose from pre-built layouts of out unique landing pages</p>
        <div className="cards">
        {cardItem}
        </div>
        
    </div>
  )
}

export default CardsSection