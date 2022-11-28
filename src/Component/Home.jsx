import React from 'react'
var lastscrolled=0;
function Home() {
//         function handleScroll(){
//     const im1=document.querySelector('.Home_mid_image');
//     const im2=document.querySelector('.Home_sec_image');
//     const stl=window.getComputedStyle(im1);
//     const mrgtp=stl.marginTop.replace( /[^\d\.]*/g, '');
//     const scrolled=window.scrollY;
//     console.log(mrgtp);   
//         if(scrolled>0&&scrolled<833){
//     if(scrolled>lastscrolled){
//         console.log('up');
//         im1.style.marginTop=`${Number(mrgtp)-5}px`;
//     }else if(scrolled<lastscrolled){
//         console.log('donw');
//         im1.style.marginTop=`${Number(mrgtp)+5}px`;
//     }
    
//     if(scrolled<=0){
//         lastscrolled=0;
//     }else{
//         lastscrolled=scrolled;
//     }
// }
//     }
    // window.addEventListener('scroll',handleScroll);
    // console.log('llllllllllllllllllll');
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
        <div className="Home_mid_image">
            <img src={require('../Images/scrollImage.png')} alt="" />
        </div>
        <div className='Home_sec_image'>
            <img src={require('../Images/screens02.png')} alt="" />
        </div>
    </div>
  )
}

export default Home