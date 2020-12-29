import './App.css';
import './components/Test';
import Test from './components/Test';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from "react";
// import SmoothScroll from './components/SmoothScroll';
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import Work from './components/Work';
function App() {

  return (
    <div className="App">
<Router>

 
 {/* <SmoothScroll> */}


 <Navbar />

 <Switch>
   <Route path='/' exact component={Test} />
   <Route path='/aboutme' exact component={Aboutme} />
   <Route path='/work' exact component={Work} />
 </Switch>

 {/* <Footer/> */}
 {/* </SmoothScroll> */}
 <Footer/>
    </Router>
    
  
    </div>
    
   
    
   
  );
}

export default App;
