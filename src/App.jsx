import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Service from './Service.jsx';
import Navbar  from './Navbar.jsx';
import Project  from './Project.jsx';

import { Switch,Route,Redirect } from 'react-router';
import Footer from './Footer.jsx';



const App=()=>{
  return(
    <>
    <Navbar/>
    <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/about" component={About}/>
   <Route exact path="/service" component={Service}/>
   <Route exact path="/contact" component={Contact}/>
   <Route exact path="/project" component={Project}/>

   <Redirect to="/" />
   
    </Switch>
    <Footer/>
    </>
  );
};
export default App;
