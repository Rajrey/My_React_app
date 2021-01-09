import React, {useEffect}  from 'react';
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import './Work.css';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Typography from '@material-ui/core/Typography';
function Work() {
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

<Box pt={10} pr={4} pl={4} clone order={{ xs: 2, sm: 2 ,md:1, lg:1}} style={{color:"#ffff"}}>
<Grid item xs={12} sm={12} lg={6} md={6} style={{height:"500px"}} >
  <Fade left>

 
<b><span  style={{fontFamily: 'Goldman',fontSize:"25px",borderBottom:"3px solid #7dc5ff"}}>GEAR UP FOR SOME PROFESSIONAL TALK</span></b><br />
<Typography  variant="h6" component="h6"  style={{color: "#ffff",marginTop:"12px"}}>
  {/* <Zoom right cascade> */}
    <span style={{borderBottom:"3px solid #7dc5ff"}}> Let your work reflect your own invincible reality</span>

  {/* </Zoom> */}
      </Typography>
      <p>Market is heading too fast for the products to become accustomed to or go in vain.</p>
<p>Everyone needs attention that probably won't last long yet <mark>thoughtful creation will pave a whole new way to eternity</mark>.</p>
 <p>
   <mark>
   My long run goal is to contribute to the products that solve real world problems, and I endeavor to become a part of the transition.
   </mark>
  </p>
  <Button variant="outlined" onClick={ovalscroll1} color="secondary" style={{color:"#ffff",marginTop:"10px",zIndex:"3"}}>View Work History</Button> 
  </Fade>  
  </Grid>

</Box>
<Box pr={4} pl={4} clone order={{ xs: 1, sm: 1,md:2, lg: 2}} >
<Grid item xs={12} sm={12} lg={6} md={6}  style={{height:"500px"}} id="merobosvg">

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 303.386 275.098"
  style={{width:"100%",top:"0",left:"0",height:"100%"}} className="mevsrobo"
>
  <path
    d="M243.357 95.828c-3.216-2.767-14.9-4.959-12.698-4.863 8.862-5.78 16.21-20.401 7.34-29.173-.077 24.992-61.078-67.1-62.022-42.126-.133 5.848 3.256 10.28 2.6 1.515.786 4.376 7.801 18.654 4.5 6.282-2.192-13.326 2.038 9.321 8.192 8.517-1.183-3.747-5.314-14.517-.577-5.426 2.792 8.256 8.774 1.56 2.626-2.968 1.06-5.054 12.812 5.38 18.293 2.745 10.273-2.763-8.356-3.889-11.229-6.843-7.004-3.741 8.807 2.002 11.778 2.162 5.53 2.024 13.514-2.628 3.686-3.33-4.286-.658-23.204-6.555-10.524-4.138 6.55 1.432 21.216 6.318 23.304 2.61-5.041-3.732-20.553-6.524-20.12-7.37 7.958.572 25.418 4.24 24.51 10.818-12.605 3.033-25.609 10.055-31.41 22.091.956 6.191 17.414 16.884 15.229 11.013-3.172-4.238-7.811-13.474-1.04-4.324 1.004 4.24 12.61 16.737 7.841 6.055-3.061-4.268-11.643-20.584-3.688-8.73.901 6.073 12.925 14.637 6.476 3.917-2.524-4.579-9.485-17.357-2.494-6.775 2.049 4.406 11.995 17.874 7.738 5.322-2.246-3.622-6.937-12.978-1.348-4.625.808 3.921 9.248 15.331 6.854 4.572-1.337-3.74-4.741-12.6-.24-4.566 1.493 3.57 4.64 20.164 7.114 9.522.105-5.655-6.06-15.796-5.818-17.37 8.453 9.602 7.9 23.352 6.254 35.225 5.276-.563 2.854-15.797 3.085-21.874-.385-5.027-4.428-18.775-.392-7.419 3.324 10.65 2.199 21.993.776 32.864 5.555-5.97 3.7-18.54 3.188-27.092-1-4.33-1.395-13.356.512-3.734 1.966 5.955.346 20.7 2.565 21.24 4.312-7.299.327-23.056 1.257-25.891 3.087 5.492-.528 21.796 3.827 20.625 1.523-9.318 1.06-19.021-1.816-28.04 5.86 7.21 1.425 25.283 5.617 27.743 3.49-7.361-.947-22.06.235-25.66 3.266 4.094.156 18.398 4.273 17.141 2.35-13.479-3.199-27.792-13.46-36.704-6.533-4.798-9.723-16.087-20.795-13.235-6.778 1.064-27.205 3.058-26.186-1.662 10.516 3.096 20.803-3.886 31.281-.213 10.897 4.385 17.216 15.475 26.13 22.844 10.543 15.729 6.203 35.636-.015 52.11-1.095 8.13-.958 18.27-3.057 24.787-1.716 5.33-3.886 10.315-18.152-7.57zm-16.859-11.759c2.132-3.725.282-19.616 2.975-15.78-1.098 4.465 3.863 13.91 6.308 5.348.374 5.649-7.317 6.13-9.283 10.432zm14.269-61.51c-5.045-6.565-.54-2.84 2.83.73l-1.021-.197zm4.042-.116c-3.07-6.194 1.778-2.922 0 0zm4.083-.143c-.739-5.092-5.996-14.497.28-5.177.373 1.223 2.281 5.449-.28 5.177zm-57.936-11.86c-6.056-.966-6.52-10.974-2.137-1.914.721.62 7.691 4.463 2.137 1.913zm4.855-3.039c-4.89-1.124-2.372-7.828-.356-1.105.687-.878 4.111 4.259.356 1.105z"
    className="robomeet-1"
    fill="#fff"
  />
  <g stroke="#fff" strokeWidth={4.306}>
    <path
      d="M2684.092-132.486c-40.152 45.454-68.94 110.606-102.274 216.668-33.334 106.062-71.212 253.029-91.666 336.362-20.455 83.334-23.485 103.03-11.363 126.517 12.122 23.486 39.393 50.757 53.787 74.242 14.394 23.484 15.909 43.18-11.365 104.547-27.274 61.366-83.331 164.391-111.362 226.513-28.03 62.121-28.03 83.333-18.182 105.304 9.849 21.97 29.545 44.697 54.545 60.606 25 15.909 55.304 25 68.94 49.241 13.636 24.242 10.606 63.636 11.363 90.91.758 27.273 5.303 42.424 17.04 57.887 11.737 15.462 29.172 29.992 35.99 51.961 6.819 21.97 2.273 50.757 23.486 85.607s68.181 75.758 97.727 125c29.545 49.241 41.666 106.817 84.849 153.788 43.182 46.97 117.424 83.333 198.885 66.99 81.462-16.343 170.12-85.375 277.708-143.714 107.588-58.338 234.05-105.956 297.288-129.768 63.24-23.811 63.24-23.811 57.935-88.973-5.303-65.162-15.908-195.447-77.699-294.552-61.79-99.106-174.771-167.02-214.166-306.42-39.395-139.4-5.204-350.27-27.502-466.31-22.298-116.041-101.086-137.253-156.111-183.588-55.025-46.334-87.4-120.332-89.672-191.545-2.273-71.212 25-140.91-7.574-178.03-32.575-37.12-125.001-41.666-196.97-31.06-71.97 10.606-123.485 36.363-163.637 81.817z"
      transform="matrix(.0425 .00254 -.00238 .04189 78.988 32.712)"
      className="robomeet-2"
      fill="none"
      strokeWidth={24.849}
    />
    <path
      d="M2499.243 497.06c6.818-35.607 35.606-76.516 65.91-106.818 30.302-30.303 62.12-50 89.393-60.606 27.272-10.606 50-12.12 84.847 1.515 34.847 13.636 81.82 42.425 108.334 62.122 26.515 19.696 32.576 30.302 21.212 31.818-11.363 1.515-40.15-6.06-70.454-12.121-30.303-6.06-62.12-10.606-93.939-6.818-31.818 3.787-63.636 15.908-86.364 34.848-22.727 18.94-36.363 44.696-46.97 68.181-10.606 23.485-18.181 44.697-25.757 58.333-7.576 13.637-15.15 19.697-26.516 7.574-11.366-12.123-26.515-42.422-19.696-78.028z"
      transform="matrix(.0425 .00254 -.00238 .04189 78.988 32.712)"
      className="robomeet-3"
      fill="none"
      strokeWidth={24.849}
    />
    <path
      d="M2876.47 560.118c-17.156-5.883-35.19-12.066-54.114-18.043-18.924-5.977-40.494-12.35-61.817-15.29-21.322-2.942-41.924-2.463-56.378 3.915-14.454 6.377-21.807 18.632-9.796 28.682 12.011 10.05 43.38 17.893 74.018 25.98 30.637 8.089 60.54 16.423 76.47 20.834 15.932 4.412 17.893 4.902 17.158 9.067-.735 4.164-4.167 12.01-17.159 22.306-12.992 10.295-35.537 23.038-53.185 32.107-17.647 9.069-30.391 14.46-40.686 15.441-10.295.98-18.137-2.45-25.246-11.03-7.108-8.578-13.48-22.303-16.176-38.48-2.696-16.176-1.716-34.804-6.862-47.548-5.147-12.745-16.422-19.608-27.697-26.47"
      transform="matrix(.0425 .00254 -.00238 .04189 78.988 32.712)"
      className="robomeet-4"
      fill="none"
      strokeWidth={24.849}
    />
    <path
      d="M2513.235 1111.588c-14.215-1.47-28.43-2.94-32.107-8.089-3.676-5.148 3.187-13.97 8.579-18.872 5.392-4.902 9.314-5.882 20.095-4.412 10.782 1.47 28.434 5.393 45.59 10.785 17.157 5.392 33.824 12.255 44.608 18.382 10.784 6.128 15.686 11.52 20.588 16.912"
      transform="matrix(.0425 .00254 -.00238 .04189 78.988 32.712)"
      className="robomeet-5"
      fill="none"
      strokeWidth={24.849}
    />
    <path
      d="M2658.823 1142.47c9.315-11.275 18.629-22.55 27.207-40.93 8.577-18.382 16.421-43.874 9.804-64.707-6.617-20.832-27.697-37.01-48.775-53.186"
      transform="matrix(.0425 .00254 -.00238 .04189 78.988 32.712)"
      className="robomeet-6"
      fill="none"
      strokeWidth={24.849}
    />
    <path
      d="M2553.677 1320.166c-3.676-14.951 3.677-22.794 19.851-20.344 16.175 2.451 41.178 15.198 66.914 26.227 25.735 11.03 52.206 20.343 70.343 27.451 18.137 7.108 27.94 12.01 34.313 15.931 6.372 3.922 9.314 6.863 10.05 11.764.735 4.902-.736 11.765-12.012 21.815s-32.35 23.283-54.165 35.048c-21.814 11.766-44.362 22.06-60.05 21.079-15.686-.981-24.51-13.235-30.357-28.214-5.847-14.979-8.858-33.551-17.682-53.649-8.823-20.098-23.53-42.157-27.205-57.108z"
      transform="matrix(.0425 .00254 -.00238 .04189 78.988 32.712)"
      className="robomeet-7"
      fill="none"
      strokeWidth={24.849}
    />
  </g>
  <g stroke="#fff">
    <path
      d="M204.073 133.92l3.82-14.549 47.119-16.014-2.264 12.451-30.563 21.508-14.716 28.299-32.738 37.857z"
      className="robomeet-8"
      fill="none"
      strokeWidth={1.29986024}
    />
    <path
      d="M252.722 115.779l12.23 17.863 20.811 23.945 16.947 68.278-8.423 24.958"
      className="robomeet-9"
      fill="none"
      strokeWidth={1.29986024}
    />
    <path
      d="M174.731 203.472h0l4.44 40.249 4.527 23.77h0l1.132-20.375 28.3-57.73 19.243-18.111-9.056-11.32-1.132-22.64"
      className="robomeet-10"
      fill="none"
      strokeWidth={1.29986024}
    />
    <path
      d="M285.763 157.587s0 0 0 0z"
      className="robomeet-11"
      fill="none"
      strokeWidth={0.26485088}
    />
  </g>
  <path
    d="M247.603 203.236l7.147 32.482 8.445-2.598-12.993 5.197-9.095 15.591"
    className="robomeet-12"
    fill="none"
    stroke="#fff"
    strokeWidth={1.065}
  />
  <path
    d="M201.606 46.331l-2.684-15.236 11.62 4.101-1.367 7.976z"
    className="robomeet-13"
    fill="#f6f6f6"
  />
  <path
    d="M176.736 8.942c2.253 2.321 8.988 7.445 13.026 9.326 4.038 1.881 5.378.52 7.188-.051 1.81-.57 4.088-.349 4.088-.349s-2.279-.221-5.49-1.35c-3.21-1.129-7.353-3.165-10.276-4.805-2.924-1.64-4.628-2.885-6.594-3.748-1.966-.863-4.195-1.344-1.942.977z"
    className="robomeet-14"
    fill="#fff"
  />
  <path
    d="M193.44 1.69c2.253 2.321 8.988 7.445 13.026 9.326 4.037 1.881 5.378.52 7.188-.051 1.81-.57 4.087-.349 4.087-.349s-2.278-.221-5.489-1.35c-3.21-1.129-7.353-3.165-10.277-4.805-2.923-1.64-4.627-2.885-6.593-3.748-1.967-.863-4.195-1.344-1.942.977z"
    className="robomeet-15"
    fill="#fff"
  />
  <path
    d="M36.629 271.165c-4.323-12.158-6.25-25.04-9.6-37.394-8.602-10.503-.065 6.47 1.203 10.848-15.89-6.342-13.086-66.661-3.63-89.155 3.758-7.829 40.81-48.331 64.182-8.915 22.905 38.627 21.504 65.476 13.247 47.299-25.066-5.416-9.05-6.227-19.701 22.417 6.142-1.383 8.7-16.833 10.587-24.316 2.332-12.498 2.644 5.268.822 8.963.363 7.157-7.815 14.929-5.951 20.53 5.149-7.357 7.375-16.25 10.48-24.516 1.241 3.037-2.723 16.095-5.44 22.371-4.968 4.073.087 8.111 1.23 1.804 3.679-4.775 5.3-18.674 8.61-18.845-.06 8.707-2.99 16.884-.974 13.532 4.07-6.198-28.828 6.331-27.404-4.291.597-9.916-14.156-.797-16.969 7.861.05 8.386 3.125 19.716 1.07 26.442-2.016-10.472-19.527-31.321-16.038-22.526.631 10.488 1.582 20.964 2.408 31.43-2.261 4.613-12.07-.685-7.792 7.406.868 3.687 3.775 20.501-.34 9.055zm-.846-9.414c-6.063-7.68 9.303-5.802 7.135-6.954-11.849 4.207-8.593-11.299-11.142-18.383-.882-5.748-2.227-11.488-.667-17.25 1.223-7.334-1.865 5.635-2.114-3.317-.272-9.581 1.077-21.193 5.393-28.996 3.49 8.628 28.535-11.465 34.464-1.532 9.332 12.618 6.361 28.894 4.702 43.329.214 4.969 18.829-3.224 23.306-9.144 2.645-5.851 2.086-7.617-.52-.522.203 5.907-9.113 9.724-5.938 2.257 2.67-4.094 5.81-13.719 1.37-4.246-.13 6.058-8.709 7.479-5.467.75 2.913-4.198 6.992-16.133 5.934-17.18-2.813 5.36-4.248 17.886-10.064 17.235-4.04-20 29.986 3.564 31.055 24.775.456 4.684-.532 13.951.677 16.327 3.377-18.936 5.612-74.515-13.306-102.852-24.22-46.704-49.337-58.043-47.618-90.096 1.866-7.423 23.188-6.374 24.768-12.32 12.342-46.445 11.627-42.264-24.97-8.506-16.014 14.665-36.85.925-35.658 6.868-2.272 3.884 16.202 18.171 17.89 31.254 2.404 18.643-11.568 45.23-13.654 53.065-8.895 24.041-31.743-32.365-13.62 103.315 1.363 4.164 23.116 13.628 18.66 3.415-1.364-5.352-6.596-13.372-4.754-17.512 2.056 4.685 8.033 6.753 7.73 12.373 1.99 9.57 3.876 19.265 7.05 28.508-.083-1.57-.4-3.113-.642-4.661zm38.758-29.464c2.158-10.874 1.046 10.074 0 0zM26.96 203.35c-2.325-6.938.815-18.277 6.864-21.042-2.397 6.32-3.63 17.596-6.865 21.042zm4.422-16.287c1.296-5.445-5.583 8.125-4.238 11.217.665 6.263 3.273-11.068 4.238-11.217zm10.24 3.394c-22.21-21.534 40.242-14.185 15.882-.958-4.955 1.687-10.74 1.705-15.883.958zm12.751-49.409c61.402 83.284 30.701 41.642 0 0zm3.081 4.754c59.348 80.115 29.674 40.057 0 0zm11.346-5.504c-5.829-3.296-11.634-6.77-17.84-9.289 2.912 3.772 14.916 9.196 12.533 11.934-5.687-4.394-15.19-6.545-20.02-9.07.746-3.93 5.876.21 2.334-4.608-.666-9.494 13.1 4.614 11.177.491-5.564-2.815-11.724-18.288-1.727-10.12 8.087 5.71.04-1.999-2.178-5.67-6.057-9.405 6.616 3.73 8.992 6.456 21.224 23.042 9.249 10.179-8.703.418 3.493 8.224 31.858 24.532 15.432 19.458zm-6.518 1.12c-1.28-1.832-1.393-.31 0 0zm-1.582-1.187c-1.28-1.831-1.393-.31 0 0zm7.233-3.047c-5.816-5.545-14.289-13.54-17.405-18.657-.899 5.17 11.532 11.512 8.2 13.712-4.276-1.114-15.62-10.148-9.772-.152 2.513 3.228-8.773.04-.983 2.422 4.379.56 15.864 7.53 6.341.734-4.807-2.373-9.058-8.643-.635-4.26 5.21 1.874 13.834 7.815 16.117 7.997l-.829-.817-1.034-.98zm-3.289-12.521c-3.579-3.868-13.052-13.147-4.782-4.128 3.814 3.592 9.842 11.704 12.467 12.034-2.533-2.662-5.11-5.283-7.685-7.906zm-29.605-8.648c5.257 6.618-5.424 1.684 0 0zm5.234 10.427c-.27-5.658-9.429-12.73-1.816-16.781 3.866-3.992 12.746-4.898 8.107 2.682-1.75 4.143-3.148 12.357-6.291 14.099zm2.545-6.623c2.5-4.94 6.693-17.3-3.007-9.749-7.1 2.948.118 9.055.79 13.935 1.11.878 1.48-3.754 2.217-4.186zm-.517 133.997c-.405-13.252-6.703-13.45-6.614-.29 1.94 1.051 4.595 1.216 6.614.29zm-7.42-11.517c-.561.183.322 4.353 0 0zm23.72.205c-.678-.46.49 3.251 0 0zM34.429 231.13c1.267-12.521 1.381-24.285-1.151-18.649-1.168 6.695-2.645 13.437-.942 20.158.434 4.376 1.683 11.438 1.737 2.582.114-1.364.233-2.727.356-4.09zm23.775 6.846c-.678-.68.342 2.21 0 0zm-15.816-.79c-.678-.68.34 2.21 0 0zm-7.115-2.2c-.617.025.364 3.5 0 0zm6.71-2.57c-.685-.128.416 2.642 0 0zm-6.318-2.348c-.677-.68.342 2.21 0 0zm5.934-2.595c-.616.025.365 3.5 0 0zm-.389-5.338c-.562.182.322 4.353 0 0zm-.49-5.735c-1.574-6.554.613 7.75 0 0zm-7.48-15.856c2.45-3.545 1.709-17.277-.305-7.58-1.358 5.703-4.31 19.337-2.535 21.02.918-4.485 1.848-8.97 2.84-13.44zm-1.537 13.682c-.686-.128.415 2.643 0 0z"
    className="robomeet-16"
    fill="#fff"
  />
  <g strokeWidth={3.417}>
    <path
      d="M94.278 23.844c2.204 1.649 4.084 4.278 6.545 8.683 2.46 4.405 5.5 10.586 7.177 14.1 1.678 3.514 1.995 4.362 1.673 5.517-.322 1.156-1.282 2.62-1.705 3.795-.423 1.177-.308 2.066 1.47 4.541 1.778 2.475 5.22 6.536 7.04 9.037 1.818 2.502 2.014 3.445 1.779 4.512-.235 1.067-.9 2.258-1.864 3.196-.964.938-2.227 1.621-2.61 2.824-.381 1.203.117 2.926.335 4.145.218 1.219.156 1.934-.223 2.73-.379.795-1.02 1.601-1.12 2.64-.1 1.04.368 2.277-.253 4.021-.621 1.744-2.33 3.996-3.189 6.456-.858 2.461-.865 5.131-2.35 7.617-1.486 2.486-4.45 4.787-7.28 5.866-2.83 1.08-5.529.938-10.847-.661-5.319-1.6-13.258-4.656-18.06-6.643s-6.468-2.905-6.833-5.85c-.366-2.943.568-7.913.188-14.646-.38-6.734-2.075-15.23-1.611-21.788.464-6.558 3.086-11.176 6.05-14.32 2.964-3.143 6.269-4.813 8.286-7.38 2.018-2.567 2.773-6.154 2.217-9.339-.556-3.185-2.412-6.03-1.307-7.98 1.105-1.95 5.17-3.006 8.466-3.199 3.296-.193 5.823.476 8.026 2.126z"
      className="robomeet-17"
      fill="none"
      stroke="#fff"
      strokeWidth={0.8948935999999998}
    />
    <path
      d="M108.303 50.111c-.632-1.52-2.289-3.071-3.915-4.138-1.626-1.067-3.222-1.648-4.532-1.868-1.31-.22-2.333-.077-3.756.85-1.422.928-3.244 2.64-4.24 3.76-.997 1.12-1.168 1.648-.65 1.61.52-.037 1.729-.64 3.02-1.188 1.29-.55 2.662-1.045 4.11-1.17 1.45-.126 2.975.12 4.16.75 1.185.633 2.028 1.651 2.716 2.597.689.946 1.22 1.818 1.683 2.354.463.536.855.736 1.249.092.393-.643.786-2.13.155-3.649z"
      className="robomeet-18"
      fill="none"
      stroke="#fff"
      strokeWidth={0.8948935999999998}
    />
    <path
      d="M92.123 56.395c.708-.42 1.452-.861 2.238-1.301.785-.44 1.685-.923 2.605-1.25.92-.328 1.84-.497 2.542-.347.7.15 1.14.627.7 1.184-.441.558-1.763 1.196-3.05 1.838-1.286.642-2.538 1.288-3.205 1.631-.667.344-.75.383-.679.562.071.178.296.495.968.833.673.337 1.792.695 2.66.935.868.24 1.484.362 1.95.31.467-.05.784-.275 1.02-.722.237-.447.393-1.116.364-1.86-.03-.743-.245-1.562-.134-2.176.111-.613.549-1.022.986-1.431"
      className="robomeet-19"
      fill="none"
      stroke="#fff"
      strokeWidth={0.8948935999999998}
    />
    <path
      d="M113.353 77.547c.618-.197 1.236-.393 1.352-.656.116-.263-.27-.591-.556-.76-.284-.168-.468-.175-.933-.01-.466.165-1.214.502-1.927.9-.712.398-1.39.857-1.812 1.228-.423.372-.59.657-.759.942"
      className="robomeet-20"
      fill="none"
      stroke="#fff"
      strokeWidth={0.8948935999999998}
    />
    <path
      d="M113.48 87.188c.026-.698-.373-.979-1.07-.72-.695.258-1.689 1.055-2.73 1.782-1.042.728-2.132 1.386-2.873 1.87-.74.483-1.13.79-1.377 1.024-.247.233-.35.39-.338.615.012.225.141.516.735.859.594.342 1.652.736 2.73 1.057 1.078.322 2.175.571 2.863.383.688-.189.967-.815 1.089-1.534.121-.72.083-1.573.29-2.547.207-.975.656-2.09.682-2.789z"
      className="robomeet-21"
      fill="none"
      stroke="#fff"
      strokeWidth={0.8948935999999998}
    />
  </g>
  <path
    d="M17.467 41.28c-2.747-5.837-2.403-15.107 1.03-21.287s9.957-9.27 20.514-10.986c10.557-1.717 25.15-2.06 34.505-.944 9.355 1.115 13.475 3.69 15.621 4.978 2.146 1.287 2.318 1.287 2.318 1.287s-.172 0-2.664.602c-2.492.601-7.293 1.802-13.387 6.007-6.094 4.206-13.476 11.416-18.54 16.308-5.064 4.893-7.81 7.468-11.587 9.528-3.777 2.06-8.583 3.605-13.905 3.176-5.322-.43-11.158-2.833-13.905-8.67z"
    className="robomeet-22"
    fill="#fff"
  />
  <path
    d="M14.81 45.117C8.628 48.027-.21 54.774.004 65.187c.215 10.412 9.485 24.488 16.833 33.57 7.349 9.083 12.776 13.17 16.059 14.156 3.283.984 4.423-1.134 2.396-3.692-2.026-2.559-7.22-5.56-12.306-10.836C17.9 93.11 12.922 85.555 9.489 79.032 6.055 72.51 4.167 67.016 5.626 61.866c1.46-5.15 6.266-9.957 10.56-12.867 4.294-2.91 8.075-3.923 8.203-4.893.128-.97-3.397-1.899-9.579 1.011z"
    className="robomeet-23"
    fill="#fff"
  />
  <path
    d="M28.395 54.659c-3.915 1.843-9.513 6.116-9.377 12.71.136 6.595 6.007 15.51 10.66 21.262 4.655 5.752 8.092 8.341 10.172 8.965 2.079.624 2.8-.718 1.517-2.338s-4.573-3.52-7.794-6.863c-3.22-3.342-6.374-8.125-8.548-12.257-2.175-4.131-3.37-7.61-2.446-10.872.924-3.262 3.968-6.306 6.688-8.149 2.719-1.843 5.114-2.484 5.195-3.099.081-.615-2.152-1.202-6.067.64z"
    className="robomeet-24"
    fill="#fff"
  />
  <path
    className="robomeet-25"
    fill="#fff"
    d="M69.228 96.027h19.055v2.575H69.228z"
  />
  <path
    className="robomeet-26"
    fill="#fff"
    d="M76.228 100.754h15.965v4.12H76.228z"
  />
  <path
    d="M-243.452 111.907c4.732-5.915 15.487-11.938 26.565-11.293 11.078.645 22.48 7.96 22.802 16.563.323 8.604-10.432 18.5-20.866 20.758-10.433 2.259-20.543-3.119-26.243-8.712-5.7-5.593-6.991-11.4-2.258-17.316z"
    transform="matrix(.70781 0 0 .68948 207.981 79.324)"
    className="robomeet-27"
    fill="#fefefe"
    stroke="#fff"
    strokeWidth={0.265}
  />
  <g
    aria-label="RHE"
    style={{
      lineHeight: 1.25,
      InkscapeFontSpecification: "'Copperplate Gothic Bold, '",
    }}
    fontWeight={400}
    fontSize={10.583}
    fontFamily="Copperplate Gothic Bold"
    letterSpacing={0}
    wordSpacing={0}
    strokeWidth={0.265}
  >
    <path
      d="M43.284 161.517v1.905q0 .126.059.198.063.067.21.105v.134h-1.791v-.134q.151-.042.21-.11.059-.067.059-.193v-4.86q0-.13-.06-.198-.058-.067-.21-.11v-.134h3.591q.656 0 1.039.076.386.076.672.265.333.218.496.593.156.361.156.773 0 1.404-1.56 1.644l1.114 1.585q.295.416.43.538.138.118.336.13v.135h-2.077v-.134q.214-.034.214-.152 0-.075-.198-.365l-1.16-1.69zm0-.946h1.934q.428 0 .605-.025t.324-.105q.32-.172.32-.622t-.32-.622q-.152-.084-.324-.106-.168-.025-.605-.025h-1.934z"
      className="robomeet-28"
    />
    <path
      d="M53.555 161.353h-3.309v2.069q0 .126.059.198.063.067.21.105v.134h-1.79v-.134q.15-.042.21-.11.058-.067.058-.193v-4.864q0-.127-.059-.194t-.21-.11v-.134h1.791v.135q-.151.038-.21.11-.059.066-.059.193v1.85h3.309v-1.85q0-.127-.059-.194-.059-.071-.21-.11v-.134h1.79v.135q-.15.042-.21.11-.058.066-.058.193v4.864q0 .126.059.193.058.068.21.11v.134h-1.791v-.134q.147-.038.206-.105.063-.072.063-.198z"
      className="robomeet-29"
    />
    <path
      d="M57.629 161.34v1.573h3.691q.126 0 .194-.059.067-.058.109-.21h.135v1.484h-.135q-.042-.151-.11-.21-.067-.059-.193-.059h-5.213v-.134q.151-.042.21-.11.059-.067.059-.197v-4.856q0-.13-.059-.198-.059-.067-.21-.11v-.134h5.112q.127 0 .194-.059.067-.063.11-.214h.134v1.484h-.135q-.042-.147-.11-.206-.066-.059-.193-.059h-3.59v1.362h2.33q.125 0 .193-.059.067-.058.109-.21h.134v1.45h-.134q-.042-.146-.11-.205-.067-.063-.193-.063z"
      className="robomeet-30"
    />
  </g>
  <path
    d="M59.75 67.087c-2.277 2.732-3.415 6.384-3.093 9.926.322 3.541 2.1 6.929 4.832 9.205 2.732 2.277 6.385 3.415 9.926 3.093 3.542-.322 6.93-2.1 9.206-4.832 2.277-2.732 3.415-6.384 3.093-9.926-.322-3.542-2.1-6.929-4.832-9.206-2.732-2.276-6.385-3.414-9.926-3.092-3.542.322-6.93 2.1-9.206 4.832z"
    className="robomeet-31"
    fill="#fff"
  />
</svg>


  </Grid>
    
</Box>
</Grid>



<Grid container style={{overflow:"hidden !important"}}>
<Box pt={12} pl={4} pr={4} clone order={{ xs: 1, sm: 1,md:1, lg: 1}}>
<Grid  item xs={12} sm={12} lg={12} md={12} style={{color: "#ffff", textAlign: 'left'}}>
<Typography  variant="h4" component="h4"  style={{textAlign: 'center'}}>
  {/* <Zoom right cascade> */}
    <span style={{borderBottom:"3px solid #7dc5ff"}}>- Work -</span>

  {/* </Zoom> */}
      </Typography>
      <Fade left>
          

      <p>
        I am a self-instructed senior software developer well-versed in creating software applications with keen interest in projects that 
require logical, conceptual, creative, analytical and question thinking along with sharp comprehension of methods geared towards optimum user experience
and client relations. 
      </p>
      <p>
      Perceived by heads as diligent employee, exceptionally gifted, interesting and reliable 
resource of the organization. A person with a passion for technology, innovation, creativity and vision towards life.
      </p>
       <p>
         I take a 
genuinely interdisciplinary way to deal with life. Interconnected by one theme. The mankind has an ability to adapt, evolve and possess numerous set of skills.
My main rationale is to excel in my each known 
skill and have a vast knowledge on different aspects of life and have a flavour of those diverse range of skills with added experiences.
        </p>
        <p>
         I was into multiple roles in my career and acquired a lot of insights and a ton of experience in the business world.
        I've evolved in each phase of my life to get to where I am today. 
   </p>
   <p>
   Me being a part of any engagement , I ensure to develop digital products of high aesthetic and technical quality with a thoughtful approach by using a wide range of methods to make ideas, design, innovation, implementation come to life with extended support and empathy towards the end-users.
   </p>
   </Fade>
</Grid>
    
</Box>

<Box pt={10} pl={4} pr={4} clone order={{ xs: 2, sm: 2,md:2, lg: 2}}>
<Grid  item xs={12} sm={12} lg={12} md={12} style={{color: "#ffff", textAlign: 'left'}}>
<Typography  variant="h4" component="h4" style={{textAlign: 'center'}}>
  {/* <Zoom right cascade> */}
    <span style={{borderBottom:"3px solid #7dc5ff"}}>- Parameter Assessment -</span>

  {/* </Zoom> */}
      </Typography>
      <Zoom left>

      
      <mark style={{fontSize:"large"}}>Discipline</mark>
      <p>
Self-disciplined at work-place 
Ability to complete my deadlines in a timely manner
Positive attitude
Even tempered
        </p>
        <mark style={{fontSize:"large"}}>Focus</mark>
        <p>
I like to remain fully engaged in what I do and will not let my personal issues affect the work
        </p>
        <mark style={{fontSize:"large"}}>
          Deliverable Quality
          </mark>
        <p>
          Quality in terms of efforts, meeting expectations, effectiveness, empathy towards the need, 
constant churning to make it even better and self evaluation by considering all the key points 
with the acceptance of the feedback, learning from the past.
          </p>
          <mark style={{fontSize:"large"}}>
          Ability to prioritize
          </mark>
          <p>
          Ability to equally divide time on multiple tasks, knowing which carries the highest value
and check them out from my list in a linear or parallel order to reach the dead-line whithin the given period of time.
          </p>
          <mark style={{fontSize:"large"}}>
          Creative
          </mark>
          <p>
          I like being creative and unique, and I do whatever it takes not to get influenced with great ideas around the globe in order to keep 
my vision clear with no collisions.
          </p>
          <mark style={{fontSize:"large"}}>
Effective Communication
          </mark>
          <p> 
          Asking questions, focused listening, addressing the client needs, higher level correspondence, developing trust and rapport, 
empathy towards end-users, exchanging thoughts and ideas and to be precise as well as detail oriented when needed.
          </p>
          <mark style={{fontSize:"large"}}>Learning</mark>
          <p>
Learning is a belief-system where a student is taught to feed on information and use it in the right way to solve a problem
using all the experience gained in any subject which is a contionous cycle without an end. <br />
      </p>
      <p>
      Learning new things has always created an excitement in me, and the ability to learn, absorb, mould ourselves 
to the business needs played a major role for my flexible, committed and focused nature towards my profession.
      </p>
      <mark style={{fontSize:"large"}}>
          Multi-Tasking
          </mark>
          <p> 
          Continuous partial attention on parallel works to increase productivity 
and handle each and every task with less stress by utilizing the time, prioritizing, and thinking.
          </p>
      <mark style={{fontSize:"large"}}>
          Commitment
          </mark>
          <p> 
          Commitment towards profession which is a pre-defined me when it comes to work
          </p>
          <mark style={{fontSize:"large"}}>
          Responsibility
          </mark>
          <p> 
          Matured behaviour in handling responsibilities
          </p>
          <mark style={{fontSize:"large"}}>
          Contribution
          </mark>
          <p> 
          Willing to do whatever it takes to help for any project need
          </p>
          <mark style={{fontSize:"large"}}>
          Efficiency
          </mark>
          <p> 
          Efficient enough to learn, grab oppurtunities. Efficient enough to do things faster within less time
          </p>
          </Zoom>
</Grid>
    
</Box>
<Box pt={5} clone order={{ xs: 3, sm: 3,md:3, lg: 3}} style={{color: "#ffff"}}>
<Grid  item xs={12} sm={12} lg={12} md={12}>
<Typography  variant="h4" component="h4" style={{textAlign: 'center'}}>
  {/* <Zoom right cascade> */}
    <span style={{borderBottom:"3px solid #7dc5ff"}}>- My Roles -</span>

  {/* </Zoom> */}
      </Typography>
      
</Grid>

</Box>
</Grid>

<Grid container style={{overflow:"hidden !important"}}>
<Box pt={8} pl={4} pr={4} clone order={{ xs: 1, sm: 1,md:1, lg: 1}}>
<Grid  item xs={12} sm={12} lg={12} md={12} >
<div class="timeline-container" style={{overflow:"hidden !important"}}>
	<ul>
		<li>
      
			<div style={{overflow:"hidden !important"}}>
      <Fade left>
				<h2>Operations/Business Analyst, Part of Business Development team</h2>
				<small>2017</small>
				<p>
           Operations- Transactional and configuration related operations in Pensions management domain. System analysis with proper process adherence, client correspondence and interaction.
          </p>
          <p>
          Business Analysis- Requirements gathering, system specifications, configurations, and change in business workflows .Proficiency in trouble shooting of issues right from business flows to technological aspects.
          </p>
          <p>
            Business Development- Researching organisations and individuals to identify new leads and potential markets for the organization to spread it's services
            </p>
            </Fade>
          	</div>
           
		</li>
		
		<li>
      
			<div style={{overflow:"hidden !important"}}>
      <Fade right>
				<h2>Business Analyst, Operations Manager, UI/UX, Frontend Developer</h2>
				<small>2018</small>
				<p>
       Business Analysis- Customization, configurations of agency management system in Insurance domain. Optimization of business workflows.
        </p>
        <p>
          Operations Management- Responsibility to solve queries if the team has any of them, higher level interaction and correspondence with clients.
        </p>
        <p>
        UI/UX, Frontend Developer- UI/UX development and minimal part in frontend development using libraries and frameworks.

        </p>
        </Fade>
			</div>
      
		</li>
		
		<li>
      
			<div style={{overflow:"hidden !important"}}>
      <Fade left>
				<h2>Frontend Developer,Business Analyst</h2>
				<small>2019</small>
				<p>
      Frontend Development- Liase between frontend and backend, business teams. Expertise in using top notch libraries and frameworks to develop software applications. 
        </p>
        <p>
        Self management during independent and0 transitional projects(Successfull working in both team & self directed projects).
        </p>
        <p>
          Knowledge on full-stack development and implementation of the entire end-to-end application. 
        </p>
        <p>
          Business Analyst- System architecture design, assisting with process improvements, workflow changes, requirements gathering, higher level interaction and correspondence with clients 
        </p>
        </Fade>
			</div>
      
		</li>
		
		<li>
      
			<div>
      <Fade right>
				<h2>Senior Software Developer</h2>
				<small>2020</small>
				<p>
        Supervised and lead a team of junior software developers during the overall development.
        Directed conceptual, strategic, and tactical creation of robust applications.
        </p>
        <p>
          Involvement with stakeholders and business team on architectural discussions of portals development.
        </p>
        <p>
          
Thorough testing of the software, simultaneous bug fixes. Proficient in various platforms and languages.
        </p>
        <p>
          Progressive web applications development, mobile application development. Worked on multiple projects simultaneously and participated right from design , implementation, delivery and support.
        </p>
        </Fade>
			</div>
  
		</li>
		
	</ul>
</div>
  
    
  </Grid>

</Box>
<Box pt={9} pl={4} pr={4} clone order={{ xs: 2, sm: 2,md:2, lg: 2}} style={{color: "#ffff",textAlign: 'left'}}>
<Grid  item xs={12} sm={12} lg={6} md={6} > 
<Typography  variant="h5" component="h5" gutterBottom>
  {/* <Zoom right cascade> */}
    <span style={{borderBottom:"3px solid #7dc5ff"}}>- Equipped with diverse and promising technical skill set -</span>

  {/* </Zoom> */}
      </Typography>
      <Fade left>
      <Grid container style={{marginTop:"20px"}}>
        <Grid item xs={12} sm={12} lg={3} md={3}>
        <mark style={{fontSize:"large"}}>Languages</mark>
      <p>
      - HTML<br/>
      - CSS<br/>
      - Javascript<br/>
      - Typescript<br/>
      - Dart<br/>
      - Python<br/>
      - JQuery<br/>
      - SCSS<br/>
      - JSX<br/>
      - Threejs
        </p>
        </Grid>
        <Grid item xs={12} sm={12} lg={5} md={5}>
        <mark style={{fontSize:"large"}}>Frameworks</mark>
      <p>
      Angular- Frontend framework<br/>
      Flask- Backend framework<br/>
      JQuery- Javascript framework<br/>
      Flutter- Android app<br />
      Bootstrap<br />
      Materialize CSS
        </p>
        </Grid>
        <Grid item xs={12} sm={12} lg={4} md={4}>
        <mark style={{fontSize:"large"}}>Libraries</mark>
      <p>
      - Angular Material<br/>
      - Reactjs<br/>
      - Material UI core for react<br/>
      - Material for Flutter app<br/>
      - Bootstrap as library<br/>
      
        </p>
        </Grid>
        <Grid item xs={12} sm={12} lg={8} md={8}>
        <mark style={{fontSize:"large"}}>Tools,Systems</mark>
      <p>
      - Inkscape for 2D Vector Illustrations<br/>
      - Blender for 3D(Beginner)<br/>
      - Vectary for 3D(Beginner)<br/>
      - Flare animation tool for Flutter<br/>
      - Formstack<br/>
      - Salesforce<br/>
      - Zoho CRM<br/>
      - Applied Epic- Insurance agency management system<br/>
      - Gridbox for Bootstrap<br/>
      - All the animation related tools in public domain<br/>
      - SSP Pure<br/>
      - CPAS(Conduent pensions administrative system)<br/>
      - BIC Portal(Brac Informatics Centre)
      
        </p>
        </Grid>
        </Grid>
        </Fade>
     
   
  
    

  </Grid>
  </Box>
 
  <Box pt={10} pl={4} pr={4} clone order={{ xs: 3, sm: 3,md:3, lg: 3}}>
<Grid  item xs={12} sm={12} lg={6} md={6}>
  <Fade right>
<div>
<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{width:"100%",height:"100%",top:"0"}}
      viewBox="0 0 399.965 399.878"
     
    >
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 198.545 115.08)"
          y2={0.32}
          x2={193.36}
          y1={156.09}
          x1={200.4}
          id="prefix__a"
        >
          <stop stopOpacity={0} stopColor="#fff" offset={0} />
          <stop stopColor="#fff" offset={0.95} />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1 0 0 -1 -82.88 448.43)"
          y2={281.75}
          x2={259.72}
          y1={383.07}
          x1={261.62}
          id="prefix__b"
        >
          <stop stopOpacity={0} stopColor="#fff" offset={0} />
          <stop stopColor="#fff" offset={0.99} />
        </linearGradient>
        <linearGradient
          xlinkHref="#prefix__b"
          y2={281.87}
          x2={253.1}
          y1={383.18}
          x1={255}
          id="prefix__f"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={280.9}
          x2={305.17}
          y1={382.22}
          x1={307.07}
          id="prefix__g"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={279.82}
          x2={363.04}
          y1={381.12}
          x1={364.93}
          id="prefix__h"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={281.59}
          x2={268.07}
          y1={382.9}
          x1={269.97}
          id="prefix__i"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={281.37}
          x2={280.2}
          y1={382.69}
          x1={282.11}
          id="prefix__j"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={280.73}
          x2={314.11}
          y1={382.05}
          x1={316}
          id="prefix__k"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={281.44}
          x2={276.32}
          y1={382.75}
          x1={278.22}
          id="prefix__l"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={280.63}
          x2={319.61}
          y1={381.94}
          x1={321.5}
          id="prefix__m"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={255.56}
          x2={259.72}
          y1={356.88}
          x1={261.62}
          id="prefix__n"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={255.69}
          x2={253.1}
          y1={357.01}
          x1={255}
          id="prefix__o"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={254.71}
          x2={305.17}
          y1={356.03}
          x1={307.07}
          id="prefix__p"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={253.63}
          x2={363.04}
          y1={354.95}
          x1={364.93}
          id="prefix__q"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={255.41}
          x2={268.07}
          y1={356.73}
          x1={269.97}
          id="prefix__r"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={255.18}
          x2={280.2}
          y1={356.5}
          x1={282.11}
          id="prefix__s"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={254.55}
          x2={314.11}
          y1={355.87}
          x1={316}
          id="prefix__t"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={255.26}
          x2={276.32}
          y1={356.57}
          x1={278.22}
          id="prefix__u"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={254.45}
          x2={319.61}
          y1={355.77}
          x1={321.5}
          id="prefix__v"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={229.39}
          x2={259.72}
          y1={330.7}
          x1={261.62}
          id="prefix__w"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={229.51}
          x2={253.1}
          y1={330.83}
          x1={255}
          id="prefix__x"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={228.54}
          x2={305.17}
          y1={329.85}
          x1={307.07}
          id="prefix__y"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={227.45}
          x2={363.04}
          y1={328.77}
          x1={364.93}
          id="prefix__z"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={229.23}
          x2={268.07}
          y1={330.55}
          x1={269.97}
          id="prefix__A"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={229}
          x2={280.2}
          y1={330.32}
          x1={282.11}
          id="prefix__B"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={228.36}
          x2={314.11}
          y1={329.68}
          x1={316}
          id="prefix__C"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={229.07}
          x2={276.32}
          y1={330.39}
          x1={278.22}
          id="prefix__D"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          y2={228.26}
          x2={319.61}
          y1={329.58}
          x1={321.5}
          id="prefix__E"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={249.74}
          x2={350.87}
          y1={249.74}
          x1={333.51}
          id="prefix__c"
        >
          <stop stopColor="#e5c6d6" offset={0} />
          <stop stopColor="#ead4d0" offset={0.42} />
          <stop stopColor="#f0e9cb" offset={1} />
        </linearGradient>
        <linearGradient
          xlinkHref="#prefix__c"
          y2={249.25}
          x2={284.32}
          y1={249.25}
          x1={267.38}
          id="prefix__G"
        />
        <linearGradient
          xlinkHref="#prefix__c"
          y2={181.36}
          x2={330.07}
          y1={181.36}
          x1={322.22}
          id="prefix__H"
        />
        <linearGradient
          xlinkHref="#prefix__c"
          y2={179.86}
          x2={295.96}
          y1={179.86}
          x1={287.94}
          id="prefix__I"
        />
        <linearGradient
          xlinkHref="#prefix__c"
          y2={200.39}
          x2={317.79}
          y1={200.39}
          x1={301.28}
          id="prefix__J"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={279.54}
          x2={334.7}
          y1={279.54}
          x1={280.58}
          id="prefix__d"
        >
          <stop stopOpacity={0} stopColor="#010101" offset={0} />
          <stop stopColor="#010101" offset={0.95} />
        </linearGradient>
        <linearGradient
          xlinkHref="#prefix__d"
          y2={294.75}
          x2={307.82}
          y1={236.45}
          x1={308.92}
          id="prefix__L"
        />
        <linearGradient
          xlinkHref="#prefix__d"
          y2={306.9}
          x2={310.76}
          y1={333.3}
          x1={307.68}
          id="prefix__M"
        />
        <linearGradient
          xlinkHref="#prefix__b"
          id="prefix__e"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1 0 0 -1 -82.88 448.43)"
          x1={261.62}
          y1={383.07}
          x2={259.72}
          y2={281.75}
        />
        <linearGradient
          xlinkHref="#prefix__c"
          id="prefix__F"
          gradientUnits="userSpaceOnUse"
          x1={333.51}
          y1={249.74}
          x2={350.87}
          y2={249.74}
        />
        <linearGradient
          xlinkHref="#prefix__d"
          id="prefix__K"
          gradientUnits="userSpaceOnUse"
          x1={280.58}
          y1={279.54}
          x2={334.7}
          y2={279.54}
        />
      </defs>
      <g transform="translate(-53.769 -38.205) scale(1.11092)">
        <path
          style={{
            isolation: "isolate",
          }}
          d="M143.98 372.95c-1.47 1.61.94 3.85 3 4.63a118.11 118.11 0 0042.1 7.8l-2.45 4.17a131.42 131.42 0 0069 .36l-3.48-5.4 20.21-1c3.21-.15 14.47 1.17 16.6-1.68 6.13-8.21-18.82-8.53-21.5-8.64q-39.93-1.67-79.91-1.29-10.9.1-21.8.35c-3.44.12-19.63-1.58-21.77.7z"
          opacity={0.42}
          fill="#7dc5ff"
        />
        <path
          d="M257.6 298.96q-.81 16-1.93 32.06a91.36 91.36 0 01-2.1 16.08 46.85 46.85 0 01-3.32 9.11c-.61 1.25-1.48 2.61-2.85 2.75-1.73.18-2.93-1.67-3.55-3.3-3.09-8-3.09-16.76-3.29-25.32q-.17-6.64-.53-13.29c-.29-5.35-.87-11.14-4.49-15.1-1.1-1.2-2.44-2.18-3.52-3.41-4.41-5-3.09-13.43 1.66-18.14 3.69-3.65 14.4-8.47 19.57-5.45 6.14 3.58 4.64 18.24 4.35 24.01z"
          fill="#606161"
        />
        <path
          d="M226.64 280.65a13.63 13.63 0 012.07 8.22c-.25 8.69-5.41 16.38-8 24.69-3.88 12.55-1.72 26-1.33 39.17a12.28 12.28 0 01-.66 5.36 4.49 4.49 0 01-4.21 2.88 5.62 5.62 0 01-3.35-2c-6.36-6.8-6.15-17.17-7.2-26.41-1.18-10.29-4.37-20.23-7.09-30.22-1.23-4.51-2.38-9.13-2.09-13.79.29-4.66 2.25-9.45 6.1-12.09 6.99-4.78 20.77-2.96 25.76 4.19z"
          fill="#606161"
        />
        <rect
          transform="rotate(-180 157.105 114.205)"
          rx={12.14}
          height={147.24}
          width={133.54}
          y={41.46}
          x={131.77}
          opacity={0.52}
          fill="none"
        />
        <rect
          transform="rotate(-180 157.105 114.205)"
          rx={12.14}
          height={147.24}
          width={133.54}
          y={41.46}
          x={131.77}
          fill="none"
          stroke="#fff"
        />
        <rect
          transform="rotate(-180 375.175 113.915)"
          rx={11.56}
          height={91.01}
          width={148.4}
          y={69.28}
          x={342.42}
          opacity={0.52}
          fill="none"
        />
        <rect
          transform="rotate(-180 375.175 113.915)"
          rx={11.56}
          height={91.01}
          width={148.4}
          y={69.28}
          x={342.42}
          fill="none"
          stroke="#fff"
        />
        <rect
          transform="rotate(-180 313.58 64.36)"
          rx={7.26}
          height={57.18}
          width={93.23}
          y={36.65}
          x={308.41}
          opacity={0.52}
          fill="none"
        />
        <rect
          transform="rotate(-180 313.58 64.36)"
          rx={7.26}
          height={57.18}
          width={93.23}
          y={36.65}
          x={308.41}
          fill="none"
          stroke="#fff"
        />
        <path
          opacity={0.52}
          fill="#fff"
          d="M333.16 266.18H107.47v-10.82h225.69z"
        />
        <rect
          transform="rotate(-180 266.775 178.55)"
          rx={12.56}
          height={127.53}
          width={172.75}
          y={115.66}
          x={221.84}
          fill="none"
        />
        <rect
          transform="rotate(-180 266.775 178.55)"
          rx={12.56}
          height={127.53}
          width={172.75}
          y={115.66}
          x={221.84}
          fill="none"
        />
        <path fill="url(#prefix__e)" d="M160.2 133.88h34.45v2.53H160.2z" />
        <path fill="url(#prefix__f)" d="M160.2 138.77h21.03v2.37H160.2z" />
        <path fill="url(#prefix__g)" d="M189.71 138.77h66.17v2.39h-66.17z" />
        <path fill="url(#prefix__h)" d="M262.07 138.77h37.24v2.39h-37.24z" />
        <path fill="url(#prefix__i)" d="M171.14 143.68h28.91v2.5h-28.91z" />
        <path fill="url(#prefix__j)" d="M180.42 148.56h34.45v2.53h-34.45z" />
        <path fill="url(#prefix__k)" d="M217.12 148.56H246v2.81h-28.88z" />
        <path fill="url(#prefix__l)" d="M180.37 153.45h26.6v2.37h-26.6z" />
        <path fill="url(#prefix__m)" d="M209.52 153.45h54.9v2.63h-54.9z" />
        <path fill="url(#prefix__n)" d="M160.2 160.07h34.45v2.53H160.2z" />
        <path fill="url(#prefix__o)" d="M160.2 164.96h21.03v2.37H160.2z" />
        <path fill="url(#prefix__p)" d="M189.71 164.96h66.17v2.39h-66.17z" />
        <path fill="url(#prefix__q)" d="M262.07 164.96h37.24v2.39h-37.24z" />
        <path fill="url(#prefix__r)" d="M171.14 169.85h28.91v2.5h-28.91z" />
        <path fill="url(#prefix__s)" d="M180.42 174.75h34.45v2.53h-34.45z" />
        <path fill="url(#prefix__t)" d="M217.12 174.75H246v2.81h-28.88z" />
        <path fill="url(#prefix__u)" d="M180.37 179.64h26.6v2.37h-26.6z" />
        <path fill="url(#prefix__v)" d="M209.52 179.64h54.9v2.63h-54.9z" />
        <path fill="url(#prefix__w)" d="M160.2 186.25h34.45v2.53H160.2z" />
        <path fill="url(#prefix__x)" d="M160.2 191.14h21.03v2.37H160.2z" />
        <path fill="url(#prefix__y)" d="M189.71 191.14h66.17v2.39h-66.17z" />
        <path fill="url(#prefix__z)" d="M262.07 191.14h37.24v2.39h-37.24z" />
        <path fill="url(#prefix__A)" d="M171.14 196.03h28.91v2.5h-28.91z" />
        <path fill="url(#prefix__B)" d="M180.42 200.92h34.45v2.53h-34.45z" />
        <path fill="url(#prefix__C)" d="M217.12 200.92H246v2.81h-28.88z" />
        <path fill="url(#prefix__D)" d="M180.37 205.82h26.6v2.37h-26.6z" />
        <path fill="url(#prefix__E)" d="M209.52 205.82h54.9v2.63h-54.9z" />
        <g opacity={0.52} fill="#7dc5ff">
          <path d="M237.35 42.71h17.14v1.26h-17.14zM237.35 45.15h10.46v1.18h-10.46zM252.03 45.15h32.92v1.19h-32.92zM288.02 45.15h18.53v1.19h-18.53zM242.79 47.58h14.38v1.24h-14.38zM247.41 50.02h17.14v1.26h-17.14zM265.66 50.02h14.36v1.4h-14.36zM247.38 52.45h13.23v1.18h-13.23zM261.89 52.45h27.31v1.31h-27.31zM237.35 55.74h17.14V57h-17.14zM237.35 58.17h10.46v1.18h-10.46zM252.03 58.17h32.92v1.19h-32.92zM288.02 58.17h18.53v1.19h-18.53zM242.79 60.6h14.38v1.24h-14.38zM247.41 63.04h17.14v1.26h-17.14zM265.66 63.04h14.36v1.4h-14.36zM247.38 65.47h13.23v1.18h-13.23zM261.89 65.47h27.31v1.31h-27.31zM237.35 68.76h17.14v1.26h-17.14zM237.35 71.2h10.46v1.18h-10.46zM252.03 71.2h32.92v1.19h-32.92zM288.02 71.2h18.53v1.19h-18.53zM242.79 73.63h14.38v1.24h-14.38zM247.41 76.06h17.14v1.26h-17.14zM265.66 76.06h14.36v1.4h-14.36zM247.38 78.5h13.23v1.18h-13.23zM261.89 78.5h27.31v1.31h-27.31z" />
        </g>
        <path
          transform="translate(-82.88 -1.75)"
          d="M349.79 250.1c.71 2 1.38 4.1.94 6.16a6 6 0 01-.85 2c-2 3.1-6.74 3.58-10 1.72s-5.1-5.42-6-9a9.67 9.67 0 01-.35-3.7c.29-2.17 1.73-4 3.23-5.6 2-2.08 5.67-4.8 8.36-2.3 2.42 2.24 3.6 7.73 4.67 10.72z"
          fill="url(#prefix__F)"
        />
        <path
          transform="translate(-82.88 -1.75)"
          d="M268 249.5a5.14 5.14 0 00-.59 2.69 4.69 4.69 0 00.7 1.68 13.49 13.49 0 003.31 3.93 6.87 6.87 0 004.81 1.49c2.56-.28 4.59-2.31 5.95-4.5a12.33 12.33 0 002.13-7.06 9 9 0 00-3.68-6.74c-1.93-1.4-5.95-2.67-8.13-1.07-2.18 1.6-3.41 7-4.5 9.58z"
          fill="url(#prefix__G)"
        />
        <path
          transform="translate(-82.88 -1.75)"
          d="M327.06 176.05a2.42 2.42 0 012.1.37 2.79 2.79 0 01.69 1.71A12.25 12.25 0 01330 182a5.31 5.31 0 01-1.77 3.31 7.66 7.66 0 01-2.52 1.22 2.85 2.85 0 01-2.16.08 2.49 2.49 0 01-1.08-1.85c-.79-3.87.42-7.95 4.59-8.71z"
          fill="url(#prefix__H)"
        />
        <path
          transform="translate(-82.88 -1.75)"
          d="M290.65 174.71a2.48 2.48 0 00-1.21 0A2.51 2.51 0 00288 177a10.64 10.64 0 00.18 2.81A7.76 7.76 0 00290 184a3.4 3.4 0 004.15.72c4.25-2.94.25-9.19-3.5-10.01z"
          fill="url(#prefix__I)"
        />
        <path
          transform="translate(-82.88 -1.75)"
          d="M317.57 202.66a8.87 8.87 0 01.16 2.76c-.37 2.56-2.92 4.35-5.48 4.67-2.56.32-5.12-.54-7.51-1.49a6 6 0 01-2-1.14 4.45 4.45 0 01-1.15-2.21 16.05 16.05 0 01-.26-4.38l.16-5.16a6.18 6.18 0 01.58-2.93c1-1.71 3.29-2 5.28-2.13 2.61-.11 6.54 0 8.26 2.38 1.72 2.38 1.52 6.86 1.96 9.63z"
          fill="url(#prefix__J)"
        />
        <path
          d="M242.73 158.79a15.29 15.29 0 01.8 6.8 127.36 127.36 0 01-1.66 15.83c-.66 3.93-1.7 8.15-4.81 10.63a19.9 19.9 0 00-2.51 2c-.54.58-.92 1.3-1.42 1.93-2.53 3.17-7.63 3.17-11.11 1.06-3.48-2.11-5.71-5.73-7.75-9.25-2.25-3.88-4.48-7.94-4.88-12.41-.33-3.54.5-7.27-.85-10.56-1-2.42-3.07-4.36-3.53-6.93a11.67 11.67 0 01.62-5.12c.81-2.91 2.05-6.27 5-7.06 2.15-.58 4.37.52 6.6.59 2.84.1 5.73-1.49 8.43-.59 3.47 1.16 5 5.16 8.46 6.46 3.46 1.3 7 2.94 8.61 6.62z"
          fill="#2d2f2f"
        />
        <path
          d="M254.21 210.04c-10.14-8.41-24.77-8.2-37.82-6.42-5.39.73-10.88 1.7-15.62 4.38-7.94 4.5-12.64 13.2-15.11 22-1.31 4.67-2 10 .62 14.1 2.75 4.24 8.23 5.7 13.25 6.26a4.43 4.43 0 012.18.63 3.87 3.87 0 011.22 2.45c1.4 7.3-1.44 15.5 2.31 21.91 3.63 6.19 11.74 7.82 18.89 8.37 9.25.71 19.28.45 26.79-5a10.87 10.87 0 003.11-3.19c1.24-2.12 1.31-4.7 1.34-7.15.08-5.34-1.87-16.08.73-20.79 2.18-3.92 8.39-3.94 10.57-8.42 4.13-8.52-6.25-23.99-12.46-29.13z"
          fill="#fff"
        />
        <path
          transform="translate(-82.88 -1.75)"
          d="M300.39 279.84l.07 11.37a2.19 2.19 0 01-.24 1.27 2 2 0 01-1.34.73c-3.08.72-6.3.31-9.46.32-3.16.01-6.57.57-8.84 2.78 3.45 2.55 7.9 3.25 12.17 3.75q9.48 1.13 19 1.5a49.21 49.21 0 0012.31-.64 22.83 22.83 0 009.76-4.55c-2.79-3-7.41-2.94-11.49-2.94a104.74 104.74 0 01-11.88-.68 3.25 3.25 0 01-2.39-1 3.17 3.17 0 01-.38-1.95 39.47 39.47 0 01.95-7.5 4.75 4.75 0 01.95-2.23 5.28 5.28 0 013.18-1.26 69.35 69.35 0 0013.55-3.7 15.45 15.45 0 004.95-2.73c3.94-3.58 3.77-9.75 2.86-15a50.31 50.31 0 01-23.82 6.78c-5.73.16-18.16-2.3-22.19 3.22-2 2.79.13 5.37 2.34 7.3.96.82 9.94 5.05 9.94 5.16z"
          fill="url(#prefix__K)"
        />
        <rect
          rx={16.79}
          height={40.67}
          width={57.38}
          y={226.42}
          x={197.45}
          fill="none"
        />
        <rect
          rx={16.79}
          height={40.67}
          width={57.38}
          y={226.42}
          x={197.45}
          fill="none"
          stroke="#fff"
        />
        <rect
          rx={16.79}
          height={40.67}
          width={57.38}
          y={230.16}
          x={197.45}
          fill="none"
          stroke="#909090"
        />
        <path
          transform="translate(-82.88 -1.75)"
          d="M317.85 254.36a21.93 21.93 0 01-5.38 1.6c-5 .92-10.84.72-14.44-2.91a6.42 6.42 0 01-1.35-1.92c-1-2.43.31-5.36 2.46-6.9s4.88-1.95 7.51-2.08c3.22-.16 9.34-.71 12.15 1.46 3.36 2.6 2.84 8.97-.95 10.75z"
          fill="url(#prefix__L)"
        />
        <rect
          transform="rotate(180 266.63 279.565)"
          rx={3.91}
          height={64.64}
          width={7.83}
          y={248.12}
          x={304.16}
          fill="#fff"
        />
        <path
          d="M249.27 356.05c2 1.65 2.5 4.51 3.38 7 1.22 3.4 3.48 6.49 3.78 10.09a5.64 5.64 0 01-.51 3.12 5 5 0 01-4.34 2.44 9.5 9.5 0 01-4.93-1.5 17.29 17.29 0 01-6.24-6.41 11 11 0 01-1.42-4.22c-.41-4.51 4.27-15.32 10.28-10.52z"
          fill="#7dc5ff"
        />
        <path
          d="M253 375.13a1.81 1.81 0 010 1.71 1.55 1.55 0 01-.87.47 5.6 5.6 0 01-4-.73 16.27 16.27 0 01-3.22-2.59 23.43 23.43 0 01-3.91-4.42 8 8 0 01-1.27-5.65c1.06-5.42 5.84-.56 7.6 1.44a29 29 0 015.67 9.77z"
          fill="#606161"
        />
        <path
          d="M210.12 356.16c-2 1.65-2.5 4.51-3.38 7-1.22 3.4-3.48 6.5-3.78 10.09a5.68 5.68 0 00.51 3.13 5 5 0 004.34 2.43 9.4 9.4 0 004.93-1.5 17.21 17.21 0 006.24-6.41 10.94 10.94 0 001.42-4.22c.4-4.51-4.28-15.36-10.28-10.52z"
          fill="#7dc5ff"
        />
        <path
          d="M205.88 375.52a1.84 1.84 0 000 1.71 1.58 1.58 0 00.88.47 5.71 5.71 0 004-.73 16.65 16.65 0 003.21-2.59 23.23 23.23 0 003.92-4.43 8 8 0 001.27-5.64c-1.07-5.43-5.84-.57-7.61 1.44a29.12 29.12 0 00-5.67 9.77z"
          fill="#606161"
        />
        <path
          d="M231.55 332.25a10.54 10.54 0 01-5.17 1 22.68 22.68 0 01-5.88-.43 4.11 4.11 0 01-1.78-.83 4.06 4.06 0 01-1-1.42c-1.63-3.6-3.47-11.06-.94-14.09 2.89-3.48 14.36-4.09 18-.44 3.53 3.42.97 13.74-3.23 16.21z"
          fill="#7dc5ff"
        />
        <path
          transform="translate(-82.88 -1.75)"
          d="M314.43 334a10.54 10.54 0 01-5.17 1 22.68 22.68 0 01-5.88-.43 4.11 4.11 0 01-1.78-.83 4.06 4.06 0 01-1-1.42c-1.63-3.6-3.47-11.06-.94-14.09 2.89-3.48 14.36-4.09 18-.44 3.53 3.42.97 13.74-3.23 16.21z"
          fill="url(#prefix__M)"
        />
        <path fill="#fff" d="M228.81 366.08h-5.22V332.4h5.22z" />
        <path
          d="M246.84 368.88c1.16.95 2.29 2.14 3.78 2.32 1.08.12 2.16-.34 3.26-.34a6.12 6.12 0 013.85 1.73 6.51 6.51 0 012.12 3c.81 2.76-1.65 5.78-4.52 6.06-2.87.28-5.63-1.68-6.89-4.26a9.4 9.4 0 00-1.06-2 5.81 5.81 0 00-1.43-1.12 41.88 41.88 0 00-13.83-5.47c-.85-.17-1.89-.25-2.43.42a2.36 2.36 0 00-.41 1.3 45.72 45.72 0 00-.27 6 2.27 2.27 0 00.21 1.12 4 4 0 00.94.93 3.9 3.9 0 01.52 4.65 7.12 7.12 0 01-3.91 3c-1.92.71-4.34.83-5.77-.64a4.11 4.11 0 01-.75-4.24 6.35 6.35 0 013-3.26 2.6 2.6 0 001.18-.9 2.32 2.32 0 00.18-1.2l-.14-4.46a2.15 2.15 0 00-.68-1.85 2 2 0 00-1.3-.19 39 39 0 00-20.3 7.61c1.08.84.89 2.66-.08 3.62a5.26 5.26 0 01-3.82 1.18 7.65 7.65 0 01-4.27-1.25 4.42 4.42 0 01-2-3.84 4.47 4.47 0 012.67-3.52 8 8 0 014.53-.49 9.23 9.23 0 002.39.19 7.23 7.23 0 002.52-1.05 55.86 55.86 0 0122.53-7c6.64-.59 14.81-.45 20.18 3.95z"
          fill="#fff"
        />
        <rect
          transform="rotate(-180 383.36 203.53)"
          rx={11.02}
          height={63.19}
          width={85.21}
          y={172.81}
          x={382.19}
          fill="none"
          stroke="#fff"
        />
        <rect
          transform="rotate(-180 142.95 222.39)"
          rx={10.67}
          height={35.94}
          width={97.97}
          y={205.3}
          x={135.41}
          fill="none"
          stroke="#fff"
        />
        <path
          d="M69.74 81l24.93-12.84v3.72l-21 10.47v.12l21 10.52v3.72L69.74 83.87zM98.12 98.91l15-39h3.65l-15 39zM145.12 84.06l-24.94 12.79v-3.81l21.16-10.52v-.17l-21.16-10.52v-3.67l24.94 12.79z"
          fill="#7dc5ff"
        />
        <rect
          transform="rotate(-180 265.61 307.825)"
          rx={12.55}
          height={25.89}
          width={83.47}
          y={295.75}
          x={265.32}
          fill="#fff"
        />
        <rect
          transform="rotate(-180 265.61 307.825)"
          rx={12.55}
          height={25.89}
          width={83.47}
          y={295.75}
          x={265.32}
          fill="none"
          stroke="#fff"
        />
        <g opacity={0.52} fill="#7dc5ff">
          <path d="M308.78 187.41h22.8v1.67h-22.8zM308.78 190.64h13.92v1.57h-13.92zM328.31 190.64h43.79v1.58h-43.79zM316.02 193.89h19.14v1.66h-19.14zM322.16 197.12h22.8v1.67h-22.8zM346.44 197.12h19.11v1.86h-19.11zM322.12 200.36h17.61v1.57h-17.61zM341.42 200.36h36.33v1.74h-36.33zM308.78 204.74h22.8v1.67h-22.8zM308.78 207.97h13.92v1.57h-13.92zM328.31 207.97h43.79v1.58h-43.79zM316.02 211.21h19.14v1.66h-19.14zM322.16 214.45h22.8v1.67h-22.8zM346.44 214.45h19.11v1.86h-19.11zM322.12 217.69h17.61v1.57h-17.61zM341.42 217.69h36.33v1.74h-36.33z" />
        </g>
        <g opacity={0.52} fill="#7dc5ff">
          <path d="M67.64 211.46h22.8v1.67h-22.8zM67.64 214.7h13.92v1.57H67.64zM87.17 214.7h43.79v1.58H87.17zM74.88 217.94h19.14v1.66H74.88zM81.02 221.18h22.8v1.67h-22.8zM105.31 221.18h19.11v1.86h-19.11zM80.99 224.41H98.6v1.57H80.99zM100.28 224.41h36.33v1.74h-36.33zM67.64 228.79h22.8v1.67h-22.8zM67.64 232.03h13.92v1.57H67.64zM87.17 232.03h43.79v1.58H87.17z" />
        </g>
        <path
          d="M112.42 327.1c-3.31-6.54-7.36-13.33-6.58-20.62.47-4.41 2.7-8.41 4.88-12.28l9.82-17.41c3 3.9 7.94 6.27 9.92 10.77 3.18 7.23-3 15.23-2.67 23.12.22 6.07 4.25 11.6 4 17.67-.16 4.41-7.14 18.86-12.79 18.31-2.99-.29-4.7-15.86-6.58-19.56z"
          fill="none"
          stroke="#fff"
        />
        <path
          d="M112.42 327.1c-3.31-6.54-7.36-13.33-6.58-20.62.47-4.41 2.7-8.41 4.88-12.28l9.82-17.41c3 3.9 7.94 6.27 9.92 10.77 3.18 7.23-3 15.23-2.67 23.12.22 6.07 4.25 11.6 4 17.67-.16 4.41-7.14 18.86-12.79 18.31-2.99-.29-4.7-15.86-6.58-19.56z"
          fill="none"
        />
        <path
          d="M153.198 317.606c2.23 0 5 .45 5.64 2.6.52 1.88-1.13 3.61-2.7 4.77-5.47 4-12.32 7.07-15 13.3-4.45 10.34-17.05 3.71-10.53-5.24 2.7-3.7 5-8.67 8.36-11.76 3.86-3.57 9.26-3.73 14.23-3.67zM101.992 317.522c-2.51-2.86-6.24-4.27-9.8-5.59-1.69-.62-3.86-1.13-5 .23a3.14 3.14 0 000 3.63 11.34 11.34 0 002.83 2.65 17.86 17.86 0 015.25 6.09c1.27 2.59 1.61 5.54 2.74 8.2 1.13 2.66 3.49 5.17 6.37 5.05a5.74 5.74 0 004.92-4.05c1.12-3.45-.37-5-2.22-7.44-2.05-2.71-2.8-6.18-5.09-8.77z"
          fill="none"
          stroke="#fff"
        />
        <path
          d="M135.27 345.07l-3.37 31.53h-3.57c-2.75-1.56-5.53-3.09-8.31-4.65l-8.1-4.54-2.87-22.34z"
          fill="none"
          stroke="#fff"
        />
        <path
          d="M135.27 345.07l-3.37 31.53h-3.57c-2.75-1.56-5.53-3.09-8.31-4.65l-8.1-4.54-2.87-22.34z"
          fill="none"
        />
      </g>
    </svg>
