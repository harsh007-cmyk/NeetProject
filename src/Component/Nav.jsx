import React from 'react'
import {IoIosArrowDown} from 'react-icons/io';
import {BiCart} from 'react-icons/bi';
import Landings from './DropDowns/Landings';
import Pages from './DropDowns/Pages';
import Portfolio from './DropDowns/Portfolio';
import Mode from './Mode';
function Nav() {
  return (
    <div className='Nav'>
        <div className='left'>
        <div className='Nav-Logo'>
        <img className='LogoSi' src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/logo.svg" alt="" />
        Silicon
        </div>
        <div className='Nav-items'>
          <div className='Landing-section'>
            <span className='dropdown lnd'>Landing <IoIosArrowDown/></span>
            <Landings/>
            </div>
            <div className="Pages">
            <span className='dropdown'>Pages <IoIosArrowDown/></span>
            <Pages/>
            </div>
            <div className="Portfolio">
            <span className='dropdown'>Portfolio <IoIosArrowDown/></span>
            <Portfolio/>
            </div>
            <span>Support</span>

            <span>Docs</span>
        </div>
        </div>
        <div className='right'>
            <div className='toggle'>
               <Mode/>
            </div>
            <div className="Nav-BuyNow">
               <BiCart/> Buy now 
            </div>
        </div>
    </div>
  )
}

export default Nav  