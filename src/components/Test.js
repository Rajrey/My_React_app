import React from "react";
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
import Canvasrobo from './Canvasrobo';
import { CgInfinity } from 'react-icons/cg';
import styled, { keyframes } from "styled-components";


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
  bottom: 10vh;
  left: 50vw;
  right: 0;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 20px;
  cursor: pointer;
  outline: none;

  &::before {
    position: absolute;
    top: 10px;
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
  bottom: 10px;
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
     
    
        const mHTML = document.getElementById('message'),
        messages = [
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
      console.log("test unmo")
      // window.removeEventListener( 'resize', this.onWindowResize, false );
    }
   
      render() {
        function ovalscroll(e) {
          e.preventDefault();
          window.scrollTo({
            top: 150,
            behavior: 'smooth'
          });
        }
        return (
            <div style={{width:"100%",padding:"0"}}>

          
<Grid container style={{height:"580px"}}>

<Box clone order={{ xs: 3, sm: 3 ,md:2, lg:2}} style={{overflow:"hidden !important"}}>
<Grid item xs={12} sm={12} lg={7} md={7} id="grid1" style={{height:"500px",overflow:"hidden"}} >
<div id="light" style={{overflow:"hidden !important"}}>
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
  <Box pt={15} pl={9} pb={10} id="contentwelcome">


  <Typography  variant="h6" component="h6"  style={{color: "#ffff"}}>
 
  -HEY THERE!
      </Typography>
      {/* <Typography  variant="h6" component="h6" gutterBottom  style={{color: "#ffff"}}>
 
Thanks for stopping by!!
      </Typography> */}
 
  I'm <b>Raj</b>
  
  <Typography  variant="h5" component="h5" style={{color: "#ffff"}}>
        {/* Front Developer,UI/UX Designer & Business Analyst */}
    My Identity - <span id="message"></span><span className="cursor1"></span>

      </Typography>
      

 

      </Box>
     
      </Typography>
      
  </Grid>

</Box>
<Box clone order={{ xs: 2, sm: 2,md:3, lg: 3}}>
<Grid item xs={12} sm={12} lg={5} md={5} id="grid2" style={{height:"700px",overflow:"hidden"}}>
 <Canvasrobo/>
  </Grid>
    
</Box>
<Box  clone order={{ xs: 3, sm: 3,md:4, lg: 4}} onClick={ovalscroll}>
<Grid  item xs={12} sm={12} lg={6} md={6} >
  <Box id="scrollarrow">        
  <OvalButton />
        <ArrowContainer>
          <Chevron />
          <Chevron />
          <Chevron />
        </ArrowContainer>
  </Box>

</Grid>
</Box>

<Box  clone order={{ xs: 4, sm: 4,md:5, lg: 5}}>
<Grid  item xs={12} sm={12} lg={12} md={12} style={{color: "#ffff", textAlign: 'center'}}>
<Typography variant="h4" gutterBottom  id="gridwelcome">
        <span style={{borderBottom:"3px solid #7dc5ff"}}>Welcome to <CgInfinity/>
              <b style={{fontFamily: 'Goldman'}}>RHE</b></span>
      </Typography>
      <p>Please make yourself at this virtual meet</p>
      <span  style={{borderBottom:"1px solid #7dc5ff"}}>Thanks for stopping by!</span>
</Grid>
</Box>
<Box pt={10} clone order={{ xs: 5, sm: 5,md:6, lg: 6}}>
<Grid container item xs={12} sm={12} lg={6} md={6}>
  <div id="rotatecircle">
  <ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  {/* <li></li> */}
</ul>
</div>


</Grid>

</Box>
<Box  clone order={{ xs: 7, sm: 7,md:8, lg: 8}}>
<Grid  item xs={12} sm={12} lg={6} md={6}>


</Grid>

</Box>
</Grid>

</div>    

   
        )
    }
}


export default Test

