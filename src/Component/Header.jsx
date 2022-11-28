import React from 'react'
import '../Style/Style.css';
import Logo from '../Images/Logo';
function Header() {
    
  return (
    <div className='Header'>
        <div className='logo'>
           <Logo/>
        </div>
        <div className='Buy_Now'>
            Buy now
        </div>
    </div>
  )
}

export default Header