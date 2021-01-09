import React , {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import './Aboutme.css';
import Zoom from 'react-reveal/Zoom';
import Button from '@material-ui/core/Button';
import { TiTick } from 'react-icons/ti';
import { GiReturnArrow } from 'react-icons/gi';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import Fade from 'react-reveal/Fade';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

function Aboutme() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
  }, []);

  function ovalscroll1() {
    // e.preventDefault();
    window.scrollBy({
      top: 100,
      behavior: 'smooth'
    });
  }

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const tutorialSteps = [
    {
      label: 'Painting',
      imgPath:
        'paint1.jpeg',
    },
    {
      label: 'Styling',
      imgPath:
    'walk1.jpg',
    },
    {
      label: 'Detailing',
      imgPath:
  'shades1.jpeg',
    },
    {
      label: 'Dance',
      imgPath:
    'kmitra1.jpg',
    },
    {
      label: 'Conceptual',
      imgPath:
    'train1.jpg',
    },
    {
      label: 'Dancing',
      imgPath:
    'round1.jpeg',
    },
    {
      label: 'Exploring',
      imgPath:
        'goa1.jpg',
    },
    {
      label: 'Hand crafting',
      imgPath:
    'black1.jpg',
    },
    {
      label: 'Crafting',
      imgPath:
    'plant1.jpeg',
    },
    {
      label: 'Event Managing/ Participating',
      imgPath:
    'mic1.jpg',
    },
    {
      label: 'Djying',
      imgPath:
  'dj1.jpg',
    }

  ];
  
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 400,
      flexGrow: 1,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default,
    },
    img: {
      height: 155,
      display: 'block',
      maxWidth: 400,
      overflow: 'hidden',
      width: '100%',
    },
  }));
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Container style={{width:"100%",padding:"0",height:"100%"}}>

          
    <Grid container style={{overflow:"hidden !important"}}>
    
    <Box clone order={{ xs: 2, sm: 2 ,md:1, lg:1}} style={{overflow:"hidden !important"}}>
    <Grid item xs={12} sm={12} lg={9} md={9} id="grid4" style={{height:"500px",overflow:"hidden !important"}} >
    <Box pt={10} pl={4} pr={4} pb={10} style={{color: "#ffff"}}>
    
    
    <Typography  variant="h5" component="h5" gutterBottom justifycontent="left">
    <Zoom right cascade>
    -What I am all about
    
    
    </Zoom>
    
          </Typography>
         
          <b><span  style={{fontFamily: 'Goldman',fontSize:"30px",borderBottom:"3px solid #7dc5ff"}}>NO BLUFF, SMART, SAVVY, BOLD</span></b>
         <p>
         The unread pages are like unopened entryways. Don't worry, the door to me is always open for you. 
         </p>
         <p>
           <mark>It's just a reader like you who brings life to the story</mark>
         </p>
         <p>
         Have you ever been hanging tight for the unread double ticks<TiTick style={{color:"gray"}}/><TiTick style={{color:"gray",marginLeft:"-10px"}}/>? I'm pretty sure most of us do.
         </p>
         <p>
         <mark>
         Underneath there is a story holding back to turn blue<TiTick style={{color:"#7dc5ff"}}/><TiTick style={{color:"#7dc5ff",marginLeft:"-10px"}}/>
         </mark>
      
         </p>
         <Button variant="outlined" onClick={ovalscroll1} color="secondary" style={{color:"#ffff",marginTop:"10px",zIndex:"3"}}>View Story</Button> 
        
        </Box>
      </Grid>
    
    </Box>
    <Box clone order={{ xs: 1, sm: 1,md:2, lg: 2}}>
    <Grid item xs={12} sm={12} lg={3} md={3} id="grid3" style={{height:"500px"}}>
      
    {/* <Container style={{justifyContent:"center"}}> */}
    <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 140.301 267.613"
          style={{width:"100%",height:"100%",top:"0"}}
        className="mysuitvect">
          <path
            d="M69.272 95.828c-3.216-2.767-14.9-4.959-12.698-4.863 8.862-5.78 16.21-20.401 7.34-29.173-.077 24.992-61.078-67.1-62.022-42.126-.133 5.848 3.256 10.28 2.6 1.515.786 4.376 7.801 18.654 4.5 6.282-2.192-13.326 2.038 9.321 8.192 8.517-1.183-3.747-5.314-14.517-.577-5.426 2.792 8.256 8.774 1.56 2.626-2.968 1.06-5.054 12.812 5.38 18.293 2.745 10.273-2.763-8.356-3.889-11.229-6.843-7.004-3.741 8.807 2.002 11.778 2.162 5.53 2.024 13.514-2.628 3.686-3.33-4.286-.658-23.204-6.555-10.524-4.138 6.55 1.432 21.216 6.318 23.304 2.61-5.041-3.732-20.553-6.524-20.12-7.37 7.958.572 25.418 4.24 24.51 10.818-12.605 3.033-25.609 10.055-31.41 22.091.956 6.191 17.414 16.884 15.229 11.013-3.172-4.238-7.811-13.474-1.04-4.324 1.004 4.24 12.61 16.737 7.841 6.055-3.061-4.268-11.643-20.584-3.688-8.73.901 6.073 12.925 14.637 6.476 3.917-2.524-4.579-9.485-17.357-2.494-6.775 2.049 4.406 11.995 17.874 7.738 5.322-2.246-3.622-6.937-12.978-1.348-4.625.808 3.921 9.248 15.331 6.854 4.572-1.337-3.74-4.741-12.6-.24-4.566 1.493 3.57 4.64 20.164 7.114 9.522.105-5.655-6.06-15.796-5.818-17.37 8.453 9.602 7.9 23.352 6.254 35.225 5.276-.563 2.854-15.797 3.085-21.874-.385-5.027-4.428-18.775-.392-7.419 3.324 10.65 2.199 21.993.776 32.864 5.555-5.97 3.7-18.54 3.188-27.092-1-4.33-1.395-13.356.512-3.734 1.966 5.955.346 20.7 2.565 21.24 4.312-7.299.327-23.056 1.257-25.891 3.087 5.492-.528 21.796 3.827 20.625 1.523-9.318 1.06-19.021-1.816-28.04 5.86 7.21 1.425 25.283 5.617 27.743 3.49-7.361-.947-22.06.235-25.66 3.266 4.094.156 18.398 4.273 17.141 2.35-13.479-3.199-27.792-13.46-36.704C73.532 13.968 70.342 2.68 59.27 5.531c-6.778 1.064-27.205 3.058-26.186-1.662 10.516 3.096 20.803-3.886 31.281-.213C75.263 8.04 81.582 19.13 90.496 26.5c10.543 15.729 6.203 35.636-.015 52.11-1.095 8.13-.958 18.27-3.057 24.787-1.716 5.33-3.886 10.315-18.152-7.57zM52.413 84.069c2.132-3.725.282-19.616 2.975-15.78-1.098 4.465 3.863 13.91 6.308 5.348.374 5.649-7.317 6.13-9.283 10.432zm14.269-61.51c-5.045-6.565-.54-2.84 2.83.73l-1.021-.197zm4.042-.116c-3.07-6.194 1.778-2.922 0 0zm4.083-.143c-.739-5.092-5.996-14.497.28-5.177.373 1.223 2.281 5.449-.28 5.177zM16.871 10.44c-6.056-.966-6.52-10.974-2.138-1.914.722.62 7.692 4.463 2.138 1.913zM21.726 7.4c-4.89-1.124-2.372-7.828-.356-1.105.687-.878 4.111 4.259.356 1.105z"
            className="svg-elem-1" fill="#fff"
          />
          <g fill="none" strokeWidth={24.849} stroke="#fff">
            <path
              transform="matrix(.0425 .00254 -.00238 .04189 -95.097 32.712)"
              d="M2684.092-132.486c-40.152 45.454-68.94 110.606-102.274 216.668-33.334 106.062-71.212 253.029-91.666 336.362-20.455 83.334-23.485 103.03-11.363 126.517 12.122 23.486 39.393 50.757 53.787 74.242 14.394 23.484 15.909 43.18-11.365 104.547-27.274 61.366-83.331 164.391-111.362 226.513-28.03 62.121-28.03 83.333-18.182 105.304 9.849 21.97 29.545 44.697 54.545 60.606 25 15.909 55.304 25 68.94 49.241 13.636 24.242 10.606 63.636 11.363 90.91.758 27.273 5.303 42.424 17.04 57.887 11.737 15.462 29.172 29.992 35.99 51.961 6.819 21.97 2.273 50.757 23.486 85.607s68.181 75.758 97.727 125c29.545 49.241 41.666 106.817 84.849 153.788 43.182 46.97 117.424 83.333 198.885 66.99 81.462-16.343 170.12-85.375 277.708-143.714 107.588-58.338 234.05-105.956 297.288-129.768 63.24-23.811 63.24-23.811 57.935-88.973-5.303-65.162-15.908-195.447-77.699-294.552-61.79-99.106-174.771-167.02-214.166-306.42-39.395-139.4-5.204-350.27-27.502-466.31-22.298-116.041-101.086-137.253-156.111-183.588-55.025-46.334-87.4-120.332-89.672-191.545-2.273-71.212 25-140.91-7.574-178.03-32.575-37.12-125.001-41.666-196.97-31.06-71.97 10.606-123.485 36.363-163.637 81.817z"
              className="svg-elem-2"/>
            <path
              transform="matrix(.0425 .00254 -.00238 .04189 -95.097 32.712)"
              d="M2499.243 497.06c6.818-35.607 35.606-76.516 65.91-106.818 30.302-30.303 62.12-50 89.393-60.606 27.272-10.606 50-12.12 84.847 1.515 34.847 13.636 81.82 42.425 108.334 62.122 26.515 19.696 32.576 30.302 21.212 31.818-11.363 1.515-40.15-6.06-70.454-12.121-30.303-6.06-62.12-10.606-93.939-6.818-31.818 3.787-63.636 15.908-86.364 34.848-22.727 18.94-36.363 44.696-46.97 68.181-10.606 23.485-18.181 44.697-25.757 58.333-7.576 13.637-15.15 19.697-26.516 7.574-11.366-12.123-26.515-42.422-19.696-78.028zM2876.47 560.118c-17.156-5.883-35.19-12.066-54.114-18.043-18.924-5.977-40.494-12.35-61.817-15.29-21.322-2.942-41.924-2.463-56.378 3.915-14.454 6.377-21.807 18.632-9.796 28.682 12.011 10.05 43.38 17.893 74.018 25.98 30.637 8.089 60.54 16.423 76.47 20.834 15.932 4.412 17.893 4.902 17.158 9.067-.735 4.164-4.167 12.01-17.159 22.306-12.992 10.295-35.537 23.038-53.185 32.107-17.647 9.069-30.391 14.46-40.686 15.441-10.295.98-18.137-2.45-25.246-11.03-7.108-8.578-13.48-22.303-16.176-38.48-2.696-16.176-1.716-34.804-6.862-47.548-5.147-12.745-16.422-19.608-27.697-26.47M2513.235 1111.588c-14.215-1.47-28.43-2.94-32.107-8.089-3.676-5.148 3.187-13.97 8.579-18.872 5.392-4.902 9.314-5.882 20.095-4.412 10.782 1.47 28.434 5.393 45.59 10.785 17.157 5.392 33.824 12.255 44.608 18.382 10.784 6.128 15.686 11.52 20.588 16.912M2658.823 1142.47c9.315-11.275 18.629-22.55 27.207-40.93 8.577-18.382 16.421-43.874 9.804-64.707-6.617-20.832-27.697-37.01-48.775-53.186M2553.677 1320.166c-3.676-14.951 3.677-22.794 19.851-20.344 16.175 2.451 41.178 15.198 66.914 26.227 25.735 11.03 52.206 20.343 70.343 27.451 18.137 7.108 27.94 12.01 34.313 15.931 6.372 3.922 9.314 6.863 10.05 11.764.735 4.902-.736 11.765-12.012 21.815s-32.35 23.283-54.165 35.048c-21.814 11.766-44.362 22.06-60.05 21.079-15.686-.981-24.51-13.235-30.357-28.214-5.847-14.979-8.858-33.551-17.682-53.649-8.823-20.098-23.53-42.157-27.205-57.108z"
              className="svg-elem-3"/>
          </g>
          <g stroke="#fff" fill="none">
            <path
              d="M29.988 133.92l3.82-14.549 47.119-16.014-2.264 12.451L48.1 137.316l-14.716 28.299L.646 203.472z"
              strokeWidth={1.29986024}
              className="svg-elem-4"/>
            <path
              d="M78.637 115.779l12.23 17.863 20.811 23.945 16.947 68.278-8.423 24.958M.646 203.472h0l4.44 40.249 4.527 23.77h0l1.132-20.375 28.3-57.73 19.243-18.111-9.056-11.32-1.132-22.64"
              strokeWidth={1.29986024}
              className="svg-elem-5" />
            <path d="M111.678 157.587s0 0 0 0z" strokeWidth={0.26485088}  className="svg-elem-6"/>
          </g>
          <path
            d="M73.518 203.236l7.147 32.482 8.445-2.598-12.993 5.197-9.095 15.591"
            fill="none"
            stroke="#fff"
            strokeWidth={1.065}
            className="svg-elem-7" />
          <path
            d="M27.521 46.331l-2.684-15.236 11.62 4.101-1.367 7.975z"
            fill="#f6f6f6"
            className="svg-elem-8" />
          <path
            d="M2.651 8.942c2.253 2.321 8.988 7.445 13.026 9.326 4.038 1.881 5.378.52 7.188-.051 1.81-.57 4.088-.349 4.088-.349s-2.279-.221-5.49-1.35c-3.21-1.129-7.353-3.165-10.276-4.805-2.924-1.64-4.628-2.885-6.594-3.748-1.966-.863-4.195-1.344-1.942.977zM19.355 1.69c2.253 2.321 8.988 7.445 13.026 9.326 4.037 1.881 5.378.52 7.188-.051 1.81-.57 4.087-.349 4.087-.349s-2.278-.221-5.489-1.35c-3.21-1.129-7.353-3.165-10.277-4.805-2.923-1.64-4.627-2.885-6.593-3.748-1.967-.863-4.195-1.344-1.942.977z"
            fill="#fff"
            className="svg-elem-9" />
        </svg>
    {/* </Container> */}
      </Grid>
        
    </Box>
    
    {/* <Box pt={10} clone order={{ xs: 3, sm: 3,md:3, lg: 3}}> */}
    {/* <div className="containerline" style={{overflow:"hidden !important"}}>
      <div className="wrapper">
        <div className="fade"></div>
        <div className="line-grid">
         </div>
      </div>
      </div> */}
    {/* </Box> */}
    <div className="containerline" style={{overflow:"hidden !important"}}>
      <div className="wrapper">
        <div className="fade"></div>
        <div className="line-grid">
         </div>
      </div>
      </div>
    </Grid>
    
    
    
    <Grid container style={{overflow:"hidden !important"}}>
    <Box pt={12} pl={4} pr={4} clone order={{ xs: 1, sm: 1,md:1, lg: 1}}>
    <Grid  item xs={12} sm={12} lg={12} md={12} style={{color: "#ffff", textAlign: 'left',overflowX:"hidden !important"}}>
    <Typography variant="h4" gutterBottom id="gridstory" style={{textAlign:"center"}}>
      <span style={{borderBottom:"3px solid #7dc5ff"}}>- A glimpse into my life -</span>
          </Typography>
          <Fade right>
    
          
          <p>
          The story begins at the point when I graduated as an average student , I always had questions in my psyche. Does a degree with greater grades, evaluations prove one's true potential, ability & knowledge? Do they mirror all the skills that an individual truly possess? Is education the only way to carry on with life or Is it the general public who indoctrinated people to suppress the dreams of the dreamers and tell them just to follow the herd?
     
          </p>
    <p>
    You know, Even I was a piece of the same herd, since we can't expect change right away and sometimes&nbsp;
    <mark>
     we need to take the normal course followed by a U Turn to reach at our end goal
    </mark>
    . So, I did the same with my life. 
    </p>
    <p>
    The system which is created with all the benefits for leading a better life, to procure the bread & butter has additionally a dark side which will never have a special place to talk about.
    </p>
    <p>
      <mark>
      I consistently believed in myself that one day the skills, real life experiences & out of the box thinking, hard work will gauge more than my grades
      </mark>
    
     . And this is where I am right now. 
    </p>
    <p>
    <mark>
     Wait did you lost the route? Let me guide you to my U Turn
     </mark>.
    </p>
    <Button variant="outlined" onClick={ovalscroll1} color="secondary" style={{color:"#ffff",marginTop:"10px",zIndex:"3"}}>Way to U Turn</Button> 
    </Fade>
    </Grid>
        
    </Box>
    
    <Box pt={10} pl={4} pr={4} clone order={{ xs: 2, sm: 2,md:2, lg: 2}}>
    <Grid  item xs={12} sm={12} lg={12} md={12} style={{color: "#ffff", textAlign: 'left',overflowX:"hidden !important"}}>
    <Typography variant="h4" gutterBottom id="ustory" style={{textAlign:"center"}}>
      <span style={{borderBottom:"3px solid #7dc5ff"}}>- U Turn <GiReturnArrow/>-</span>
          </Typography>
          <Fade right>
          <p>
          I needed to organize the obligations of acquiring for the family first and to do equity to my procured degree. Along these lines, I endeavored to get recruited by a couple of companies and finally settled with one. 
          </p>
          <p>
            <mark>
            Opportunity plays a crucial role in everybody's life. People really won't know who you are unless provided with an opportunity
            </mark>.
         
          </p>
          <p>
          For my situation, it turned out to be well and I needed to showcase all my skills in every possible way and utilize the opportunity. People started acknowledging my work, true skills and for them, I was completely a different person for their opinion about me with regards to work. Gradually, I began to invest most of my leisure time on the skills that I wanted to nurture and hobbies that were abandoned because of the past conditions.
          </p>
          <p>
          Out of reliable hard work and nurturing the skills and hobbies which were never encouraged, they've indirectly been inculcated in the work that I do now. This is my UTurn in life.
          </p>
          <p>
            <mark>
            The grades are just like an entry ticket but the entire show runs with what we believe, our actual potential, skills, and vision
            </mark>.
          </p>
            </Fade>
          
    </Grid>
        
    </Box>
    <Box pt={10} clone order={{ xs: 3, sm: 3,md:3, lg: 3}}>
    <Grid  item xs={12} sm={12} lg={12} md={12}>
    <Typography variant="h4" gutterBottom id="ustory" style={{textAlign:"center",color:"#ffff"}}>
      <span style={{borderBottom:"3px solid #7dc5ff"}}>- Abstract peek -</span>
          </Typography>
    </Grid>
    
    </Box>
    </Grid>
    
    <Grid container style={{overflow:"hidden !important"}}>
    <Box pt={8} pl={4} pr={4} clone order={{ xs: 1, sm: 1,md:1, lg: 1}}>
    <Grid  item xs={12} sm={12} lg={6} md={6} id="wordle1">
      <Fade left>
      <div>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1768.85 1614.599"
          preserveAspectRatio="xMidYMin meet"
          style={{width:"79%",top:"0",left:"0",height:"79%",marginLeft:"60px"}} 
          id="wordlesvg1">
          <text
            y={-1020.056}
            x={374.235}
            transform="rotate(90)"
            data-key="Active"
            fontSize={122.133}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={1.357}
          >
            {"Business"}
          </text>
          <text
            transform="rotate(90)"
            data-key="Allure"
            x={348.076}
            y={-1447.938}
            fontSize={360.217}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={5.603}
          >
            {"Art"}
          </text>
          <text
            transform="rotate(90)"
            data-key="Art"
            x={914.099}
            y={-1024.505}
            fontSize={87.04}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={8.704}
          >
            {"Analyst"}
          </text>
          <text
            transform="rotate(90)"
            data-key="Big"
            x={396.056}
            y={-1169.297}
            fontSize={112.243}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={11.224}
          >
            {"Development"}
          </text>
          <text
            data-key="Business"
            x={556.006}
            y={674.378}
            fontSize={140.701}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={14.07}
          >
            {"Logic"}
          </text>
          <text
            data-key="Coder"
            x={540.928}
            y={151.727}
            fontSize={195.015}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            stroke="#fff"
            strokeWidth={6.001}
          >
            {"Creative"}
          </text>
          <text
            transform="rotate(90)"
            data-key="Creative"
            x={1315.382}
            y={-1658.642}
            fontSize={153.639}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={15.364}
          >
            {"Djying"}
          </text>
          <g stroke="#fff" strokeWidth={1.474}>
            <text
              y={205.961}
              x={-373.79}
              data-key="Customization"
              fontSize={39.996}
              fontFamily="'Arial Black',Gadget,sans-serif"
              textAnchor="middle"
              transform="translate(2138.334 621.426) scale(3.33683)"
            >
              {"Disc"}
            </text>
            <text
              data-key="Dance"
              x={-247.043}
              y={207.065}
              fontSize={39.996}
              fontFamily="'Arial Black',Gadget,sans-serif"
              textAnchor="middle"
              transform="translate(2138.334 621.426) scale(3.33683)"
            >
              {"Jockey"}
            </text>
          </g>
          <text
            transform="rotate(90)"
            data-key="Djying"
            x={1131.593}
            y={-247.15}
            fontSize={195.75}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={19.575}
          >
            {"Attitude"}
          </text>
          <g fill="#fff">
            <text
              y={-610.86}
              x={477.718}
              data-key="Effective"
              transform="matrix(0 1.60464 -1.60464 0 742.694 -74.303)"
              fontSize={39.996}
              fontFamily="'Arial Black',Gadget,sans-serif"
              textAnchor="middle"
              strokeWidth={4}
            >
              {"Hard"}
            </text>
            <text
              y={-606.525}
              x={618.464}
              data-key="Empathy"
              transform="matrix(0 1.60464 -1.60464 0 742.694 -74.303)"
              fontSize={39.996}
              fontFamily="'Arial Black',Gadget,sans-serif"
              textAnchor="middle"
              strokeWidth={4}
            >
              {"Work"}
            </text>
          </g>
          <text
            data-key="Explorer"
            x={1443.438}
            y={896.57}
            fontSize={61.945}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={6.194}
          >
            {"Illustrator"}
          </text>
          <text
            data-key="Jockey"
            x={1306.18}
            y={1483.081}
            fontSize={92.051}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={9.205}
          >
            {"Dreamer"}
          </text>
          <text
            data-key="Music"
            x={1398.039}
            y={1080.015}
            fontSize={90.689}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={9.069}
          >
            {"Humour"}
          </text>
          <g fill="#fff">
            <text
              y={338.878}
              x={-59.126}
              data-key="noob"
              fontSize={71.171}
              fontFamily="'Arial Black',Gadget,sans-serif"
              textAnchor="middle"
              strokeWidth={7.117}
              transform="matrix(1.34638 0 0 1.34638 344.095 -97.085)"
            >
              {"Effective"}
            </text>
            <text
              y={418.698}
              x={43.135}
              data-key="Operations"
              fontSize={65.216}
              fontFamily="'Arial Black',Gadget,sans-serif"
              textAnchor="middle"
              strokeWidth={6.522}
              transform="matrix(1.34638 0 0 1.34638 344.095 -97.085)"
            >
              {"Communication"}
            </text>
          </g>
          <text
            transform="rotate(90)"
            data-key="Outspoken"
            x={419.361}
            y={-1324.458}
            fontSize={80.611}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={8.061}
          >
            {"Empathy"}
          </text>
          <text
            data-key="Persuasion"
            x={633.536}
            y={1132.148}
            fontSize={99.415}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={9.942}
          >
            {"Unique"}
          </text>
          <text
            transform="rotate(90)"
            data-key="Sincere"
            x={1062.359}
            y={-40.702}
            fontSize={147.207}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#111"
            stroke="#fff"
            strokeWidth={4.421}
          >
            {"Technophile"}
          </text>
          <text
            transform="rotate(90)"
            data-key="Style"
            x={560.527}
            y={-873.391}
            fontSize={78.283}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={7.828}
          >
            {"Persuasion"}
          </text>
          <text
            data-key="Tasking"
            x={768.019}
            y={938.788}
            fontSize={84.25}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={8.425}
          >
            {"Engineer"}
          </text>
          <text
            data-key="Work"
            x={693.75}
            y={1493.409}
            fontSize={136.308}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={13.631}
          >
            {"Allure"}
          </text>
        </svg>
      
    
    </div>
      </Fade>
      
        
      </Grid>
    
    </Box>
    <Box pt={9} pl={4} pr={4} clone order={{ xs: 2, sm: 2,md:2, lg: 2}}>
    <Grid  item xs={12} sm={12} lg={6} md={6} id="wordle2"> 
    <Fade right>
      <div>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{width:"85%",top:"0",left:"0",height:"85%"}} 
          preserveAspectRatio="xMidYMin meet"
          viewBox="0 0 457.475 353.863"
        id="wordlesvg2">
          <text
            transform="rotate(90 70.987 70.866)"
            data-key="Analyst"
            x={67.54}
            y={-107.649}
            fontSize={40.477}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            stroke="#efefef"
            strokeWidth={1.39}
          >
            {"Dance"}
          </text>
          <text
            y={236.869}
            x={9.559}
            data-key="Decision"
            fontSize={18.832}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={1.883}
            transform="rotate(90 36.666 266.973)"
          >
            {"Problem"}
          </text>
          <text
            y={236.918}
            x={85.607}
            data-key="Developer"
            fontSize={18.663}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={1.866}
            transform="rotate(90 36.666 266.973)"
          >
            {"Solver"}
          </text>
          <g stroke="#fff" strokeWidth={1.142}>
            <text
              y={1330.585}
              x={1728.213}
              data-key="Development"
              fontSize={39.996}
              fontFamily="'Arial Black',Gadget,sans-serif"
              textAnchor="middle"
              transform="matrix(.70764 0 0 .70764 -985.76 -597.882)"
            >
              {"Question"}
            </text>
            <text
              y={1329.638}
              x={1939.486}
              data-key="Disc"
              fontSize={39.996}
              fontFamily="'Arial Black',Gadget,sans-serif"
              textAnchor="middle"
              transform="matrix(.70764 0 0 .70764 -985.76 -597.882)"
            >
              {"Thinking"}
            </text>
          </g>
          <text
            transform="rotate(90 70.987 70.866)"
            data-key="Dreamer"
            x={323.084}
            y={-2.701}
            fontSize={22.764}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={2.276}
          >
            {"Style"}
          </text>
          <text
            transform="rotate(90 70.987 70.866)"
            data-key="Engineer"
            x={85.217}
            y={-142.946}
            fontSize={22.019}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={2.202}
          >
            {"Quick Learner"}
          </text>
          <text
            data-key="Handcrafts"
            x={5.031}
            y={267.72}
            fontSize={19.992}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={1.999}
            transform="translate(141.853 -.121)"
          >
            {"Handcrafts"}
          </text>
          <text
            transform="rotate(90 70.987 70.866)"
            data-key="Humour"
            x={199.326}
            y={-286.127}
            fontSize={41.205}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={4.12}
          >
            {"Developer"}
          </text>
          <g fill="#fff">
            <text
              y={-689.042}
              x={-553.19}
              data-key="Illustrator"
              transform="rotate(90 -302.07 85.5) scale(.62193)"
              fontSize={39.996}
              fontFamily="'Arial Black',Gadget,sans-serif"
              textAnchor="middle"
              strokeWidth={4}
            >
              {"Big"}
            </text>
            <text
              y={-685.942}
              x={-417.059}
              data-key="Inspiring"
              transform="rotate(90 -302.07 85.5) scale(.62193)"
              fontSize={39.996}
              fontFamily="'Arial Black',Gadget,sans-serif"
              textAnchor="middle"
              strokeWidth={4}
            >
              {"Picture"}
            </text>
          </g>
          <text
            data-key="Interpersonal"
            x={243.495}
            y={131.866}
            fontSize={15.314}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={1.531}
            transform="translate(141.853 -.121)"
          >
            {"Explorer"}
          </text>
          <text
            transform="rotate(90 70.987 70.866)"
            data-key="Learner"
            x={237.729}
            y={133.71}
            fontSize={35.37}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            stroke="#fff"
            strokeWidth={1.4}
          >
            {"Psychophile"}
          </text>
          <g fill="#fff">
            <text
              y={800.757}
              x={1697.343}
              data-key="Listener"
              fontSize={39.996}
              fontFamily="'Arial Black',Gadget,sans-serif"
              textAnchor="middle"
              strokeWidth={4}
              transform="matrix(.39282 0 0 .39282 -354.288 -126.055)"
            >
              {"Music"}
            </text>
            <text
              y={801.348}
              x={1866.687}
              data-key="Logic"
              fontSize={39.996}
              fontFamily="'Arial Black',Gadget,sans-serif"
              textAnchor="middle"
              strokeWidth={4}
              transform="matrix(.39282 0 0 .39282 -354.288 -126.055)"
            >
              {"Producer"}
            </text>
          </g>
          <text
            data-key="Passion"
            x={-66.142}
            y={29.655}
            fontSize={29.47}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={2.947}
            transform="translate(141.853 -.121)"
          >
            {"Strategy"}
          </text>
          <text
            transform="rotate(90 70.987 70.866)"
            data-key="Picture"
            x={255.571}
            y={-87.957}
            fontSize={16.433}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={1.643}
          >
            {"Outspoken"}
          </text>
          <text
            data-key="Problem"
            x={-8.38}
            y={103.912}
            fontSize={19.781}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={1.978}
            transform="translate(141.853 -.121)"
          >
            {"Sincere"}
          </text>
          <g fill="#fff">
            <text
              y={232.459}
              x={1882.124}
              data-key="Programmer"
              fontSize={39.996}
              fontFamily="'Arial Black',Gadget,sans-serif"
              textAnchor="middle"
              strokeWidth={4}
              transform="translate(-334.104 -4.726) scale(.36316)"
            >
              {"Decision"}
            </text>
            <text
              y={234.482}
              x={2056.791}
              data-key="Psychophile"
              fontSize={39.996}
              fontFamily="'Arial Black',Gadget,sans-serif"
              textAnchor="middle"
              strokeWidth={4}
              transform="translate(-334.104 -4.726) scale(.36316)"
            >
              {"Maker"}
            </text>
          </g>
          <text
            data-key="Question"
            x={168.889}
            y={306.563}
            fontSize={20.293}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={2.029}
            transform="translate(141.853 -.121)"
          >
            {"Managerial"}
          </text>
          <text
            style={{
              InkscapeFontSpecification: "'Arial Rounded MT Bold, '",
            }}
            data-key="Sense"
            x={-48.59}
            y={153.638}
            fontWeight={400}
            fontSize={18.227}
            fontFamily="Arial Rounded MT Bold"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={1.823}
            transform="translate(141.853 -.121)"
          >
            {"Programmer"}
          </text>
          <text
            data-key="Sketching"
            x={251.007}
            y={34.245}
            fontSize={38.39}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            stroke="#c7c7c7"
            strokeWidth={1.339}
            transform="translate(141.853 -.121)"
          >
            {"Coder"}
          </text>
          <g fill="#fff">
            <text
              y={293.014}
              x={1049.623}
              data-key="Solver"
              fontSize={39.996}
              fontFamily="'Arial Black',Gadget,sans-serif"
              textAnchor="middle"
              strokeWidth={4}
              transform="translate(-431.159 -72.967) scale(.46435)"
            >
              {"Multi"}
            </text>
            <text
              y={294.102}
              x={1208.904}
              data-key="Strategy"
              fontSize={39.996}
              fontFamily="'Arial Black',Gadget,sans-serif"
              textAnchor="middle"
              strokeWidth={4}
              transform="translate(-431.159 -72.967) scale(.46435)"
            >
              {"Tasking"}
            </text>
          </g>
          <text
            transform="rotate(90 70.987 70.866)"
            data-key="Techie"
            x={129.268}
            y={-189.785}
            fontSize={14.602}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={1.46}
          >
            {"Research"}
          </text>
          <g fill="#fff">
            <text
              y={686.866}
              x={933.699}
              data-key="Technophile"
              fontSize={79.406}
              fontFamily="'Arial Black',Gadget,sans-serif"
              textAnchor="middle"
              strokeWidth={7.941}
              transform="matrix(.21183 0 0 .21183 -111.206 40.974)"
            >
              {"Active"}
            </text>
            <text
              y={682.898}
              x={1244.028}
              data-key="Thinking"
              fontSize={66.815}
              fontFamily="'Arial Black',Gadget,sans-serif"
              textAnchor="middle"
              strokeWidth={6.682}
              transform="matrix(.21183 0 0 .21183 -111.206 40.974)"
            >
              {"Listener"}
            </text>
          </g>
          <text
            data-key="Unique"
            x={231.627}
            y={238.053}
            fontSize={16.13}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={1.613}
            transform="translate(141.853 -.121)"
          >
            {"Inspiring"}
          </text>
          <text
            transform="rotate(90 70.987 70.866)"
            data-key="Managerial"
            x={238.045}
            y={-173.37}
            fontSize={19.933}
            fontFamily="'Arial Black',Gadget,sans-serif"
            textAnchor="middle"
            fill="#fff"
            strokeWidth={1.993}
          >
            {"Passion"}
          </text>
          <g fill="#fff">
            <text
              data-key="Technophile"
              x={1021.133}
              y={686.866}
              fontSize={79.406}
              fontFamily="'Arial Black',Gadget,sans-serif"
              textAnchor="middle"
              strokeWidth={7.941}
              transform="matrix(.21183 0 0 .21183 -81.073 79.192)"
            >
              {"Writer"}
            </text>
          </g>
        </svg>
      </div>
    </Fade>
    
      </Grid>
      </Box>
     
      <Box pt={4} pl={4} pr={4} clone order={{ xs: 3, sm: 3,md:3, lg: 3}}>
    <Grid  item xs={12} sm={12} lg={6} md={6}>
    <Fade left>
      <div>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 562.06 456.543"
          style={{width:"100%",top:"0",left:"0",height:"100%"}} 
          preserveAspectRatio="xMidYMin meet"
        >
          <g transform="matrix(.56716 0 0 .56275 0 0)">
            <path
              d="M991 271.755V419.41H191V314.22a418.25 418.25 0 0178.152-155.957L827.523 68.32a422.273 422.273 0 0148.06 36.641l-395.51 82.41 430.952-47.229a421.704 421.704 0 0140.836 53.73l-74.785 55.916 84.498-39.992a420.553 420.553 0 0121.156 41.68 419.188 419.188 0 018.27 20.278zM781.821 42.359A418.542 418.542 0 00597.751 0C467.937 0 351.876 58.863 274.789 151.35 406.794 122.424 636.626 72.356 781.82 42.358z"
              fill="#f2f2f2"
            />
            <path
              d="M204.213 320.631h5.908a10.156 10.156 0 0110.126 10.127v64.135a17.721 17.721 0 0017.722 17.721v0a17.721 17.721 0 0017.721-17.721V239.618a10.156 10.156 0 0110.127-10.126h5.907a10.156 10.156 0 0110.127 10.126v155.275a17.721 17.721 0 0017.721 17.721v0a17.721 17.721 0 0017.722-17.721v-94.515a10.156 10.156 0 0110.126-10.127h5.907a10.156 10.156 0 0110.127 10.127v94.515a17.721 17.721 0 0017.721 17.721v0a17.721 17.721 0 0017.722-17.721V366.2a10.156 10.156 0 0110.127-10.127h5.907a10.156 10.156 0 0110.126 10.127v28.692a17.721 17.721 0 0017.722 17.721v0a17.721 17.721 0 0017.721-17.721V294.47a10.156 10.156 0 0110.127-10.127h5.907a10.156 10.156 0 0110.127 10.127v100.422a17.721 17.721 0 0017.721 17.721v0a17.721 17.721 0 0017.722-17.721V267.467a10.156 10.156 0 0110.126-10.127h5.907a10.156 10.156 0 0110.127 10.127v127.426a17.721 17.721 0 0017.722 17.721v0a17.721 17.721 0 0017.721-17.721v-64.135a10.156 10.156 0 0110.127-10.127h5.907a10.156 10.156 0 0110.126 10.127v64.135a17.721 17.721 0 0017.722 17.721v0a17.721 17.721 0 0017.721-17.721v-94.515a10.156 10.156 0 0110.127-10.127h5.907a10.156 10.156 0 0110.127 10.127v94.515a17.721 17.721 0 0017.721 17.721h7.91a18.305 18.305 0 0012.836-5.505 10.07 10.07 0 017.102-2.934h5.908a10.07 10.07 0 017.102 2.934 18.305 18.305 0 0012.836 5.505h7.91a17.721 17.721 0 0017.721-17.721v-9.283a10.156 10.156 0 0110.127-10.127h5.907a10.156 10.156 0 0110.127 10.127v9.283a17.721 17.721 0 0017.721 17.721v0a17.721 17.721 0 0017.722-17.721V294.47a10.156 10.156 0 0110.126-10.127h5.907a10.156 10.156 0 0110.127 10.127v100.422a17.721 17.721 0 0017.721 17.721v0a17.721 17.721 0 0017.722-17.721v-64.135a10.156 10.156 0 0110.127-10.127h5.907a10.101 10.101 0 017.595 3.462v-97.827a35.593 35.593 0 00-35.593-35.593H224.78a30.692 30.692 0 00-30.692 30.692v109.393a10.156 10.156 0 0110.126-10.127z"
              fill="none"
              stroke="#000"
              strokeWidth={9.477}
            />
            <path fill="#2f2e41" d="M746.949 262.821h4.958v195.826h-4.958z" />
            <path
              d="M797.658 287.78c.279 59.857-36.498 109.975-45.755 121.638-1.342 1.679-2.101 2.565-2.101 2.565s-1.055-1.198-2.853-3.46c-9.696-12.177-41.038-55.24-45.595-108.194a49.756 49.756 0 01-.092-1.114q-.43-5.43-.465-10.996a154.419 154.419 0 012.33-27.139c.076-.498.168-.987.253-1.485 9.957-54.726 45.274-95.578 45.274-95.578a207.592 207.592 0 0119.89 28.32c.152.254.304.507.448.76a231.74 231.74 0 0112.21 23.603c.136.279.254.557.372.836 8.81 19.94 15.966 44.135 16.084 70.245z"
              fill="#7dc5ff"
            />
            <path fill="#2f2e41" d="M442.308 225.69h4.958v195.826h-4.958z" />
            <path
              d="M493.018 250.646c.316 68.475-47.86 124.209-47.86 124.209s-48.688-55.287-49.003-123.763c-.316-68.475 47.86-124.209 47.86-124.209s48.688 55.287 49.003 123.763z"
              fill="#7dc5ff"
            />
            <path
              d="M359.09 302.02c-1.37 2.182-3.145 2.131-4.745 1.128-1.601-1.004-2.421-2.58-1.053-4.763 1.369-2.183 6.008-3.143 6.008-3.143s1.158 4.595-.21 6.778zM683.14 328.18c-1.368 2.183-3.144 2.131-4.745 1.128-1.6-1.004-2.42-2.58-1.052-4.762 1.368-2.183 6.008-3.143 6.008-3.143s1.157 4.594-.211 6.777zM505.57 314.78c.576 2.51-.716 3.73-2.557 4.152-1.842.422-3.536-.112-4.112-2.623-.575-2.512 2.026-6.471 2.026-6.471s4.067 2.43 4.643 4.941zM795.022 405.918c.576 2.512-.716 3.73-2.558 4.153-1.841.422-3.535-.112-4.111-2.623-.576-2.511 2.026-6.47 2.026-6.47s4.067 2.43 4.643 4.94zM481.154 355.569c.99 4.316-1.23 6.411-4.396 7.137-3.165.726-6.077-.193-7.066-4.509-.99-4.316 3.482-11.12 3.482-11.12s6.99 4.176 7.98 8.492zM604.097 377.174c-2.076 3.911-5.126 4.043-7.994 2.521-2.869-1.522-4.47-4.121-2.394-8.033 2.075-3.911 9.91-6.132 9.91-6.132s2.553 7.732.478 11.644zM726.943 421.818c-.577 4.39-3.388 5.58-6.608 5.158-3.22-.423-5.628-2.299-5.052-6.69.577-4.39 7.14-9.21 7.14-9.21s5.097 6.352 4.52 10.742z"
              opacity={0.1}
            />
            <path
              fill="#3f3d56"
              d="M395.735 273.1l83.732-86.315.605.587-83.731 86.315zM404.174 301.791l83.732-86.315.605.588-83.731 86.315zM768.992 193.097l-65.865 67.983c.076-.498.168-.987.253-1.485l65.164-67.257c.152.253.304.506.448.76zM704.625 327.136l83.673-86.372.606.588-83.673 86.371zM781.574 217.536l-80.22 82.793-1.19 1.232-.607-.59 1.705-1.756 79.94-82.515c.136.279.254.557.372.836z"
            />
            <path
              d="M437.9 202.67h-10.552v-10.553h10.553zm-9.74-.813h8.929v-8.929h-8.93zM751.825 342.753h-10.553v-10.552h10.553zm-9.741-.811h8.93v-8.93h-8.93z"
              fill="#2f2e41"
            />
            <circle
              cx={318.494}
              cy={96.424}
              r={12.591}
              opacity={0.4}
              fill="#7dc5ff"
            />
            <circle
              cx={295.191}
              cy={102.437}
              r={8.832}
              opacity={0.4}
              fill="#7dc5ff"
            />
            <circle
              cx={867.607}
              cy={64.141}
              r={26.37}
              opacity={0.4}
              fill="#7dc5ff"
            />
            <circle
              cx={829.986}
              cy={97.682}
              r={18.498}
              opacity={0.4}
              fill="#7dc5ff"
            />
            <path
              d="M342.003 475.867l-.802-.016a185.88 185.88 0 012.845-26.564c3.466-18.787 9.23-31.126 17.13-36.673l.46.656c-18.455 12.958-19.624 62.102-19.633 62.597zM352.021 475.675l-.801-.016c.017-.887.518-21.806 8.753-27.588l.46.656c-7.902 5.549-8.408 26.735-8.412 26.948z"
              fill="#2f2e41"
            />
            <circle cx={366.195} cy={409.335} r={4.007} fill="#7dc5ff" />
            <circle cx={364.211} cy={443.799} r={4.007} fill="#7dc5ff" />
            <path
              d="M350.153 415.745a17.8 17.8 0 01-1.21 9.113 16.222 16.222 0 01-2.727-17.42 17.8 17.8 0 013.937 8.307zM363.253 427.428a17.8 17.8 0 01-9.185.397 16.222 16.222 0 0116.679-5.721 17.8 17.8 0 01-7.494 5.324zM363.4 457.95a12.477 12.477 0 01-6.437.277 11.37 11.37 0 0111.69-4.01 12.477 12.477 0 01-5.252 3.732z"
              fill="#2f2e41"
            />
            <path fill="#fff9ff" d="M344 723.717H0v-2h343z" />
          </g>
          <path
            d="M31.366 424.204s-4.53 18.947-.411 19.771c4.118.824 24.301.558 29.244 1.382 4.943.824 15.24-.558 15.24-4.265s-10.71-6.178-10.71-6.178-15.24-8.238-15.651-8.65c-.412-.412-17.712-2.06-17.712-2.06z"
            fill="none"
            stroke="#fff"
            strokeWidth={1.6070241600000001}
          />
          <path
            d="M73.424 304.839s-8.479 19.462 2.26 19.462c10.74 0 10.175-20.145 10.175-20.145z"
            fill="none"
            stroke="#fff"
            strokeWidth={1.7138524200000003}
          />
          <g fill="none">
            <path
              d="M38.61 298.083s1.46 16.528 1.46 17.987c0 1.458-1.46 24.306 0 25.278 1.457.973-.973 7.778-.973 10.21 0 2.43-7.778 42.778-5.834 58.334 1.945 15.557-2.916 14.098-1.458 15.557 1.458 1.458 1.458 1.458 1.458 4.375s15.556 5.347 15.556 5.347l17.015-107.434-8.75-32.085z"
              stroke="#fff"
              strokeWidth={1.8970443099999998}
            />
            <path
              d="M41.041 436.63s-4.86 17.5 0 18.472c4.862.973 28.682-1.113 34.516-.141 5.833.972 17.986 1.114 17.986-3.261 0-4.376-12.64-7.292-12.64-7.292s-17.986-9.723-18.472-10.21c-.486-.485-21.39 2.432-21.39 2.432z"
              stroke="#fff"
              strokeWidth={2.0410479599999998}
            />
            <path
              d="M34.236 278.638s-5.834 14.098.972 21.39c6.806 7.291 14.584 21.875 14.584 22.847 0 .973-13.612 97.712-11.667 104.032 1.944 6.32 1.458 10.209.972 11.181-.486.972 4.861 6.32 10.695 6.32 5.833 0 14.584-4.376 15.556-8.265.972-3.889-1.459-37.431-.972-43.751.486-6.32 2.916-15.556 3.889-17.5.972-1.945 6.32-3.89 7.292-9.723.972-5.834 8.75-80.212 6.32-82.642-2.431-2.43-47.641-3.89-47.641-3.89z"
              stroke="#fff"
              strokeWidth={1.8970443099999998}
            />
            <path
              d="M83.335 181.898S77.5 164.884 53.68 169.745c0 0-4.375 1.458-2.917 2.917 1.458 1.458 2.917 1.458.972 2.916-1.944 1.459-4.375 0-2.917 1.459 1.459 1.458-13.125 10.209-12.153 26.737.972 16.528-2.43 64.655-1.458 68.058.972 3.403-5.834 7.778-2.917 9.236 2.917 1.459 55.419 10.21 56.877 0 1.459-10.208-.486-35.973.486-40.834.972-4.862 0-45.696-2.917-50.558-2.916-4.861-3.402-7.778-3.402-7.778z"
              stroke="#fff"
              strokeWidth={1.8970443099999998}
            />
            <path
              d="M78.473 150.3c0 1.41-2.041 2.304-5.206 2.508h-.005a26.49 26.49 0 01-4.025-.078c-2.022-.184-2.858 1.716-3.203 4.225-.564 4.137.223 9.936-.686 10.845-1.254 1.255-10.398-.004-13.257-2.848a2.641 2.641 0 01-.84-1.527 8.122 8.122 0 00-2.44-4.535c-1.688-1.843-4.09-3.884-6.797-7.132-4.861-5.833-4.348-8.433-4.943-13.006-1.03-7.932 8.819-14.945 10.29-17.463 0 0 16.516-6.948 25.752-6.462 9.237.486 1.958 24.778 1.958 24.778s.55 1.41 1.205 3.228a50.7 50.7 0 012.159 7.01c.023.151.036.304.039.457zM78.96 186.76s-16.529-.973-17.987 23.334C59.514 234.4 60 257.248 60 257.734c0 .486 6.806 46.669 13.126 46.669 6.32 0 11.18-.973 12.64-3.403 1.458-2.43-3.89-37.432-3.89-37.432s-2.43-36.946 1.459-48.613c3.889-11.667 4.375-26.737-4.376-28.196z"
              stroke="#fff"
              strokeWidth={1.8970443099999998}
            />
            <path
              d="M76.746 118.827c5.094 6.156 10.19 12.313 12.206 19.954 2.017 7.642.955 16.77-1.061 21.228-2.017 4.458-4.989 4.246-6.682 5.073-1.694.826-2.128 2.781-2.977 4.055-.85 1.274-2.123 1.91-6.286 1.906-4.164-.004-11.213-.651-18.265-1.298"
              stroke="#f6f6f6"
              strokeWidth={1.89679919}
            />
          </g>
        </svg>
      </div>
    </Fade>
      </Grid>
      </Box>
      <Box pt={17} pl={4} pr={4} clone order={{ xs: 4, sm: 4,md:4, lg: 4}}>
    <Grid  item xs={12} sm={12} lg={6} md={6} style=
    {{color:"#ffff"}} id="gridexplore"> 
      <Fade right>
      <Typography variant="h4" style={{textAlign:"left"}}>
      <span style={{borderBottom:"3px solid #7dc5ff",textAlign:"center"}}>- I EXPLORE -</span>
          </Typography>
          <p>
          Exploring the potential outcomes of humanity, thinking past typical. 
          </p>
          <p>
            <mark>
            Admiring the true, intriguing, fascinating nature of interesting individuals their occupation, work, innovation, and contribution for the cause of revolution
            
            </mark>
            &nbsp;
           which helps us to live life in a better place today and thereafter.
    
          </p>
      </Fade>
    
    
      </Grid>
      </Box>


      <Box pt={13} pl={4} pr={4} clone order={{ xs: 5, sm: 5,md:5, lg: 5}}>
    <Grid  item xs={12} sm={12} lg={8} md={8} style=
    {{color:"#ffff"}} id="abilities"> 
    <Fade left>

 
