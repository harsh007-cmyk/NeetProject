import React from 'react'
import FirstSvg from '../Images/FirstSvg'
import Svg2 from '../Images/Svg2'
import SVG4 from '../Images/SvgComp4'

import SVGComponent from '../Images/svgviewer-react-output'

function Icons() {
  return (
    <div className='icon'>
        <div className="svgOuter">
        <div className="svgicon">
            <FirstSvg/>
           
        </div>
        <div className='IconName'>Light/Dark</div>
        </div>
        <div className="svgOuter">
        <div className="svgicon ">
            <Svg2/>
        </div>
        
        <div className='IconName'>Figma Files included</div>
        </div>
        <div className="svgOuter">
        <div className="svgicon ">
            <SVGComponent/>
            
        </div>
        <div className='IconName'>100+UI Flexible sections</div>
        </div>
        <div className="svgOuter">
        <div className="svgicon">
            <SVG4/>
            
        </div>
        <div className='IconName'>Free Lifetime Updates</div>
        </div>
    </div>
  )
}

export default Icons