</div>
</Fade>
</Grid>
  </Box>
 


  <Box pt={16} pl={4} pr={4} clone order={{ xs: 4, sm: 4,md:4, lg: 4}}>
<Grid  item xs={12} sm={12} lg={6} md={6} style=
{{color:"#ffff"}} > 
<Fade left>

<div>

      <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      data-name="Layer 1"
      viewBox="0 0 403.049 370.83"
      style={{width:"100%",height:"100%",top:"0"}}
      
    >
      <defs>
        <linearGradient
          id="prefix__a"
          x1={188.74}
          y1={149}
          x2={183.4}
          y2={461.74}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.01} />
          <stop offset={0.13} stopOpacity={0.69} />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="prefix__d"
          x1={237.59}
          y1={92.22}
          x2={261.03}
          y2={92.22}
          xlinkHref="#prefix__a"
          gradientTransform="translate(20.88 -3.118)"
        />
        <linearGradient
          id="prefix__e"
          x1={236.34}
          y1={92.36}
          x2={262.56}
          y2={92.36}
          xlinkHref="#prefix__a"
          gradientTransform="translate(20.88 -3.118)"
        />
        <radialGradient
          id="prefix__b"
          cx={250.59}
          cy={72.53}
          r={42.55}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(20.88 -3.118)"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="prefix__c"
          cx={287.71}
          cy={79.81}
          r={23.39}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-16.7 -21.848)"
        >
          <stop offset={0.34} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0.39} />
        </radialGradient>
      </defs>
      <title>{"Thinking"}</title>
      <g fill="none" stroke="#fff">
        <path
          transform="matrix(.82392 .5667 -.49585 .86841 20.88 -3.118)"
          strokeWidth={5.126}
          d="M87.017-48.959H377.73v228.838H87.017z"
        />
        <path
          transform="matrix(.84574 .5336 -.52846 .84896 20.88 -3.118)"
          strokeWidth={4.849}
          d="M126.58-65.802h280.239V146.66H126.58z"
        />
      </g>
      <circle cx={271.469} cy={69.412} r={63.15} fill="url(#prefix__b)" />
      <path
        d="M232.214 152.34c1.946-.16 3.781-.422 5.42-.772 1.625-.432 2.876-.973 3.65-1.577 2.064-1.462-.862-6.074-3.322-8.03-1.84-1.479-1.878-3.856-6.988-3.439-13.68 1.113-2.91 14.227 1.24 13.818z"
        fill="none"
        stroke="#fff"
        strokeWidth={0.979}
      />
      <path
        d="M219.45 114.092c-1.3 2.47-.09 5.69-1.34 8.18a6.5 6.5 0 01-3.36 2.87c-2.48 1.06-5.3 1.21-7.72 2.38a10 10 0 00-4.8 5c-.93 2.2-14.99 5.98-16.01 4.29a7 7 0 01-.77-3.66c0-3.06.91-6.05 1.5-9.05.85-4.31 1.14-8.72 2.15-13 1.01-4.28 2.84-8.52 6.16-11.4 3.32-2.88 10.61-10.31 14.8-9.58 4 .71 4.9 9.62 7.14 13a33.38 33.38 0 012 4c1.41 2.96 1.78 4.08.25 6.97z"
        fill="none"
        stroke="#fff"
        strokeWidth={1.8}
      />
      <path
        d="M212.98 87.448c-1.009 2.99-4.216 4.81-7.141 6.428-2.925 1.618-6.084 3.562-6.858 6.607-.492 1.865 0 3.978-1.229 5.618a8.222 7.517 0 00-1.647-2.247 2.753 2.517 0 00-2.753-.607 2.937 2.686 0 00-1.548 2.506 5.15 4.708 0 004.252 4.584 15.977 14.608 0 00-2.68 6.282c-.356 2.337-.171 4.933-1.794 6.742a5.15 4.708 0 01-7.054.618 4.449 4.068 0 01-1.757 1.843c-2.077-.99-2.028-3.63-2.458-5.731-1.02-5.618-6.797-9.54-8.714-14.956a25.809 23.597 0 01-.627-8.99 25.932 23.71 0 011.856-8.36 18.779 17.17 0 019.672-8.023 51.335 46.936 0 0111.712-2.921 67.84 62.027 0 0110.041-1.495c6.244-.18 10.41 7.113 8.726 12.102z"
        fill="#eaeaea"
      />
      <path
        d="M259.42 201.742a8.89 8.89 0 012.95.47 7.5 7.5 0 012.3 1.62c7.64 7.16 9.95 18.19 11.87 28.48 3.23 17.26 6.46 34.6 6.9 52.15.09 3.46 1.49 6.61-.13 9.66s-9.05 3.35-12.32 2.23c-3.27-1.12-2.46-2.43-3.78-5.66-2.69-6.54-6.49-12.54-10.26-18.54l-13.78-21.83c-2.2-3.48-4.49-7.06-7.86-9.44-4.74-3.34-10.84-3.79-16.54-4.84-5.7-1.05-11.87-3.28-14.49-8.45-4.69-9.29 1.53-21.93 11.51-23.11 14.56-1.75 28.93-3.33 43.63-2.74z"
        fill="none"
        stroke="#fff"
        strokeWidth={1.8}
      />
      <path
        d="M288.73 260.362a33.82 33.82 0 00-3.59 1.35 10.11 10.11 0 01-4.84.44c-1.75-.28-3.89-.89-5 .48a3.93 3.93 0 00-.4 3.22 35.5 35.5 0 001.75 6.22 6.23 6.23 0 001.07 2c1.19 1.33 3.19 1.49 5 1.56a164.81 164.81 0 0019.12 0c1.91-.14 4.26-.72 4.68-2.59a4 4 0 00-.79-2.93c-1.9-3-4.9-5-8-6.58-2.71-1.38-5.89-3.84-9-3.17zM281.11 299.832a28.36 28.36 0 00-3.07 1.15 8.64 8.64 0 01-4.13.36c-1.49-.24-3.32-.76-4.29.41a3.35 3.35 0 00-.34 2.75 31.1 31.1 0 001.49 5.3 5.29 5.29 0 00.92 1.68c1 1.13 2.72 1.27 4.24 1.33a141.21 141.21 0 0016.33 0c1.63-.12 3.63-.62 4-2.21a3.37 3.37 0 00-.67-2.5 16.74 16.74 0 00-6.84-5.62c-2.27-1.14-4.99-3.23-7.64-2.65zM184.85 129.152c-7.38 3.08-12.69 9.72-16.7 16.64-9.69 16.7-13.62 36-17.41 54.94-.78 3.92-1.57 7.9-1.25 11.89a15.9 15.9 0 001.14 4.91c2.46 5.81 9 8.95 15.33 9.33 5.58.35 11.11-1 16.64-1.84 4.65-.66 9.36-.9 13.91-2 4.55-1.1 9-3.33 11.84-7.07 3.26-4.34 3.84-10.07 4.31-15.47l2.51-29.3c.75-8.78 1.45-18-2-26.08a27.64 27.64 0 00-11.71-13c-4.94-2.95-11.16-5.28-16.61-2.95zM216.3 127.462a3.52 3.52 0 01.15-3.14 4.09 4.09 0 012.32-1.26c1.37-.39 2.76-.73 4.16-1a5.86 5.86 0 011.9-.19c1.53.17 2.68 1.43 3.67 2.59a12 12 0 012.5 3.85 11.77 11.77 0 01.33 4.23l-.13 3.23a5.43 5.43 0 01-.28 1.75 3.57 3.57 0 01-1.27 1.53 7.26 7.26 0 01-3.47 1.2c-1.41.15-3.58.05-4.5-1.24-.6-.83-.41-2.22-.82-3.19-1.22-2.95-3.56-5.32-4.56-8.36z"
        fill="none"
        stroke="#fff"
        strokeWidth={1.8}
      />
      <path
        d="M152.69 220.802h-.39l.22-1.36c-1.64 14.13 3.07 31.07 18.16 35.29 13 3.63 25.47 3.72 38-.45 10.17-3.37 19.81-10.14 27.7-17.37 6.81-6.24 12.07-14 19.06-20 1.63 2.56 4 4.32 5.79 6.75 2.23 3 2.48 6.32 3.69 9.7 1.28 3.6 3.56 6.69 5.11 10.16 3.15 7 4.49 10.32 12.53 10.33 2.68 0 3.86.48 5.65-1.53 2.92-3.29 1.81-12.55 1.62-16.48-.69-13.88-2.76-28.45-7.61-41.52-2.68-7.21-6-14.31-11.44-19.82-7.33-7.38-15.59-4.42-23.51.25-9.65 5.7-18.26 14.22-26.28 22.09-3.32 3.25-5.42 6.17-9.4 8.84-4.41 3-8.71 5.28-13.4 7.82-13.26 7.18-30.89 7.3-45.5 7.3z"
        fill="none"
        stroke="#fff"
        strokeWidth={1.8}
      />
      <path
        d="M271.18 155.302c3.1 2.58 4 6.95 4.08 11a3.76 3.76 0 01-.55 2.41 4 4 0 01-1.15.88c-2.31 1.36-5 2.76-7.54 1.93-2.23-.73-3.65-3-5.82-3.89-1.79-.74-4-.53-5.44-1.86a4.57 4.57 0 01-1.2-2.25c-2.67-10.79 10.8-13.88 17.62-8.22z"
        fill="none"
        stroke="#fff"
        strokeWidth={1.8}
      />
      <path
        d="M224.44 149.862a12.71 12.71 0 003.65 2.26 11.23 11.23 0 004.44.32c8.63-.68 17.43-3.52 25.77-1.19a6.06 6.06 0 013.16 1.74 5.36 5.36 0 011 3.4c0 6-2.667 5.096-8.047 7.846-6.19 3.14-10.617 4.928-17.487 5.938-4.66.68-18.226 1.729-22.926 1.289-2.151-.068-9.755-.675-11.578-1.819-46.56-6.198-21.562-34.071-17.342-30.721 4.22 3.35 35.22 7.657 39.36 10.937z"
        fill="none"
        stroke="#fff"
        strokeWidth={1.8}
      />
      <path
        d="M263.52 290.772a22.24 22.24 0 01-.71 4c-2.57 9.35-11.63 15.78-21.07 18-9.44 2.22-145.501-83.127-155.111-84.417-11.153 35.205-16.69 72.867-2.33-69.563 1.72-17.16 84.727-103.144 87.667-86.953 1.652 9.225-49.36 106.263-45.188 114.655-1.433 19.347.841 40.668 8.961 50.518 6.1 7.4 12.54 14.76 20.76 19.69 7.43 4.46 16 6.72 24.44 8.54a294.602 294.602 0 0033.95 5.26c15.37 1.47 32.3 2.33 43.51 13a21 21 0 015.12 7.27z"
        fill="#dcdcdc"
      />
      <path
        d="M291.72 52.892a20.45 20.45 0 01-2.35 9.58l-8.52 21.27h-20.86l-7.92-22.45a20.46 20.46 0 01-1.78-8.4 20.72 20.72 0 0141.43 0z"
        fill="#7dc5ff"
      />
      <path
        d="M291.72 52.892a20.45 20.45 0 01-2.35 9.58l-8.52 21.27h-20.86l-7.92-22.45a20.46 20.46 0 01-1.78-8.4 20.72 20.72 0 0141.43 0z"
        style={{
          isolation: "isolate",
        }}
        opacity={0.69}
        fill="url(#prefix__c)"
      />
      <path
        d="M267.62 84.082a47.69 47.69 0 01-4.68-20.36c0-1.58.22-3.44 1.61-4.21 1.69-.94 3.78.53 4.71 2.23a9 9 0 01.5 7.32 9.65 9.65 0 01-1.64-5 8.82 8.82 0 01.24-3.93 3.42 3.42 0 012.88-2.38c2-.07 3.36 2.21 3.58 4.23a10.28 10.28 0 01-1.51 6.6 7.79 7.79 0 011.6-7.63 4.45 4.45 0 012.32-1.44 2.45 2.45 0 012.47.87 3.34 3.34 0 01.5 1.48c.53 3.82-.79 7.66-2.45 11.15-1.66 3.49-3.66 6.84-4.63 10.58"
        strokeMiterlimit={10}
        fill="none"
        stroke="#fff"
        strokeWidth={0.79}
      />
      <rect
        x={258.469}
        y={83.502}
        width={23.45}
        height={11.19}
        rx={2.34}
        fill="#7dc5ff"
      />
      <rect
        x={258.469}
        y={83.502}
        width={23.45}
        height={11.19}
        rx={2.34}
        fill="url(#prefix__d)"
      />
      <rect
        x={257.219}
        y={87.212}
        width={26.22}
        height={4.06}
        rx={1.96}
        fill="#7dc5ff"
      />
      <rect
        x={257.219}
        y={87.212}
        width={26.22}
        height={4.06}
        rx={1.96}
        fill="url(#prefix__e)"
      />
    </svg>
</div>
  
</Fade>
</Grid>
</Box>
<Box pt={17} pl={4} pr={4} clone order={{ xs: 5, sm: 5,md:5, lg: 5}}>
<Grid  item xs={12} sm={12} lg={6} md={6} style=
{{color:"#ffff"}} > 


<Typography  variant="h5" component="h5" gutterBottom>
  {/* <Zoom right cascade> */}
    <span style={{borderBottom:"3px solid #7dc5ff"}}>- THINKING -</span>

  {/* </Zoom> */}
      </Typography>
      <Fade right>

      <p>
      "Every day is a chance of improvement just like an incremented loop which iterates & increments with adding value & information."
I'm a big picture thinker & I'd like to connect dots & find solutions to solve complex problems.
Much the same as how a model finds its way to the possible outcome by iterating through numerous possibilities.
Experience will make me learn from my past mistakes.
My experience has taught me that there is a great wealth of information out there & it just takes dedication, hard work & passion to absorb,
get acquainted and add more to the thinking.

      </p>
              
      </Fade>
  </Grid>
  </Box>
</Grid>

</Container>  
    )
}

export default Work

