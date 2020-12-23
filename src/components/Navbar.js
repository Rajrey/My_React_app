import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

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
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <CgInfinity className='navbar-icon' />
              <b style={{fontFamily: 'Goldman'}}>RHE</b>
              {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 97.664 70.354"
    >
      <path
        d="M40.202 3.264l-13.138 67.09L40.116 50.27zM44.808 35.07l22.11 12.657 5.624 12.224-27.734-20.065z"
        fill="#fff"
      />
      <path d="M12.586 3.007L97.664 0 0 62.333l29.84-40.215z" fill="#fff" />
      <path
        d="M24.886 8.609l54.27-1.918-62.299 39.76L35.891 20.8z"
        fillOpacity={0.98}
      />
    </svg> */}
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaGripLines />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/aboutme'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  About Me
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/work'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Work
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
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
