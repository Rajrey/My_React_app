import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaTimes, FaGripLines } from 'react-icons/fa';
// import { SiFacebook, SiInstagram, SiLinkedin, SiGmail } from 'react-icons/si';

import { IconContext } from 'react-icons/lib';
// import IconButton from '@material-ui/core/IconButton';

function Navbar() {
    const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const [prevScrollY, setPrevScrollY] = useState(window.scrollY);

  // window.onscroll = () => {
  //   const elem = document.querySelector(".navbar");
  //   const elem1 = document.querySelector(".menu-icon");
  //   const elem2 = document.querySelector(".navbar-logo");
  //   if (
  //     (window.scrollY < 10 && elem.style.height === "75px") ||
  //     window.scrollY - prevScrollY < -70
  //   ) {
  //     if(!click){
  //       setPrevScrollY(window.scrollY);
  //       elem.style.animation = "scrollUp 0.5s ease-in-out forwards";
  //       elem1.style.animation = "scrollUp 0.5s ease-in-out forwards";
  //       elem2.style.animation = "scrollUp 0.5s ease-in-out forwards";
  //     }
      
  //   } else if (window.scrollY - prevScrollY > 70) {
  //     if(!click){
  //       setPrevScrollY(window.scrollY);
  //       elem.style.animation = "scrollDown 0.5s ease-in-out forwards";
  //       elem1.style.animation = "scrollDown 0.5s ease-in-out forwards";
  //       elem2.style.animation = "scrollDown 0.5s ease-in-out forwards";
  //     }
 
  //   }
  // };


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
  // useEffect(() => {
 
  // }, []);


  return (

    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar' id="topheader">
          <div className='navbar-container container1'>
            <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
              {/* <CgInfinity className='navbar-icon' />
              <b style={{fontFamily: 'Goldman'}}>RHE</b> */}
              <img alt="" src="PRIZMABRIXX.png" style={{width:"200px"}} />
            </NavLink>
            <div className='menu-icon' onClick={handleClick} style={{WebkitTapHighlightColor: "transparent"}}>
              {click ? <FaTimes /> : 
              // <CgMenuRight />
              <FaGripLines />
              }
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <NavLink to='/' exact className='nav-links' onClick={closeMobileMenu}
                activeStyle={{color:"#ffde7a"}}>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/aboutus'
                  className='nav-links'
                  onClick={closeMobileMenu}
                  activeStyle={{color:"#ffde7a"}}>
                  Virtual/About Us
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/work'
                  className='nav-links'
                  onClick={closeMobileMenu}
                  activeStyle={{color:"#ffde7a"}}>
                  Work
                </NavLink>
              </li>
              <li className='nav-item'>
                <div
                  // to='/products'
                  className='nav-links'
                  // onClick={closeMobileMenu}
                  onClick={() => { closeMobileMenu(); scrollcontact();}}
                  style={{cursor:"pointer",WebkitTapHighlightColor: "transparent"}}>
                  Contact
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;


