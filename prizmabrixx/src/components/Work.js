import React, {useEffect}  from 'react';
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import './Work.css';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';
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

 
<b><span  style={{fontFamily: 'Goldman',fontSize:"25px",borderBottom:"3px solid #fec82a"}}>Values we deliver to the Customer</span></b><br />
<Typography  variant="h6" component="h6"  style={{color: "#ffff",marginTop:"12px"}}>
  {/* <Zoom right cascade> */}
    <span style={{borderBottom:"3px solid #fec82a"}}>- Desired value<br/>- Percieved value</span>

  {/* </Zoom> */}
      </Typography>
      
  <Button variant="outlined" onClick={ovalscroll1} color="secondary" style={{color:"#ffff",marginTop:"10px",zIndex:"3"}}>View Details</Button> 
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
    <span style={{borderBottom:"3px solid #fec82a"}}>- Desired Value -</span>

  {/* </Zoom> */}
      </Typography>
      <Fade left>
          

      <p>
      <mark>[i] Reduce the efforts in imagining the outcome:</mark><br/> There are basically two types of customers one who want to construct the house and the other who relies on a builder to buy a house. The first type of customer comes to a hold at construction planning; the customer takes in a lot of effort in imagining about the outcome of the blueprint and probably any pictorial representation of the blueprint of the construction. One would always have the urge to have a complete clarity of how the end product would look like. Every customer wants to know the outcome before laying the pillars. The customer would hence look for a service that could provide the best possible layout of the blueprint. The other type of customers who rely on builders to buy a house also receive a blueprint, and it becomes a cycle of imagination. End of the day every customer would want a service that could give then a clear picture of the blueprint. And by viewing a project through Virtual Reality they will have a real like walkthrough experience of the project in a Virtual World. 

      </p>
      <p>
      <mark>[ii] Construction practicality:</mark><br/> Customers would always be worried if their planning lacks any practicality. Customers are always imagining about placements of every object in their home from before the start of construction if every object is peaceable practically on a blueprint. Some customers are usually worried about pricing where they prioritize their needs. They would require a service that could guide them about the current pricing of every product in the market that will allow them to prioritize things in their house. If they receive a detailed price break down of every small thing in their house, they would have a better vision. By placing things where they really fit by the guidance of expert interior placement designers, they would experience the best possible practicality. The best part of practicality is that every customer receives a customer support who will guide them through the placements of products and will modify every product depending on the interest of the customer.

      </p>
   </Fade>
</Grid>
    
</Box>

<Box pt={10} pl={4} pr={4} clone order={{ xs: 2, sm: 2,md:2, lg: 2}}>
<Grid  item xs={12} sm={12} lg={12} md={12} style={{color: "#ffff", textAlign: 'left'}}>
<Typography  variant="h4" component="h4" style={{textAlign: 'center'}}>
  {/* <Zoom right cascade> */}
    <span style={{borderBottom:"3px solid #fec82a"}}>Perceived Value
</span>

  {/* </Zoom> */}
      </Typography>
      <Fade left>

      
      <p>
      Currently we have a lot of services who can show pictorial representations of blueprint but what if things can just go better than present by the following benefits. 

      </p>
      <p>
      <mark>[i] Real like walkthrough of planned construction:</mark> <br/>The benefit customer gets from us is the real like walkthrough of his planned construction using a game view or a virtual reality experience. This walkthrough experience will be as close as a real-life walkthrough. 


      </p>
      <p>
     <mark>[ii] Customizability: </mark> <br/>The best part is to have the independence to modify things in the construction depending on the taste of the customer. Every customer receives a personal guide who will assist them with the placement of every product in their house and will also customize as per the choice of customer. 
      </p>
      <p>
     <mark>[iii] Detailed price breakdown:</mark> <br/> This will clear the major drawback of lacking clarity regarding the practicality of the planning, in case there is some change to be done to construction such as increasing or decreasing the space of a room. The customer would even get a quotation for every sand particle to the door and even electronic appliances used in the virtual world.

      </p>
          </Fade>
</Grid>
    
</Box>
</Grid>

