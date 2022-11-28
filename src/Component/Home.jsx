import React from 'react'
var lastscrolled=0;

function Home() {
    function handleScroll(){
        const im1=document.querySelector('.Home-mid-image');
        const im2=document.querySelector('.Home_sec_image');
        const scrolled=window.scrollY;
        // if(scrolled*0.2>80)
        console.log(window.getComputedStyle(im2).marginTop);
        im1.style.marginTop=`${90-scrolled*0.2}px`;
        im2.style.marginTop=`${-280+scrolled*0.3}px`;
        console.log(scrolled);
        console.log(im1);
        
    }
     

    window.addEventListener('scroll',handleScroll);

//     console.log('llllllllllllllllllll');
  return (
    <div className='Home_section'>
        <div className="Home_text_section">
        <div className="Silicon-Heading">
            <h1>Silicon</h1>
        </div>
        <div className="Home_description">
            <span>Multipurpose Business /
                Technology Template</span> 
        </div> 
        <div className="Home_toggle">
            <img src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/switcher.svg" alt="" />
            
        </div>
        
        </div>
        <div className="Home-mid-image">
            <img src={require('../Images/scrollImage.png')} alt="" />
        </div>
        <div className='Home_sec_image'>
        <img src={require('../Images/screens02.png')} alt="" />
        </div>
    </div>
  )
}

export default Home