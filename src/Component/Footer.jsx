import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
function Footer() {
  return (
    <div className='Footer'>
        <div className="headingandinput">
            <h1>Subscribe  to our Newsletter</h1>
            <div className='input-field'>

                <div className="inputfield">
                    <div className="mailicon">
                    <AiOutlineMail style={{width:'25px',fontSize:'50px'}}/>  
                    </div>
                    
                    <input type="text" placeholder='Your email'/>
                </div>
                
                <button>subscribe</button>
            </div>
           
        </div>
        <div className='rights'>
            <span>@All rights reserved. <AiOutlineHeart style={{color:'#6610f2' ,fontSize:'20px'}}/> Made with </span>
        </div>
    </div>
    
  )
}

export default Footer