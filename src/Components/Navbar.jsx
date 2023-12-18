import React, { useEffect } from 'react'
import logo from '../assets/Logo.png'
import naavic from '../assets/naavic-2.jpg'
import hamburgerIcon from '../assets/hamburger.png'
const Navbar = (props) => {
  useEffect(() => {
    const hamburgerIcon = document.querySelector('.hamburger-icon-div');
    const hamburgerDiv = document.querySelector('.hamburger-nav');

    hamburgerIcon.addEventListener('click', function(){
        hamburgerDiv.style.transform = 'translate(0%)';
        hamburgerDiv.style.opacity = 1;
    })

    hamburgerDiv.addEventListener('click',function(e){
        if(e.target == document.querySelector('.hamburger-nav li')){
          return;
        }
        hamburgerDiv.style.transform = 'translate(-120%)';
        hamburgerDiv.style.opacity = 0;
    })

    
    

  })
  
  return (
    <>
        <nav className='navbar'>
            <div className='hamburger-icon-div'><img src={hamburgerIcon} className='hamburger-icon' alt="" /></div>
            <div className="hamburger-nav">
              <ul>
                <li><a to="/">HOME</a></li>
                {props.internship == "true" ? <></> : <><li><a href="#section-2">INNOVATIONS</a></li>
                    <li><a href="#section-3">ABOUT</a></li>
                    {/* <li><a href='/internship'>INTERNSHIPS</a></li> */}
                    
                    </>}
              </ul>
            </div>
             <img src={logo} alt="logo" />
            <ul>
                <li><a href="/">HOME</a></li>
                {props.internship == "true" ? <></> : <><li><a href="#section-2">INNOVATIONS</a></li>
                    <li><a href="#section-3">ABOUT</a></li>
                    
                    {/* <li><a href='/internship'>INTERNSHIPS</a></li> */}
                    
                    
                    </>}
              </ul>
            <img src={naavic} alt="" />
        </nav>
    </>
  )
}

export default Navbar