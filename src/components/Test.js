import React from "react";
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
// import { Container } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
import Canvasrobo from './Canvasrobo';
import { CgInfinity } from 'react-icons/cg';
import styled, { keyframes } from "styled-components";
import Fade from 'react-reveal/Fade';
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
      // console.log("test unmo")
      // window.removeEventListener( 'resize', this.onWindowResize, false );
    }
      render() {
        function ovalscroll(e) {
          e.preventDefault();
          window.scrollBy({
            top: 150,
            behavior: 'smooth'
          });
        }
        function ovalscroll1(e) {
          e.preventDefault();
          window.scrollBy({
            top: 100,
            behavior: 'smooth'
          });
        }
        return (
            <div style={{width:"100%",padding:"0", flexGrow: "1"}}>

          
<Grid container>

<Box clone order={{ xs: 2, sm: 2 ,md:1, lg:1}} style={{overflow:"hidden !important"}}>
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
  
  <Typography  variant="h5" component="h5" style={{color: "#ffff",position:"absolute"}}>
        {/* Front Developer,UI/UX Designer & Business Analyst */}
    My Identity - <span id="message" ></span><span className="cursor1"></span>

      </Typography>
      

 

      </Box>
     
      </Typography>
      
  </Grid>

</Box>
<Box clone order={{ xs: 1, sm: 1,md:2, lg: 2}}>
<Grid item xs={12} sm={12} lg={5} md={5} id="grid2" style={{height:"700px",overflow:"hidden"}}>
 <Canvasrobo/>
  </Grid>
    
</Box>
<Box  clone order={{ xs: 2, sm: 2,md:2, lg: 2}} onClick={ovalscroll}>
<Grid  item xs={12} sm={12} lg={6} md={6} >
  <Box mt={-20} id="scrollarrow">        
  <OvalButton />
        <ArrowContainer>
          <Chevron />
          <Chevron />
          <Chevron />
        </ArrowContainer>
  </Box>

</Grid>
</Box>

<Box  clone order={{ xs: 3, sm: 3,md:3, lg: 3}} >
<Grid  item xs={12} sm={12} lg={12} md={12} style={{color: "#ffff", textAlign: 'center'}}>
<Typography variant="h4" gutterBottom  id="gridwelcome">
       <span style={{borderBottom:"3px solid #7dc5ff"}}>-Welcome to <CgInfinity/>
              <b style={{fontFamily: 'Goldman'}}>RHE</b>-</span>
      </Typography>
   
      <span  style={{borderBottom:"2px solid #7dc5ff"}}>Thanks for stopping by!</span>
      <p>Please make yourself at this virtual meet</p>
</Grid>
</Box>

<Box pt={5} clone order={{ xs: 4, sm: 4,md:4, lg: 4}}>
<Grid style={{height:"400px"}} container  id="rotatecircle"  item xs={12} sm={12} lg={4} md={4}>
<Fade left>
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
<Box pt={7} pl={5} pr={5} clone order={{ xs: 5, sm: 5,md:6, lg: 6}} style={{color: "#ffff"}}>
<Grid  item xs={12} sm={12} lg={8} md={8}>
  <Fade right>

  
<Typography variant="h6" style={{textAlign: 'left'}}>
        <span> <CgInfinity/><b style={{fontFamily: 'Goldman'}}>RHE </b>stands for
        Infinite Reality Has Evolved
              </span>
      </Typography>
{/* <p><CgInfinity/>RHE stands for Infinite Reality Has Evolved</p> */}
<p>Most of the untold stories of people when brought into the limelight they somehow inspire and empower us, right?</p>
<p><mark>RHE is my virtual creation</mark> to at least share my thoughts, as I'm not in a <mark>TED Talk</mark> to share my opinions about life!</p>
<p>Have you ever connected yourself to stories or memes, posts and got attached? I'm sure you did it. </p>
<p>I'm here to share about myself that you can relate to, ‘as you, most probably, know’ each of us has one thing in common i.e <mark>Life & Time</mark> </p>
<mark>"Life is all about experiences and simulations in the end"</mark>
<p>I hope that this content will add some value, gives you inspiration and relates it to the connected soul during my discourse.</p>
<div>
<Button variant="outlined"  color="secondary" style={{color:"#ffff",marginTop:"10px"}}><Link to='/aboutme' style={{color:"#fff",textDecoration:"none"}}>Meet the Virtual me Here</Link></Button> <span > <Button variant="outlined" onClick={ovalscroll1} color="secondary" style={{color:"#ffff",marginTop:"10px"}}>Continue Reading</Button> </span>
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
<Grid container direction="row">
<Grid  item xs={12} sm={12} lg={12} md={12}>
{/* <Paper>item</Paper> */}

</Grid>
</Grid>

</div>    

   
        )
    }
}


export default Test