<Grid container style={{overflow:"hidden !important"}}>
<Box pt={12} pl={4} pr={4} clone order={{ xs: 1, sm: 1,md:1, lg: 1}}>
<Grid  item xs={12} sm={12} lg={12} md={12} style={{color: "#ffff", textAlign: 'left'}}>
<Typography  variant="h4" component="h4"  style={{textAlign: 'center'}}>
  {/* <Zoom right cascade> */}
    <span style={{borderBottom:"3px solid #fec82a"}}>Bundles of products and services we are offering to each customer</span>

  {/* </Zoom> */}
      </Typography>
      <Fade left>
          

    <p>
    <mark>[i] Constructional planning</mark><br/>
     If you are looking forward to build a new house but you are afraid of how the output would like then you are at the right place. The moment you think about starting a construction please let us know and we will make u experience Virtual House Simulation.
<br/>Things for Constructional Planning: <br/>
1.Create a plan or select a plan from us. <br/>
2.We even build your plans. <br/>
3.We will create your plan to 3D structure. <br/>
4.We will design your interiors and exteriors. <br/>
5.Professional placement of things in home. <br/>
6.Customization is most welcomed. <br/>
7.Detailed price breakdown of the project. <br/>

    </p>
    <p>
      <mark>[ii] House Renovation:</mark><br/>
 Does your house need a makeover? Just let us know and we will get it done for you, definitely you would love to watch different ways you could makeover your house. We will help you see several ways, you could customize your house so that you are aware of the best outcome. We will design your interiors and exterior with professional placement of things in home. Customization is most welcomed with a detailed price breakdown of the project. 
We are the most affordable interior designers and showing your project virtually before commencement, is an exclusive jackpot for you. 

    </p>
    <p>
    <mark>[iii] Office Renovation:</mark><br/>
     Does your office need a makeover? Just let us know and we will get it done for you, definitely you would love to watch different ways you could makeover your office space. We will help you see several ways u could customize your office space so that you are aware of the best outcome. We will design your interiors and exterior with professional placement of things in office space. Customization is most welcomed with a detailed price breakdown of the project. We are the most affordable interior designers and showing your project virtually before commencement is an exclusive jackpot for you. 

    </p>
    <p>
    <mark>[iv] Architectural Design:</mark><br/>
     Architectural Design is the most important part of any construction. Your Architecture speaks a lot about the concept of your construction. A basic architecture may work good but what if you have a concept behind a construction and you want a unique Architecture which would deliver your concept to the one who see your construction? Architecture can be a challenging and sometimes stressful job, but you can help yourself by just contacting us. We have a great collection of Architectural Designs depending upon your interests and tastes. Viewing all this through our Virtual House Simulator would make your experience even more enriching. 

    </p>
    <p>
    <mark>[v] 3D/VR walkthrough of unbuilt structures:</mark><br/>
     Virtual reality (VR) is a computer-generated scenario that simulates the experience. The immersive environment can be similar to the real world or it can be fantastical, creating an experience not possible in our physical reality. This will help a person get a 100% experience of a project before one starts their construction. 
Simulation is nothing but an imitation of a situation or process. Virtual House Simulation is all about the fact when a 3D virtual house model becomes interactive and a person can seamlessly walk in a 3D model of a house. 3D/VR Walkthrough of unbuilt structure helps you to roam around in a virtual world and feel like it is a real house. 

    </p>
    <p>
    <mark>[vi] Inflated Mode Scanner:</mark><br/>
     Inflated mode scanner is the amazing technology where you can view your project on our specially designed blueprints, all you need to do is : 
1.Open the Inflated Mode Scanner in our application which is inside your project menu. 
2.Scan the blueprint when the camera turns on. 
3.Enjoy the technology of inflated model of your project on the blueprint. 

    </p>
    <p>
    <mark>[vii] 3D printout of project: </mark><br/>
    We provide a 3D model of the project; this can usually be preferred as a point of attraction to people to show your construction. 3D printing is process in which material is joined or solidified under computer control to create a three-dimensional object, with material being added together (such as liquid molecules or powder grains being fused together). 3D printing is used in both rapid prototyping and additive manufacturing. Objects can be of almost any shape or geometry and typically are produced using digital model data from a 3D model. The term "3D printing" originally referred to a process that deposits a binder material onto a powder bed with inkjet printer heads layer by layer.
    </p>
   </Fade>
</Grid>
    
</Box>
</Grid>

</Container>  
    )
}

export default Work

