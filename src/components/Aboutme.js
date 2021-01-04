import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import './Aboutme.css';
import Zoom from 'react-reveal/Zoom';
import Button from '@material-ui/core/Button';
import { TiTick } from 'react-icons/ti';
function Aboutme(){
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


<Box pt={10} clone order={{ xs: 1, sm: 1,md:1, lg: 1}}>
<Grid  item xs={12} sm={12} lg={12} md={12} style={{color: "#ffff", textAlign: 'center',overflowX:"hidden !important"}}>
<Typography variant="h4" gutterBottom id="gridstory">
  <span style={{borderBottom:"3px solid #7dc5ff"}}>- A glimpse into my life -</span>
      </Typography>
      <p>
      The story begins at the point when I graduated as an average student ,I always had questions in my psyche. Does a degree with greater grades,evaluations prove one's true potential, ability & knowledge? Do they mirror all the skills that an individual truly possess? Is education the only way to carry on with life or Is it the general public who indoctrinated people to suppress the dreams of the dreamers and tell them just to follow the herd?
You know, Even I was a piece of the same herd, since we can't expect change right away and sometimes we need to take the normal course followed by a U Turn to arrive at our end goal. So, I did the same with my life. The system which is created with all the benefits in leading a better life, to procure the bread & butter has additionally a dark side which will never have a special place to talk about. I consistently believed in myself that one day the skills, real life experiences & out of the box thinking, hard work will gauge more than my grades. And this is where I am right now. Wait did you lost the route? Let me guide you to my U Turn.
      </p>

      <p>
      Normal route to U Turn:
I needed to organize the obligations of acquiring for the family first and needed to do equity to my procured degree. Along these lines, I endeavored to get recruited by a couple of companies and finally settled with one. Opportunity plays a crucial role in everybody's life. People really won't know who you are unless provided with an opportunity. For my situation, it turned out well and I needed to showcase all my skills in every possible way. People started acknowledging my work, true skills and for them, I was completely a different person for their opinion about me with regards to work. Gradually, I began to invest most of my leisure time on the skills that I wanted to nurture and hobbies that were abandoned because to the past conditions.
Out of reliable hard work and nurturing the skills and hobbies which were never encouraged indirectly they've got inculcated in the work I do. This is my UTurn in life.
The grades are just like an entry ticket but the entire show runs with what we believe, our actual potential, skills, and vision.
      </p>
</Grid>
    
</Box>


</Grid>


</Container>    
    )
}

export default Aboutme

