import React from "react";
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
import Canvasrobo from './Canvasrobo';
import { CgInfinity } from 'react-icons/cg';
import styled, { keyframes } from "styled-components";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
const OvalButtonAnimation = keyframes`
0% {
  transform: translate(0, 0);
  opacity: 0;
}
40% {
  opacity: 1;
}
80% {
  transform: translate(0, 20px);
  opacity: 0;
}
100% {
  opacity: 0;
}

`;

const OvalButton = styled.div`
  position: absolute;
  height: 50px;
  width: 30px;
  // bottom: 10vh;
  margin-top:-70px;
  left: 50vw;
  right: 0;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 20px;
  cursor: pointer;
  outline: none;

  &::before {
    position: absolute;
    left: 50%;
    content: "";
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: #fff;
    border-radius: 100%;
    animation: ${OvalButtonAnimation} 2s infinite;
    box-sizing: border-box;
  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  height: 50px;
  width: 30px;
  left: 50vw;
  right: 0;
  margin-top:-15px;
  // bottom: 10px;
  cursor: pointer;
`;

const ChevronAnimation = keyframes`
 25% {
    opacity: 1;

  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }

`;

const Chevron = styled.div`
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: ${ChevronAnimation} 3s ease-out infinite;

  &:first-child {
    animation: ${ChevronAnimation} 3s ease-out 1s infinite;
  }
  &:nth-child(2) {
    animation: ${ChevronAnimation} 3s ease-out 2s infinite;
  }

  &::before,
  &::after {
    content: " ";
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #fff;
  }

  &::before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  &::after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }
`;

class Test extends React.Component {

      
    componentDidMount() {
      //   window.scrollTo({
      //     top: 0,
      //     behavior: "smooth"
      // });    
        const mHTML = document.getElementById('message'),
        messages = [
          'Senior Software Developer',
          'FrontEnd Developer, UI/UX Designer',
          'Full Stack, Web Developer',
          'Business/Operations Analyst',
          'Disc jockey',
          'Dancer',
          'Illustrator/Artist',
          '',
        ];
        let currentMessage = 0;
        function typeMessage() {
          if (!messages[currentMessage]) {
            currentMessage = 0;
          }
          const currentStr = messages[currentMessage];
          currentStr.split();
          let part = '';
          let currentLetter = 0;
          let int1 = setInterval(()=>{
            if (!currentStr[currentLetter]) {
              currentMessage++;
              setTimeout(()=>{
                deleteMessage(part);
              }, 500);
              clearInterval(int1);
            } else {
              part += currentStr[currentLetter++];
              mHTML.innerHTML = part;
            }
          }, 100);
        }
        function deleteMessage(str) {
          let int = setInterval(()=>{
            if (str.length === 0) {
              setTimeout(()=>{
                typeMessage();
              }, 500);
              clearInterval(int);
            } else {
              str = str.split('');
              str.pop();
              str = str.join('');
              mHTML.innerHTML = str;
            }
          },50);
        }

        typeMessage();
    }

