import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin
} from 'react-icons/fa';
import { CgInfinity, CgMail } from 'react-icons/cg';

function Footer() {
  return (
    <div className='footer-container' id="footerbottom">
         <Grid container spacing={3} alignItems="center" justify="center" style={{textAlign:"center"}}>
         <Link to='/' className='social-logo'>
              <CgInfinity className='navbar-icon' />
              <b style={{fontFamily: 'Goldman'}}>RHE</b>
            </Link>
         </Grid>

     <Grid container spacing={3} alignItems="center" justify="center" style={{textAlign:"center",marginTop:"10px"}}>
        <Grid item xs={12} sm={12} lg={4} md={4}>
        <Link to='/' style={{color:"#fff"}}>
              Home
            </Link>
        </Grid>
        <Grid item xs={12} sm={12} lg={4} md={4}>
        <Link to='/aboutme' style={{color:"#fff"}}>
              Virtual/About me
            </Link>
        </Grid>
        <Grid item xs={12} sm={12} lg={4} md={4}>
        <Link to='work' style={{color:"#fff"}}>
              Work
            </Link>
        </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" justify="center" style={{textAlign:"center",marginTop:"30px"}}>
        <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Gmail'
            >
              <CgMail />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
          </Grid>
      {/* <section className='social-media'>
        <div className='social-media-wrap'>

        </div>
      </section> */}
    </div>
  );
}

export default Footer;