<Typography variant="h4" style={{textAlign:"left",color:"#ffff"}}>
      <span style={{borderBottom:"3px solid #7dc5ff"}}>- My Skills -</span>
          </Typography>
          <p>
- Creativity <br />
- Sketching/Painting/Illustration/Artist <br />
- Dancing <br />
- Passion for music-It transformed me into a Disc Jockey<br />
- Beginner in music production (Music maker)<br /> 
- Handcrafts/Art<br />
- Understanding human physc/Interest in pyschology<br /> 
- Frontend Development/UI-UX Designer<br />
- UI/Websites Development<br />
- Web/PWA Development<br />
- Full stack development at times<br />
- Mobile application development<br />
- Sense of humor<br />
- Effective correspondence<br /> 
- Analyzing skills, Problem solving, Logical thinking<br /> 
- Question thinking ,Quick learning and Adapting<br />
- Detail oriented<br />
- Styling<br />
- Writing<br />
- Managerial abilities<br /> 
- Multitasking<br />
- Cooking<br />
- Time Management<br />
- Ideating<br />
- Right Attitude<br />
- Flexible<br />
- Commitment/Dedication<br/>
- Focussed and attentive<br/>
- Out of the box thinking<br />
          </p>
          </Fade>
    </Grid>
    </Box>
    <Box pt={10} pl={0.6} pr={0.6} clone order={{ xs: 5, sm: 5,md:5, lg: 5}}>
    <Grid  item xs={12} sm={12} lg={4} md={4} style=
    {{color:"#ffff"}}> 
