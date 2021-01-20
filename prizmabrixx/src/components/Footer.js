import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import { Container } from "@material-ui/core";
function Footer() {
  return (
    <Container style={{width:"100%",padding:"0",overflowX:"hidden !important"}}>

  
    <div className='footer-container' id="footerbottom">
         <Grid container spacing={3} alignItems="center" justify="center" style={{textAlign:"center"}}>
         <Link to='/' className='social-logo'>
         <img alt="" src="PRIZMABRIXX.png" style={{width:"200px"}} />
            </Link>
         </Grid>

     <Grid container spacing={3} alignItems="center" justify="center" style={{textAlign:"center",marginTop:"10px"}}>
        <Grid item xs={12} sm={12} lg={4} md={4}>
        <Link to='/' style={{color:"#fff",textDecoration:"none"}}>
              Home
            </Link>
        </Grid>
        <Grid item xs={12} sm={12} lg={4} md={4}>
        <Link to='/aboutus' style={{color:"#fff",textDecoration:"none"}}>
              Virtual/About Us
            </Link>
        </Grid>
        <Grid item xs={12} sm={12} lg={4} md={4}>
        <Link to='work' style={{color:"#fff",textDecoration:"none"}}>
              Work
            </Link>
        </Grid>
        </Grid>
        <a href='mailto: rajreyansh1996@gmail.com'
              aria-label='gmail'
              target="_blank" rel="noreferrer" style={{color:"#ffff",marginTop:"20px"}}>Email - prizmabrixx@gmail.com</a>
        <Grid container spacing={2} alignItems="center" justify="center" style={{textAlign:"center",marginTop:"30px"}}>
        <div className='social-icons'>
            <a
              className='social-icon-link'
              href='https://m.facebook.com/prizmabrixx'
              aria-label='Facebook'
              target="_blank" rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              className='social-icon-link'
              href='https://www.instagram.com/prizmabrixx/'
              aria-label='Instagram'
              target="_blank" rel="noreferrer"
            >
              <FaInstagram />
            </a>
            {/* <a
              className='social-icon-link'
              href='https://youtu.be/9KGMl4Y3cl0'
              aria-label='Youtube'
              target="_blank" rel="noreferrer"
            >
              <FaYoutube />
            </a> */}
            <a
              className='social-icon-link'
              href='mailto: prizmabrixx@gmail.com'
              aria-label='Gmail'
              target="_blank" rel="noreferrer"
            >
              <CgMail />
            </a>
            <a
              className='social-icon-link'
              href='https://www.linkedin.com/in/prizma-brixx-a6292a169'
              aria-label='LinkedIn'
              target="_blank" rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          </Grid>
      {/* <section className='social-media'>
        <div className='social-media-wrap'>

        </div>
      </section> */}
    </div>
    </Container>
  );
}

export default Footer;
