import './App.css';
import './components/Test';
import Test from './components/Test';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import classNames from "classnames";
import React, { useState, useEffect } from "react";
// import SmoothScroll from './components/Scroll';
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import Work from './components/Work';
// const isMobile = () => {
//   const ua = navigator.userAgent;
//   return /Android/i,
//   /webOS/i,
//   /iPhone/i,
//   /iPad/i,
//   /iPod/i,
//   /BlackBerry/i,
//   /Windows Phone/i.test(ua);
// };
const isMobile = () => {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Windows Phone|Opera Mini|Mobi/i.test(navigator.userAgent)){
    return true
}
else{
    return false
}
  // return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Windows Phone|Opera Mini/i.test(ua);
};
const Cursor = () => {
 

 const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  const addEventListeners = React.useCallback(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  }, []);

  const removeEventListeners = React.useCallback(() => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  }, []);

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, [addEventListeners, removeEventListeners]);

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };

  const cursorClasses = classNames("cursor", {
    "cursor--clicked": clicked,
    "cursor--hidden": hidden,
    "cursor--link-hovered": linkHovered
  });
  if (typeof navigator !== "undefined" && isMobile()) return null;
  
  return (
      <div
          className={cursorClasses}
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
  );
};
function App() {

  return (
    <div className="app" id="main">
<Router>
 <Cursor/>
 
 {/* <SmoothScroll> */}


 <Navbar />

 <Switch>
   <Route path='/' exact component={Test} />
   <Route path='/aboutme' exact component={Aboutme} />
   <Route path='/work' exact component={Work} />
 </Switch>


 {/* </SmoothScroll> */}
 
    </Router>
    <div id="gap">
    <Footer/>
    </div>
  
    </div>
    
   
    
   
  );
}

export default App;