    componentWillUnmount() {
      // this.canvasRef.removeChild(this.renderer.domElement);
      window.removeEventListener( 'resize', this.onWindowResize, false );
      window.removeEventListener( 'wheel', this.onWindowResize, false );
      // console.log("test unmo")
      // window.removeEventListener( 'resize', this.onWindowResize, false );
    }
      render() {
        function ovalscroll() {
          // e.preventDefault();
          window.scrollBy({
            top: 450,
            behavior: 'smooth'
          });
        }
        function ovalscroll1() {
          // e.preventDefault();
          window.scrollBy({
            top: 100,
            behavior: 'smooth'
          });
        }
        return (
          <Container style={{width:"100%",padding:"0",height:"100%"}}>

          
<Grid container style={{maxWidth:"100%",margin:"0"}}>

<Box clone order={{ xs: 2, sm: 2 ,md:1, lg:1}}>
<Grid item xs={12} sm={12} lg={7} md={7} id="grid1" style={{height:"400px"}} >
<div id="light">
<div id="lineh5"></div>
		<div id="lineh6"></div>
		<div id="lineh7"></div>
		<div id="lineh8"></div>
		<div id="lineh9"></div>
		<div id="lineh10"></div>
		<div id="lineh11"></div>
		<div id="lineh12"></div>
	</div>
  <Typography variant="h2" component="h2"   style={{color: "#ffff"}}>
  <Box pt={15} pl={5} pb={10} id="contentwelcome">


  <Typography  variant="h6" component="h6"  style={{color: "#ffff"}}>
  <Zoom right cascade>
  -HEY THERE!
  </Zoom>
      </Typography>
      {/* <Typography  variant="h6" component="h6" gutterBottom  style={{color: "#ffff"}}>
 
Thanks for stopping by!!
      </Typography> */}
 
  I'm <b>Raj</b>
  
  <Typography  variant="h5" component="h5" style={{color: "#ffff",position:"absolute"}}>
        {/* Front Developer,UI/UX Designer & Business Analyst */}
    My Identity - <span id="message" ></span><span className="cursor1"></span>

      </Typography>
      

 

      </Box>
     
      </Typography>
      
  </Grid>

</Box>
<Box clone pt={1} order={{ xs: 1, sm: 1,md:2, lg: 2}}>
<Grid item xs={12} sm={12} lg={5} md={5} id="grid2" style={{height:"700px"}}>
 <Canvasrobo/>
  </Grid>
    
</Box>
<Box  clone order={{ xs: 2, sm: 2,md:2, lg: 2}}>
<Grid  item xs={12} sm={12} lg={6} md={6}>
  <Box mt={-20} id="scrollarrow">        
  <OvalButton onClick={ovalscroll}style={{WebkitTapHighlightColor: "transparent"}}/>
        <ArrowContainer onClick={ovalscroll} style={{WebkitTapHighlightColor: "transparent"}}>
          <Chevron />
          <Chevron />
          <Chevron />
        </ArrowContainer>
  </Box>

</Grid>
</Box>

<Box  clone order={{ xs: 3, sm: 3,md:3, lg: 3}} >
<Grid  item xs={12} sm={12} lg={12} md={12} style={{color: "#ffff", textAlign: 'center',overflowX:"hidden !important"}}>
<Typography variant="h4" gutterBottom id="gridwelcome">
  <Fade bottom style={{overflowX:"hidden !important"}} distance={"2rem"} duratrion={300}>
  <span style={{borderBottom:"3px solid #7dc5ff"}}>- Welcome to <CgInfinity/>
              <b style={{fontFamily: 'Goldman'}}>RHE</b> -</span>
  </Fade>
   
      </Typography>
   
      <span  style={{borderBottom:"2px solid #7dc5ff"}}>Thanks for stopping by!</span>
      <p>Please make yourself at this virtual meet</p>
</Grid>
</Box>

<Box pt={5} clone order={{ xs: 4, sm: 4,md:4, lg: 4}}>
<Grid style={{height:"400px",overflowX:"hidden !important"}} container  id="rotatecircle"  item xs={12} sm={12} lg={4} md={4}>
<Fade left style={{overflowX:"hidden !important"}}>
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  {/* <li></li> */}
  {/* <li></li> */}
  <li></li>
  {/* <li></li> */}
</ul>
</Fade>


 



</Grid>

</Box>
<Box pt={9} pl={4} pr={4} clone order={{ xs: 5, sm: 5,md:6, lg: 6}} style={{color: "#ffff"}}>
<Grid  item xs={12} sm={12} lg={8} md={8} style={{overflowX:"hidden !important"}}>
  <Fade right style={{overflowX:"hidden !important"}}>

  
<Typography variant="h6" style={{textAlign: 'left'}}>
  <mark>
  <span> <CgInfinity/><b style={{fontFamily: 'Goldman'}}>RHE </b>stands for
        Infinite Reality Has Evolved
              </span>
  </mark>
      </Typography>
{/* <p><CgInfinity/>RHE stands for Infinite Reality Has Evolved</p> */}
<p>Most of the untold stories of people when brought into the limelight they somehow inspire and empower us, right?</p>
<p><mark>RHE is my virtual creation</mark> to at least share my thoughts, as I've never been in a <mark>TED Talk</mark> to share my opinions about life!&nbsp;So, let's just get started with the opening question below.</p>
<p>Have you ever hooked up with stories or memes, posts and got attached? I'm pretty sure you did it. </p>
<p>And you know, each of us have one thing in common i.e <mark>Life & Time.</mark>&nbsp; "<mark>Life is all about experiences and memories in the end </mark>"  .&nbsp;So, I'm here to share about few insights and experiences that you can relate to. </p>
{/* <mark>"Life is all about experiences and simulations in the end"</mark> */}
<p>I hope that this content will add some value, gives you inspiration and relates it to the connected soul during my discourse.</p>
<div>
{/* <Button variant="outlined"  color="secondary" style={{color:"#ffff",marginTop:"10px"}}><Link to='/aboutme' style={{color:"#fff",textDecoration:"none"}}>Meet the Virtual me Here</Link></Button>  */}
{/* <span >  */}
  <Button variant="outlined" onClick={ovalscroll1} color="secondary" style={{color:"#ffff",marginTop:"10px"}}>Continue Reading</Button> 
  {/* </span> */}
  </div>
</Fade>
</Grid>
{/* <Grid  item xs={12} sm={12} lg={8} md={8} style={{textAlign: 'left'}}>
<Typography variant="h6" gutterBottom>
        ppppppppppppppppp
      </Typography>


</Grid> */}
</Box>
</Grid>
<Grid container style={{maxWidth:"100%",margin:"0"}}>
  <Box pt={10} pl={4} pr={4} >
  <Grid id="philosophy" item xs={12} sm={12} lg={12} md={12} style={{color: "#ffff", textAlign: 'center',overflowX:"hidden !important"}}>
    <Fade top style={{overflowX:"hidden !important"}}>
    <Typography variant="h4" justifycontent="center">
       <span style={{borderBottom:"3px solid #7dc5ff"}}>- My Philosophy -</span>
      </Typography>
   <div style={{marginTop:"25px"}}>
   <span  style={{borderBottom:"2px solid #7dc5ff"}}>The world needs fresh ideas, just think of it as a new perception of reality.</span>
   </div>
      
      <p style={{marginTop:"25px"}}>Mankind is facing challenges on a whole new dimension, Every organization, society & human race is currently witnessing an absolute need to change.</p>
      <p style={{marginTop:"15px"}}> Whilst innovation has changed the world, there is a need to have a compassionate approach in every instance towards the future. Every little thing may have a huge impact on tomorrow</p>
    </Fade>


</Grid>
  </Box>
  <Box pt={5} clone order={{ xs: 1, sm: 1,md:2, lg: 2}}>
<Grid style={{height:"400px",overflowX:"hidden !important"}} item xs={12} sm={12} lg={6} md={6}>
  <Fade right style={{overflowX:"hidden !important"}}>
    <div style={{height:"400px"}}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{width:"100%",height:"100%",top:"0"}}
      viewBox="0 0 416.871 336.389"
    >
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={-71.8}
          x2={432.75}
          y1={235.66}
          x1={9.56}
          id="prefix__a"
        >
          <stop offset={0.01} />
          <stop stopOpacity={0.69} offset={0.13} />
          <stop stopOpacity={0.32} offset={0.25} />
          <stop stopOpacity={0} offset={1} />
        </linearGradient>
        <linearGradient
          xlinkHref="#prefix__a"
          y2={227.46}
          x2={236.76}
          y1={143.68}
          x1={105.57}
          id="prefix__b"
        />
      </defs>
      <path
        transform="matrix(.84 .5426 -.5195 .85447 234.948 28.385)"
        fill="none"
        stroke="#fff"
        strokeWidth={4.731}
        d="M-116.434 49.448h272.012v208.353h-272.012z"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth={4.444}
        d="M154.966 14.892L372.92 151.48 269.67 316.235 51.716 179.648z"
      />
      <path
        strokeMiterlimit={10}
        d="M215.73 123.079a20.767 20.767 0 01-13-1.75c-12.002-6.017-15.648-21.977-26.653-29.662-6.54-4.578-96.573-62.84-151.269 118.582"
        fill="none"
        stroke="#fff"
        strokeWidth={1.63516}
      />
      <path
        strokeMiterlimit={10}
        d="M215.55 126.349a4.987 4.987 0 01-3.27 2.126 44.738 44.738 0 01-11.937 1.733c-13.458.114-26.163-5.805-38.149-11.904-11.985-6.1-24.233-12.64-37.608-13.932-14.422-1.422-28.992 3.532-40.88 11.724-3.777 2.486-64.065 51.639-64.768 55.923"
        fill="none"
        stroke="#fff"
        strokeWidth={1.63516}
      />
      <path
        strokeMiterlimit={10}
        d="M219 128.18a22.712 22.712 0 01-13.229 8.029 53.355 53.355 0 01-15.73.72c-11.446-.802-22.761-2.731-34.207-2.65-11.446.082-23.269 2.339-32.507 9.092-9.239 6.753-14.046 95.346-96.164 82.085"
        fill="none"
        stroke="#fff"
        strokeWidth={1.63516}
      />
      <path
        d="M343.517 80.793a13.883 13.883 0 00-3.27 1.848 9.157 9.157 0 00-2.29 2.338 15.469 15.469 0 00-1.634 6.149c-.31 2.125-3.369 5.935-4.579 7.685-2.109 3.009-2.174 24.004-5.02 39.374h0a.102.102 0 000 .082 73.97 73.97 0 01-.8 3.892c-.639 2.682-.279 5.543-1.93 7.75a23.873 23.873 0 01-6.198 5.38 132.22 132.22 0 01-30.234 15.158c-2.43.923 2.578-.326 0 0-2.213-4.836-1.846-24.118.246-25.852 5.016-3.183 5.485-3.563 10.939-5.919a17.284 17.284 0 004.905-2.633 15.093 15.093 0 003.614-6.18l5.298-13.523a75.218 75.218 0 004.905-15.175c-1.88-2.894-4.905-5.2-5.82-8.502-.655-2.273-.344-4.791-1.407-6.917a18.69 18.69 0 01-1.733-3.172c-.311-1.178.36-2.747 1.635-2.715.505.052.98.264 1.357.605a10.236 10.236 0 013.041 4.023c.099.245.246.54.524.556a.752.752 0 00.458-.246 9.81 9.81 0 002.076-3.859c2.093-6 3.777-12.149 6.263-17.986a7.424 7.424 0 013.744-4.513c.331-.13.7-.13 1.03 0 .72.327.67 1.34.475 2.093-.654 2.305-1.766 4.447-2.568 6.687a11.348 11.348 0 00-.62 6.999 4.104 4.104 0 002.452-1.374 24.528 24.528 0 015.92-4.104 11.659 11.659 0 017.03-1.03c.605.114 1.308.376 1.423.981.114.605-.85 1.374-1.635 1.635-1.836.36-3.62.942-5.314 1.734a6.263 6.263 0 00-3.353 4.267 23.58 23.58 0 015.773-3.156 9.811 9.811 0 013.041-.719 4.415 4.415 0 012.91.9c.197.18.393.44.295.67a.867.867 0 01-.31.278 37.43 37.43 0 01-4.498 2.093 7.914 7.914 0 00-2.223 1.128 2.24 2.24 0 00-.85 2.224 18.297 18.297 0 015.82-1.635 2.96 2.96 0 012.339.72c.13.15.225.33.278.522.13.72-.818 1.096-1.505 1.44z"
        fill="none"
        stroke="#fff"
        strokeWidth={1.63516}
      />
      <path
        d="M287.808 144.597c-.965 7.44-1.636 14.34-2.633 21.797a8.061 8.061 0 01-6.067 8.176l-12.64 5.527a9.255 9.255 0 00-2.992 1.798 9.697 9.697 0 00-1.896 3.614c-7.375 19.802-23.727 35.892-28.043 56.577-.949 4.594-1.276 9.287-2.028 13.931a8.928 8.928 0 01-2.06 5.135 4.774 4.774 0 01-1.03.785 12.28 12.28 0 01-3.827 1.275c-11.724 2.55-23.595 5.118-35.597 4.807-12.002-.31-24.331-3.842-33.112-12.034a2.175 2.175 0 01-.752-1.096c-.05-.51.071-1.021.343-1.455a156.812 156.812 0 0014.062-43.201 3.27 3.27 0 00-.147-2.191 2.127 2.127 0 00-.294-.376 4.382 4.382 0 00-.998-.704c-2.125-1.226-1.93-3.76-3.744-5.412a54.434 54.434 0 01-6.966-7.669 3.875 3.875 0 01-1.03-2.502 4.022 4.022 0 011.16-2.158 161.538 161.538 0 0018.69-27.683c2.126-4.007 4.252-8.29 8.013-10.842a24.527 24.527 0 0111.037-3.27c12.79-1.525 0 0 25.797 22.215 3.644.381 22.87-.89 26.534-.934 4.66-.18 6.42-22.802 11.048-23.423a173.72 173.72 0 0129.172-.687z"
        fill="none"
        stroke="#fff"
        strokeWidth={1.63516}
      />
      <path
        transform="translate(-78.354 -65.08) scale(1.63516)"
        d="M187.61 200a7.51 7.51 0 01-2.34.78c-7.17 1.56-14.43 3.13-21.77 2.94-7.34-.19-14.88-2.35-20.25-7.36a1.33 1.33 0 01-.46-.67 1.42 1.42 0 01.21-.89 95.9 95.9 0 008.6-26.42 2 2 0 00-.09-1.34 1.3 1.3 0 00-.18-.23c5.46-4.4 13.34-9.06 16.22-12.59-1 5.24-2.48 10.43-3.73 15.62-.36 1.48-.71 3.09-.1 4.49.7 1.58 2.4 2.4 3.77 3.45 4.08 3.13 5.53 8.66 9.2 12.26 1.31 1.27 6.2 5.5 10.92 9.96z"
        fill="url(#prefix__b)"
      />
      <path
        d="M262.234 135.457a8.454 8.454 0 01-3.925 2.583c-.474.18-.98.344-1.471.507a11.086 11.086 0 00-5.2 2.927 15.158 15.158 0 00-3.27 7.93c-.295 3.01.261 6.23-1.129 8.912a5.641 5.641 0 01-1.243 1.635h0l-.098.082a5.772 5.772 0 01-2.289 1.063 15.19 15.19 0 01-10.269-1.03 25.803 25.803 0 01-8.306-6.344 15.78 15.78 0 01-4.252-7.539 37.478 37.478 0 003.745-17.07c-.262-4.154-2.273-7.964-3.27-12.02a25.214 25.214 0 0114.193-28.238 14.716 14.716 0 018.486-1.194 16.695 16.695 0 019.01 6.312 41.353 41.353 0 017.783 16.024 90.768 90.768 0 012.273 12.248l.442 3.613c.441 3.254.768 6.917-1.21 9.599z"
        fill="none"
        stroke="#fff"
        strokeWidth={2.73562268}
      />
      <path
        d="M225.786 110.668a20.963 20.963 0 002.96 7.325 2.616 2.616 0 01-2.682-.425 18.412 18.412 0 01-2.028-2.044 1.766 1.766 0 00-1.766-.67c-.687.278-.817 1.177-.752 1.913a29.433 29.433 0 002.011 6.77 9.255 9.255 0 01.197 6.9c-2.65.114-4.628-2.338-6.132-4.53l-4.366-6.213a13.081 13.081 0 01-2.486-5.135c-.408-2.6.769-5.15 1.636-7.636 1.34-3.76 2.076-7.767 3.924-11.315a26.588 26.588 0 019.909-10.056 79.616 79.616 0 0112.95-6.018 5.053 5.053 0 016.329.769l4.905 3.728c2.387 1.815 4.906 3.875 5.592 6.802.36 1.635-.163 3.614-1.733 4.023a5.102 5.102 0 01-3.27-.883 13.278 13.278 0 00-15.812 3.695c-1.88 2.437-2.976 4.742-5.838 6.116a6.05 6.05 0 00-3.548 6.884z"
        fill="#eaeaea"
        stroke="#fefefe"
        strokeWidth={2.63424276}
      />
      <path
        d="M156.455 191.64c-1.243.41-1.635 1.293-2.894 2.846a86.222 86.222 0 00-13.637 26.637 4.366 4.366 0 000 3.532 4.758 4.758 0 002.583 1.635c9.975 3.663 17.594 11.691 26.506 17.464a87.988 87.988 0 0018.952 8.911c7.227 2.535 14.716 4.53 21.796 7.358 2.65 1.047 4.906 2.11 7.636 2.944a13.883 13.883 0 017.767 4.905 41.942 41.942 0 002.6 4.072 12.59 12.59 0 004.48 2.796 108.297 108.297 0 0117.693 9.255 19.066 19.066 0 003.532 2.044c.818-.916 0-2.322-.687-3.27l-5.723-7.408c2.927-.31 5.74 1.128 8.176 2.633a19.785 19.785 0 008.045 3.483c.278-2.47-2.453-3.794-3.957-5.184l-6.23-5.805a2.224 2.224 0 01-.736-1.013 36.938 36.938 0 0113.082 2.174 5.461 5.461 0 003.695.49.867.867 0 00.441-.31c.197-.327 0-.72-.245-1.014a8.846 8.846 0 00-3.712-2.321 88.299 88.299 0 00-11.282-3.68 24.266 24.266 0 016.54-1.226c1.864-.098 4.203.687 5.985.18a1.782 1.782 0 001.39-1.913 81.137 81.137 0 00-21.731-3.777l4.137-4.906a3.368 3.368 0 00.866-1.439c.278-1.39-1.324-2.567-2.73-2.436a7.031 7.031 0 00-3.647 2.027c-2.6 2.224-5.543 4.48-8.944 4.546-2.993 0-5.707-1.635-8.176-3.172l-10.857-6.819c-5.544-3.499-11.103-6.982-16.352-10.825-8.388-6.066-16.352-13.08-25.917-16.956a86.664 86.664 0 005.608-13.408 4.431 4.431 0 00.295-2.29 4.317 4.317 0 00-1.995-2.387 52.194 52.194 0 00-13.278-7.015 20.897 20.897 0 00-7.505-1.635 6.295 6.295 0 00-1.57.278z"
        fill="none"
        stroke="#fff"
        strokeWidth={1.63516}
      />
      <path
        d="M253.584 95.265a52.162 52.162 0 00-5.887 3.139c-6.263 3.532-13.196 5.772-19.36 9.468a8.029 8.029 0 00-2.191 1.635 18.281 18.281 0 00-1.815 3.826c-1.227 2.436-3.63 4.039-5.658 5.887-2.028 1.847-3.826 4.48-3.27 7.145a8.732 8.732 0 001.144 2.551c.932 1.635 1.897 3.27 2.894 4.775a5.494 5.494 0 002.633 2.567c1.799.589 3.597-.736 5.167-1.815a24.233 24.233 0 017.015-3.27 37.233 37.233 0 005.134-1.636c2.83-1.308 10.71-13.604 15.191-16.695 2.714-1.864 10.776 0 11.642-1.193 1.129-1.635 5.69-9.91 4.644-11.577-1.308-2.093-8.633-3.663-10.628-5.184-1.995-1.52-4.791-.408-6.655.377z"
        fill="#7dc5ff"
      />
      <path
        d="M253.584 97.488a19.622 19.622 0 00-5.331.802 63.33 63.33 0 00-7.538 3.564c-2.665 1.194-5.347 2.338-7.963 3.614-1.505.752-3.01 1.537-4.448 2.404a8.029 8.029 0 00-2.191 1.635 18.281 18.281 0 00-1.815 3.826c-1.227 2.436-3.63 4.039-5.658 5.887-2.027 1.847-3.826 4.48-3.27 7.145a8.732 8.732 0 001.144 2.551c.933 1.635 1.897 3.27 2.895 4.775a5.494 5.494 0 002.632 2.567c1.799.589 3.598-.736 5.167-1.815a24.233 24.233 0 017.015-3.27c2.159-.638 4.383-.883 6.116-2.437a44.15 44.15 0 004.513-5.216c2.567-3.27 5.396-6.263 8.176-9.288a7.146 7.146 0 011.488-1.324 4.578 4.578 0 011.242-.49c2.878-.753 5.936.245 8.88-.148a3.058 3.058 0 001.52-.556 2.535 2.535 0 00.605-.834c.72-1.471 4.464-9.173 4.039-10.743-.425-1.57-4.906 2.96-5.74 1.537a4.807 4.807 0 00-.768-1.112 3.434 3.434 0 00-.85-.588 19.622 19.622 0 00-9.86-2.486z"
        fill="#787878"
      />
      <path
        d="M239.897 102.623a13.081 13.081 0 00-5.347 5.118 11.2 11.2 0 00-.36 6.72 13.637 13.637 0 002.126 5.56 6.54 6.54 0 005.004 2.943 7.685 7.685 0 005.592-2.861c3.727-5.032 7.352-9.454 13.212-11.038 2.584-.654 5.413-.752 7.604-2.256a7.963 7.963 0 002.469-9.451 9.81 9.81 0 00-5.576-5.151c-2.894-1.129-4.906.098-7.522 1.292a133.43 133.43 0 00-17.202 9.124z"
        fill="#4eb9ef"
        stroke="#fff"
        strokeWidth={1.63516}
      />
      <path
        d="M258.31 81.447s-44.314 7.702-53.683 36.84c0 0-2.453 10.04 10.743 8.176l1.03-2.19s-8.176.866-8.176-2.437 3.614-23.939 50.15-36.382z"
        fill="#00c2fb"
      />
      <path
        opacity={0.47}
        fill="#fff"
        d="M283.245 69.478l78.227-9.468L378.657 0l-77.785 6.72z"
      />
      <path
        opacity={0.2}
        fill="#7dc5ff"
        d="M283.245 69.478l78.227-9.468 35.891 55.449-75.904 1.16z"
      />
      <path
        opacity={0.84}
        fill="#fcfcfc"
        d="M378.657.278L361.472 60.01l35.891 55.449 19.508-68.04z"
      />
      <path
        opacity={0.47}
        fill="#fbfbfb"
        d="M345.316 196.824l37.969-4.594 8.339-29.123-37.756 3.27z"
      />
      <path
        opacity={0.2}
        fill="#7dc5ff"
        d="M345.316 196.824l37.969-4.594 17.414 26.914-36.84.556z"
      />
      <path
        opacity={0.84}
        fill="#fff"
        d="M391.624 163.238l-8.34 28.992 17.415 26.914 9.468-33.03z"
      />
    </svg>
    </div>
    </Fade>
  </Grid>
    
</Box>
<Box pt={11} pl={4} pr={4} clone order={{ xs: 2, sm: 2,md:1, lg: 1}} style={{color: "#ffff"}}>
<Grid item xs={12} sm={12} lg={6} md={6} id="illusions" style={{overflowX:"hidden !important"}}>
<Fade left style={{overflowX:"hidden !important"}}>
<Typography variant="h5" justifycontent="center">
       <span style={{borderBottom:"3px solid #7dc5ff"}}>We exist in a world of illusions. </span>
      </Typography>
<p>
In the coming days, there will be hunger & want for the need of fresh ideas.
</p>
<p>
A person who thinks a lot has nothing to think about except thoughts. So, he lives in a world of delusion. 
</p>
<p>
And often called civilized people have increasingly become insane, driven & self destructive, because through excessive usage of few exceptionally inhumane technologies they have lost touch with reality.
</p>
</Fade>

  </Grid>
    
</Box>
<Box  pt={10} clone order={{ xs: 3, sm: 3,md:3, lg: 3}} >
<Grid  item xs={12} sm={12} lg={12} md={12} id="illusions" style={{color: "#ffff", textAlign: 'center',overflowX:"hidden !important"}}>
<Typography variant="h4" gutterBottom>
  <Fade bottom style={{overflowX:"hidden !important"}} distance={"2rem"} duratrion={300}>
  <span style={{borderBottom:"3px solid #7dc5ff"}}>- I DREAM -</span>
  </Fade>
   
      </Typography>
   
      <span  style={{borderBottom:"2px solid #7dc5ff"}}>  Dream like you'll have a Deja Vu  </span>
</Grid>
</Box>
<Box pt={10} pl={4} pr={4} clone order={{ xs: 5, sm: 5,md:5, lg: 5}} style={{color: "#ffff"}}>
<Grid style={{height:"400px",overflowX:"hidden !important"}} item xs={12} sm={12} lg={7} md={7} id="illusions">
<Fade right style={{overflowX:"hidden !important"}}>
<Typography variant="h5" justifycontent="center">
       <span style={{borderBottom:"3px solid #7dc5ff"}}>My mission. </span>
      </Typography>
<p>
My mission is to be part of the transition and witness the impact through a cause that is only through everyone's participation and a whole new perception of leading life in a better way.
</p>
<p>
A place that has no barriers, no race or color and a helping hand for each other to improve with their flaws without any reluctancy. A safe environment that celebrates through experiences and aspirations.
There is a need to create deeper & closer human connections.</p>
<p>
We should be able to use technologies for the betterment of so-called "users".
</p>
<span style={{borderBottom:"2px solid #7dc5ff"}}>"You dont have to be technology "users" only. Be a creator or an efficient/Beneficent user"</span>
<Button variant="outlined"  color="secondary" style={{color:"#ffff",marginTop:"10px"}}><Link to='/aboutme' style={{color:"#fff",textDecoration:"none"}}>Meet the Virtual me Here</Link></Button> 
</Fade>

  </Grid>
    
</Box>


<Box pt={5} clone order={{ xs: 4, sm: 4,md:4, lg: 4}} style={{color: "#ffff"}}>
<Grid item xs={12} sm={12} lg={5} md={5} style={{overflowX:"hidden !important"}}>
<Fade left>
<div style={{height:"400px"}}>
<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{width:"100%",height:"100%",top:"0",left:"0"}}
      viewBox="0 0 389.67 374.498"
    >
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={463.46}
          x2={296.07}
          y1={386.24}
          x1={378.75}
          id="prefix__a"
        >
          <stop offset={0.01} />
          <stop stopOpacity={0.69} offset={0.13} />
          <stop stopOpacity={0} offset={1} />
        </linearGradient>
        <linearGradient
          xlinkHref="#prefix__a"
          y2={311.38}
          x2={233.61}
          y1={367.93}
          x1={264.81}
          id="prefix__b"
        />
        <linearGradient
          xlinkHref="#prefix__a"
          y2={271.02}
          x2={312.98}
          y1={477.95}
          x1={425.31}
          id="prefix__c"
        />
        <linearGradient
          xlinkHref="#prefix__a"
          y2={312.72}
          x2={441.38}
          y1={340.28}
          x1={384.7}
          id="prefix__d"
        />
        <linearGradient
          xlinkHref="#prefix__a"
          y2={307.12}
          x2={377.92}
          y1={262.66}
          x1={308.76}
          id="prefix__e"
        />
        <linearGradient
          xlinkHref="#prefix__a"
          y2={300.39}
          x2={181.36}
          y1={301.91}
          x1={74.65}
          id="prefix__f"
        />
        <linearGradient
          xlinkHref="#prefix__a"
          y2={321.98}
          x2={151.74}
          y1={318.27}
          x1={4.4}
          id="prefix__g"
        />
        <linearGradient
          xlinkHref="#prefix__a"
          y2={301.8}
          x2={183.21}
          y1={301.46}
          x1={46.32}
          id="prefix__h"
        />
        <linearGradient
          xlinkHref="#prefix__a"
          y2={365.11}
          x2={102.18}
          y1={279.39}
          x1={101.68}
          id="prefix__i"
        />
        <linearGradient
          xlinkHref="#prefix__a"
          y2={365.1}
          x2={72.39}
          y1={279.4}
          x1={71.88}
          id="prefix__j"
        />
        <linearGradient
          xlinkHref="#prefix__a"
          y2={365.23}
          x2={41.83}
          y1={279.52}
          x1={41.32}
          id="prefix__k"
        />
      </defs>
      <path
        transform="matrix(.84 .5426 -.5195 .85447 81.795 12.98)"
        fill="none"
        stroke="#fff"
        strokeWidth={4.903}
        d="M39.535-.979H321.45V214.96H39.535z"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth={4.606}
        d="M160.608 41.297l225.889 141.56-107.01 170.755L53.6 212.052z"
      />
      <g transform="matrix(.73743 0 0 .73743 33.01 .047)">
        <path
          d="M385.94 286.43q10.72 8.34 20.62 17.68a146.08 146.08 0 0011.08 9.92c2.62 2 5.41 3.8 8.08 5.74 2.29 1.66 4.49 3.43 6.63 5.28 4.71 4.05 9.2 8.55 12 14.09 2.8 5.54 3.74 12.31 1.24 18a9.58 9.58 0 01-2.58 3.63c-2.71 2.21-6.63 2-10.07 1.33-17.43-3.2-32.82-13-47.71-22.63-4.25-2.74-8.67-5.65-11.12-10.07a27.16 27.16 0 01-2.71-9.63 108.36 108.36 0 01.48-32.46c.56-3.37.86-7 4.85-6.18 3.39.7 6.52 3.21 9.21 5.3z"
          fill="none"
          stroke="#fff"
          strokeWidth={1.78}
        />
        <path
          d="M322.49 278.53a43.79 43.79 0 01-19.27 29.17c-3.23 2-5.36 4.86-7.73 7.36a16.62 16.62 0 01-6.77 4.67c-15.21 5.05-35.24 17.81-50.45 22.86-21 7-28.34 8.56-50.43 9.89a21.07 21.07 0 01-7.83-.94c-2.86-1-5.09-2.81-5.3-5.76-.36-5.49 6.59-8 12-9.06 47.18-9.5 71.38-50.47 115.26-70.23 14.67-6.63 23.56-5.16 20.52 12.04z"
          fill="none"
          stroke="#bbb"
          strokeWidth={1.78}
        />
        <path
          transform="translate(-4.36 -11.4)"
          d="M307 303.56l-7.13 22.9a16.62 16.62 0 01-6.77 4.67c-15.21 5.05-35.24 17.81-50.45 22.86-21 7-28.34 8.56-50.43 9.89a21.07 21.07 0 01-7.83-.94c0-.41.09-.84.16-1.27 0 0 44.85-4.3 78.38-29.64 33.53-25.34 44.07-28.47 44.07-28.47z"
          opacity={0.58}
          fill="url(#prefix__b)"
        />
        <path
          d="M318.51 262.88c-3.14-.44-6.47-.58-9.33.77-4.72 2.21-6.84 7.63-8.53 12.56l-30.9 90.18c-2.68 7.82-5.38 16.23-3.18 24.19.87 3.15 8.452 8.968 10.02 9.25 19.12 4.32 35.271-16.453 54.605-13.113 4.54.79 12.555 26.093 16.615 23.923 3.51-1.87 5.64-5.52 7.5-9a221.6 221.6 0 0025.53-108.75 24.21 24.21 0 00-1.36-8.76c-3.26-7.86-12.93-10.42-21.3-12-6.9-1.28-14.12-2-20.92-3.67-6.4-1.52-12.1-4.75-18.75-5.58z"
          fill="none"
          stroke="#d8d8d8"
          strokeWidth={1.78}
        />
        <path
          d="M156.36 335.52c-4.66-.11-9.63.15-13.48 2.78-3.85 2.63-5.88 8.43-3 12.12 2.49 3.23 7.2 3.44 11.27 3.36l15.34-.27c3.79-.07 7.71-.17 11.14-1.8 2.58-1.23 5.08-3.71 5.58-6.63.61-3.51-2.6-4.41-5.45-5.63-6.74-2.85-14.12-3.76-21.4-3.93z"
          fill="none"
          stroke="#fff"
          strokeWidth={1.78}
        />
        <path
          d="M388.32 225.97c-1.19 5.7-3.71 11-6.22 16.29q-5.08 10.71-10.16 21.41c-2.36 5-4.71 9.92-7.51 14.64a62.85 62.85 0 01-7 9.78c-2.42 2.7-5.29 5.19-8.78 6.22a12.44 12.44 0 01-15.71-14.06c.77-4.34 3.83-8.23 3.6-12.63a5.6 5.6 0 00-.55-2.3h0a10.75 10.75 0 00-2.66-2.81 17.54 17.54 0 01-5.69-14.74 29 29 0 012.59-8.45c2.32-5.29 5.13-10.35 7.82-15.47 1.86-3.58 5.54-8.62 5.29-12.79-.15-2.5-2.48-4.82-1.34-7.34 1.7-3.77 8.59-4.56 12.06-5.28a42.47 42.47 0 0115-.7c7.08 1.08 14 4.92 17.47 11.2 2.78 5.11 3 11.32 1.79 17.03z"
          fill="none"
          stroke="#f6f6f6"
          strokeWidth={2.355}
        />
        <path
          d="M352.64 193.65c-4.66-.12-9.49-.16-13.8 1.63-2 .83-4 2.23-4.48 4.32a6.38 6.38 0 00.75 4.38 15.16 15.16 0 008.22 6.86 38.2 38.2 0 0010.73 2 6.92 6.92 0 002.88 5.76 13.17 13.17 0 006.2 2.33c2.78.39 6.1.57 7.56 3a7.21 7.21 0 01.79 3.53 35.82 35.82 0 01-4.23 18c2.63.28 4.95-3 7.42-2.09 1.7.66 2 3.15 1 4.64a6.52 6.52 0 01-4.77 2.31 4.32 4.32 0 00-2 .5 3.65 3.65 0 00-1.07 1.46 49 49 0 00-4.26 13.13 5.48 5.48 0 00.2 3.45c1 1.89 3.75 2.05 5.69 1.15 2.79-1.31 4.57-4 6.17-6.68 5.76-9.55 16.44-12.86 17.69-23.94.61-5.45-2.07-16.39-2.54-21.84-.72-8.53-7.36-13.71-14.2-18.32-7.04-4.79-15.73-5.37-23.95-5.58z"
          fill="#f3f3f3"
        />
        <path
          d="M385.34 234.09c-1.86.1-3.42 1.37-4.83 2.6q-2.83 2.49-5.58 5.1a26.29 26.29 0 00-5.14 6.1 14.09 14.09 0 00-1.74 7 3.24 3.24 0 00.39 1.71 2.47 2.47 0 003.09.59 7.21 7.21 0 002.45-2.37 13 13 0 00-1.71 9.61 23.23 23.23 0 004.16 9 19.72 19.72 0 005.21 5.37 2.24 2.24 0 001.34.46 2.31 2.31 0 001.08-.46 24.83 24.83 0 009.28-11.2 4.58 4.58 0 00.46-2.05 5.76 5.76 0 00-.52-1.7 21.69 21.69 0 01-1.42-11c.49-3.77 2.48-8.12.91-11.84-1.23-2.89-3.84-7.13-7.43-6.92z"
          fill="none"
          stroke="#fff"
          strokeWidth={1.78}
        />
        <path
          d="M455.2 357.76c-5.84 5.21-22.13 10.06-34.05-3.84l-.42-.5c-14.49-17.12-22.63-38.82-32.92-58.82-2.92-5.66-5.85-11.88-4.71-18.16a16.13 16.13 0 015.71-9.1 14 14 0 018.5-3.46c5.54-.11 10.06 6.44 13.42 10.19 4.59 5.16 8.77 10.64 12.9 16.17 8.09 10.83 16 22 26.07 31.07 5.05 4.54 10.91 8.94 12.88 15.45 2.26 7.54-1.55 15.78-7.38 21z"
          fill="none"
          stroke="#fff"
          strokeWidth={1.78}
        />
        <path
          transform="translate(-4.36 -11.4)"
          d="M361.44 360.06c3.76-10.59 7.12-21.36 12-31.47a5 5 0 011.88-2.4c1.61-.88 3.56.14 5.09 1.14a233.36 233.36 0 0143.78 37.38c-3 3.31-8.38 1.21-12.2-1.07l-29.82-17.82c-1.52 10.78-6.59 32.45-12.57 45.75-3.29 7.32-8.58 20.86-13.71 27-2.85 3.43-7.8 6.63-20.48 3.31-4.46-1.17 1.55-6.06 3.34-9.65 1.72-3.43 3.48-6.84 5.14-10.3a420.61 420.61 0 0017.55-41.87z"
          opacity={0.58}
          fill="url(#prefix__c)"
        />
        <path
          transform="translate(-4.36 -11.4)"
          d="M448.29 366.74l-23.2-1.92C410.6 347.7 402.46 326 392.17 306c-2.92-5.66-5.85-11.88-4.71-18.16a16.13 16.13 0 015.71-9.1c.18 2.66 1.92 11.59 14.57 36 10.65 20.54 28.34 43.16 28.34 43.16z"
          opacity={0.58}
          fill="url(#prefix__d)"
        />
        <path fill="#fff" d="M1.16 351.18H455.2v6.58H1.16z" />
        <path opacity={0.58} fill="#fff" d="M.9 351.44h443.03v3.9H.9z" />
        <path
          transform="translate(-4.36 -11.4)"
          d="M346.18 296.73a5.85 5.85 0 01-2.29 1.14 5.17 5.17 0 01-6.77-5.16c0-.35.08-.71.14-1.06.77-4.34 3.83-8.23 3.6-12.63a5.6 5.6 0 00-.55-2.3 23.62 23.62 0 0015.22 2.28c8.2-1.77-7.2 15.59-9.35 17.73z"
          fill="url(#prefix__e)"
        />
        <path
          d="M266.45 90.53l-.92.47a8.77 8.77 0 01.56-.68c.12.07.24.13.36.21z"
          fill="#fff"
        />
        <path
          d="M266.45 90.53l-.92.47a8.77 8.77 0 01.56-.68c.12.07.24.13.36.21z"
          fill="#fff"
        />
        <path
          d="M310.64 105.85a30.19 30.19 0 00-6.8-33.66A41.47 41.47 0 00297.54.6a514.63 514.63 0 00-74 8.43c-30.89 6-61.53 15.49-88.06 32.4-26.53 16.91-48.78 41.83-58.34 71.81-7.22 22.7-7 47.37-11 70.75a142.34 142.34 0 01-4.35 18.71 48.65 48.65 0 0076.66 15.08A48.66 48.66 0 00230 232.05a48.64 48.64 0 0075.51-59.63 35.38 35.38 0 0024.89-23.93 33.85 33.85 0 001.15-5.18 35.24 35.24 0 00-20.91-37.46zM259.9 74.49c.13.07.27.14.39.22l-1 .52a6.94 6.94 0 01.61-.74z"
          fill="#000"
          stroke="#fff"
          strokeWidth={1.78}
        />
        <path
          d="M282.06 47.16c.18-.25.38-.5.59-.74a3.78 3.78 0 01.4.22zm72.63 63a35.3 35.3 0 00-21.29-32.4 30.17 30.17 0 00-6.76-33.63 41.43 41.43 0 0017.66-34A42.15 42.15 0 00343.25.8a244.63 244.63 0 00-28-.75q-8.83.16-17.66.56a514.63 514.63 0 00-74 8.43c-30.89 6-61.53 15.49-88.06 32.4C109 58.35 86.7 83.26 77.14 113.24c-7.22 22.7-7 47.37-11 70.75 20.51 10.25 49.56 18.38 62.35 18.38a48.42 48.42 0 0032.72-12.66 48.65 48.65 0 0091.55 14.27 48.66 48.66 0 0077.64-55.49 46.12 46.12 0 00-2.13-4.14 33.77 33.77 0 003.28-1 35.28 35.28 0 0023.14-33.17z"
          fill="#000"
          stroke="#fff"
          strokeWidth={1.78}
        />
        <path
          d="M266.45 90.53l-.92.47a8.77 8.77 0 01.56-.68c.12.07.24.13.36.21z"
          fill="#fff"
        />
        {/* <path
          fill="#7dc5ff"
          d="M88.24 252.13h27.32v98.8H88.24zM27.92 287.49h27.32v63.44H27.92zM58.36 252.13h27.32v98.8H58.36z"
        /> */}
        <path
          opacity={0.58}
          fill="url(#prefix__f)"
          d="M88.24 252.13h27.32v98.8H88.24z"
        />
        <path
          opacity={0.58}
          fill="url(#prefix__g)"
          d="M27.92 287.49h27.32v63.44H27.92z"
        />
        <path
          opacity={0.58}
          fill="url(#prefix__h)"
          d="M58.36 252.13h27.32v98.8H58.36z"
        />
        <path
          opacity={0.58}
          fill="url(#prefix__i)"
          d="M88.19 292.29h27.29v28.32H88.19z"
        />
        <path
          opacity={0.58}
          fill="url(#prefix__j)"
          d="M58.45 292.29h27.18v28.32H58.45z"
        />
        <path
          opacity={0.58}
          fill="url(#prefix__k)"
          d="M27.89 292.41h27.18v28.32H27.89z"
        />
        <path fill="#fff" d="M15.71 333.25h112.28v18.21H15.71z" />
        <circle r={6.07} cy={212.88} cx={319.16} opacity={0.68} fill="#fff" />
        <circle r={3.5} cy={220.64} cx={328.93} opacity={0.68} fill="#fff" />
      </g>
    </svg>
</div>
</Fade>

  </Grid>
    
</Box>
</Grid>

</Container>    

   
        )
    }
}


export default Test

