import React from 'react';
import { NavLink } from 'react-router-dom';
// import web from '../src/images/software.jpg';



const Card = (props) => {
  return (
    <>
    <div className="col-md-4 col-10 mx-auto">
          <div class="card">
  <img src={props.imgsrc} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">{props.sum}</p>
    <NavLink to="#"className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
</div>
        
      </>
  );
};
export default Card;
