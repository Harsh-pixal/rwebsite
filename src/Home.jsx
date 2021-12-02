import React from 'react';
// import {NavLink} from 'react-router-dom';
import web from '../src/images/h.gif';
import Common from './Common.jsx';


const Home = () => {
    return (
        <>
        <Common
              name="Grow your skills with"
           imgsrc={web}
          visit="/service"
          btnname="Get started"
        />
        </>
    );
};
export default Home;
