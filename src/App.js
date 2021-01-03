import './App.css';
import './components/Test';
import Test from './components/Test';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from "react";
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import Work from './components/Work';
import Fab from '@material-ui/core/Fab';
import { MdKeyboardArrowUp } from 'react-icons/md';
function App() {
  function scrolltop() {
    // e.preventDefault();
    // var elmnt = document.getElementById("topheader");
    // elmnt.scrollIntoView({behavior: "smooth"});
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
  }
  return (
    <React.Fragment>
    {/* <div className="App"> */}
<Router>


 <Navbar/>

 <Switch>
   <Route path='/' exact component={Test} />
   <Route path='/aboutme' exact component={Aboutme} />
   <Route path='/work' exact component={Work} />
 </Switch>
 <Fab onClick={() => {scrolltop();}} color="secondary" size="small" aria-label="add" style={{position:"fixed",bottom:"20px",right:"20px"}}> 
          <MdKeyboardArrowUp style={{height:"30px",width:"30px"}}/>
        </Fab>
 {/* <Footer/> */}

 <Footer/>
    </Router>
    
  
    {/* </div> */}
    </React.Fragment>

    
   
    
   
  );
}

export default App;
