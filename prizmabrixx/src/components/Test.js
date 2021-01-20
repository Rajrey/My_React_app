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
 
  <span style={{fontSize:"40px"}}>We are</span><b style={{fontSize:"40px"}}> Prizmabrixx</b>

  
  <Typography  variant="h5" component="h5" style={{color: "#ffff",position:"absolute"}}>
        {/* Front Developer,UI/UX Designer & Business Analyst */}
    Our Identity - <span>Virtual House Simulation Company
</span>

      </Typography>
   

      </Box>
     
      </Typography>
      
  </Grid>

</Box>
<Box clone pt={1} order={{ xs: 1, sm: 1,md:2, lg: 2}}>
<Grid item xs={12} sm={12} lg={5} md={5} id="grid2" style={{height:"700px",textAlign:"center"}}>
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
  <span style={{borderBottom:"3px solid #fec82a"}}>- Welcome to <CgInfinity/>
              <b style={{fontFamily: 'Goldman'}}> PRIZMABRIXX</b> -</span>
  </Fade>
   
      </Typography>
   
      <span  style={{borderBottom:"2px solid #fec82a"}}>Thanks for stopping by!</span>
      <p>Enhance your experience through our virtual meet
</p>
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
  <span> PRIZMABRIXX is one stop information center to everyone who thinks about construction.


              </span>
  </mark>
      </Typography>
{/* <p><CgInfinity/>RHE stands for Infinite Reality Has Evolved</p> */}
PRIZMABRIXX offers a special service called Virtual House Simulation using Virtual Reality. Simulation is nothing but an imitation of a situation or process. Virtual House Simulation is all about the fact when a 3D virtual house model becomes interactive and a person can seamlessly walk in a 3D model of a house. Virtual reality (VR) is a computer-generated scenario that simulates the experience. The immersive environment can be similar to the real world or it can be fantastical, creating an experience not possible in our physical reality. This will help a person get a 100% experience of a project before one starts their construction.

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
       <span style={{borderBottom:"3px solid #fec82a"}}>- Our Philosophy -</span>
      </Typography>
   <div style={{marginTop:"25px"}}>
   <span  style={{borderBottom:"2px solid #fec82a"}}>
   In the coming days, there will always be hunger and a need for fresh ideas.

     </span>
   </div>
      
      <p style={{marginTop:"25px"}}>There are basically two types of customers one who want to construct the house and the other who wants to buy a constructed house. Customer comes to a hold at construction planning; the customer takes in a lot of effort in imagining about the outcome of the blueprint and probably any pictorial representation of the blueprint of the construction. One would always have the urge to have a complete clarity of how the end product would look like. Every customer wants to know the outcome before laying the pillars. The customer would hence look for a service that could provide the best possible layout of the blueprint.
</p>
      </Fade>


</Grid>
  </Box>

<Box  pt={10} clone  >
<Grid  item xs={12} sm={12} lg={12} md={12} id="illusions" style={{color: "#ffff", textAlign: 'center',overflowX:"hidden !important"}}>
<Typography variant="h4" gutterBottom>
  <Fade bottom style={{overflowX:"hidden !important"}} distance={"2rem"} duratrion={300}>
  <span style={{borderBottom:"3px solid #fec82a"}}>- Our Vision and Mission -
</span>
  </Fade>
   
      </Typography>
   
      {/* <span  style={{borderBottom:"2px solid #fec82a"}}>  Dream like you'll have a Deja Vu  </span> */}
</Grid>
</Box>
<Box pt={10} pl={4} pr={4} clone  style={{color: "#ffff"}}>
<Grid style={{height:"400px",overflowX:"hidden !important"}} item xs={12} sm={12} lg={7} md={7} id="illusions">
<Fade left style={{overflowX:"hidden !important"}}>
<Typography variant="h5" justifycontent="center">
       <span style={{borderBottom:"3px solid #fec82a"}}>Our mission. </span>
      </Typography>
<p>
To be recognized as the leading and most trusted Virtual House Simulation Company, reaching to every common person across the nation.
 </p>
 <p>
 + To be established as a one stop information center to everyone who thinks about construction, by delivering them every possible outcome through Virtual House Simulation.

 </p>
 <p>
 + To reduce the efforts in imagining the outcome of a blueprint.

 </p>
 <p>
 + To provide construction practicality under various perceptions which are amount of ventilation, placement of objects, Lighting solutions and customizability of every object including wall positions and colours. 

 </p>
<Button variant="outlined"  color="secondary" style={{color:"#ffff",marginTop:"10px"}}><Link to='/aboutme' style={{color:"#fff",textDecoration:"none"}}>Meet the Virtual us Here</Link></Button> 
</Fade>

  </Grid>
    
</Box>


<Box pt={5} clone  style={{color: "#ffff"}}>
<Grid item xs={12} sm={12} lg={5} md={5} style={{overflowX:"hidden !important"}}>
<Fade right>
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
        fill="#fec82a"
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
        fill="#fec82a"
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
        fill="#fec82a"
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
</Grid>

</Container>    

   
        )
    }
}


export default Test