<div className={classes.root}>
    <Paper style={{color:"black"}} square elevation={1} className={classes.header}>
      <Typography variant="h5" style={{fontSize:"medium"}}>{tutorialSteps[activeStep].label}</Typography>
    </Paper>
    <AutoPlaySwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >
      {tutorialSteps.map((step, index) => (
        <div key={step.label}>
          {Math.abs(activeStep - index) <= 2 ? (
            <img style={{height:"100%",width:"100%"}}className={classes.img} src={step.imgPath} alt={step.label} />
          ) : null}
        </div>
      ))}
    </AutoPlaySwipeableViews>
    <MobileStepper
      steps={maxSteps}
      position="static"
      variant="text"
      activeStep={activeStep}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          Next
          {theme.direction === 'rtl' ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <IoIosArrowForward /> : <IoIosArrowBack />}
          Back
        </Button>
      }
    />
  </div>
    </Grid>
    </Box>
    <Box pt={10} pl={0.6} pr={0.6} clone order={{ xs: 6, sm: 6,md:6, lg: 6}}>
    <Grid  item xs={12} sm={12} lg={12} md={12} style=
    {{color:"#ffff",textAlign:"center"}} justifycontent="center"> 
 <Typography variant="h4" style={{textAlign:"center",color:"#ffff"}} >
      <span style={{borderBottom:"3px solid #7dc5ff"}}>- Video -</span>
          </Typography>
    </Grid>
    </Box>
    <Box pt={10} pl={0.6} pr={0.6} clone order={{ xs: 7, sm: 7,md:7, lg: 7}}>
    <Grid  item xs={12} sm={12} lg={12} md={12} style=
    {{color:"#ffff",textAlign:"center",height:"500px"}}> 
  <iframe frameBorder='0' style={{width:"100%",height:"100%"}} title='video' src="https://www.youtube.com/embed/9KGMl4Y3cl0" allowFullScreen></iframe>
    </Grid>
    </Box>
    </Grid>
    
    </Container>  
  )
}

export default Aboutme




