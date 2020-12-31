import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { CgInfinity } from 'react-icons/cg';
import { FaGripLines, FaTimes } from 'react-icons/fa';
// import { SiFacebook, SiInstagram, SiLinkedin, SiGmail } from 'react-icons/si';

import { IconContext } from 'react-icons/lib';
// import IconButton from '@material-ui/core/IconButton';

function Navbar() {
    const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);

  window.onscroll = () => {
    const elem = document.querySelector(".navbar");
    const elem1 = document.querySelector(".menu-icon");
    const elem2 = document.querySelector(".navbar-logo");
    if (
      (window.scrollY < 10 && elem.style.height === "75px") ||
      window.scrollY - prevScrollY < -70
    ) {
      if(!click){
        setPrevScrollY(window.scrollY);
        elem.style.animation = "scrollUp 0.5s ease-in-out forwards";
        elem1.style.animation = "scrollUp 0.5s ease-in-out forwards";
        elem2.style.animation = "scrollUp 0.5s ease-in-out forwards";
      }
      
    } else if (window.scrollY - prevScrollY > 70) {
      if(!click){
        setPrevScrollY(window.scrollY);
        elem.style.animation = "scrollDown 0.5s ease-in-out forwards";
        elem1.style.animation = "scrollDown 0.5s ease-in-out forwards";
        elem2.style.animation = "scrollDown 0.5s ease-in-out forwards";
      }
 
    }
  };


//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };
function scrollcontact() {
  // e.preventDefault();
  var elmnt = document.getElementById("footerbottom");
  elmnt.scrollIntoView({behavior: "smooth"});
}
  useEffect(() => {
    // showButton();
    // window.addEventListener('resize', showButton);
    // return function cleanupListener() {
    //   window.removeEventListener('resize', showButton);
    // }
  }, []);


  return (

    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <CgInfinity className='navbar-icon' />
              <b style={{fontFamily: 'Goldman'}}>RHE</b>
            </NavLink>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaGripLines />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <NavLink to='/' exact className='nav-links' onClick={closeMobileMenu}
                activeStyle={{color:"#b0dfff"}}>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/aboutme'
                  className='nav-links'
                  onClick={closeMobileMenu}
                  activeStyle={{color:"#b0dfff"}}>
                  Virtual/About Me
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/work'
                  className='nav-links'
                  onClick={closeMobileMenu}
                  activeStyle={{color:"#b0dfff"}}>
                  Work
                </NavLink>
              </li>
              <li className='nav-item'>
                <div
                  // to='/products'
                  className='nav-links'
                  // onClick={closeMobileMenu}
                  onClick={() => { closeMobileMenu(); scrollcontact();}}
                  style={{cursor:"pointer"}}>
                  Contact
                </div>
              </li>
              {/* <li className='nav-item'>
              <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
<label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <SiFacebook />
          </IconButton>
      </label>
                </Link>
              
              </li> */}
              {/* <li className='nav-item'>
              <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                    <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <SiInstagram/>
        </IconButton>
      </label>
                </Link>
              
              </li> */}
              {/* <li className='nav-item'>
              <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                   <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <SiLinkedin/>
        </IconButton>
      </label>  
                </Link>
             
              </li> */}
              {/* <li className='nav-item'>
              <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                    <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <SiGmail/>
        </IconButton>
      </label> 
                </Link>
             
              </li> */}
       
              {/* <li className='nav-btn'>
                {button ? (
                  <Link to='/sign-up' className='btn-link'>
                    <Button buttonStyle='btn--outline'>GET IN TOUCH</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      GET IN TOUCH
                    </Button>
                  </Link>
                )}
              </li> */}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
