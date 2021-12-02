import React from 'react';
import { NavLink } from 'react-router-dom';

const Project=()=>{


    return(
        <>
               <div className="main">
                   <h1>This is my project section</h1><hr/>
                   <table class="table">
  <thead class="thead-dark">
    <tr>
     
      <th scope="col">Project Name</th>
      <th scope="col">Github Link</th>
      <th scope="col">Heroku Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>Weather app</td>
      <td><NavLink to="https://github.com/Harsh-pixal/prime-weather">Click here</NavLink></td>
      
      <td><NavLink to="https://prime-weather-react.herokuapp.com/">Click here</NavLink></td>
    </tr>
    <tr>
    <td>Realtime chat app</td>
      <td><NavLink to="https://github.com/Harsh-pixal/chatboat">Click here</NavLink></td>
     
      <td><NavLink to="https://ichat-prime.herokuapp.com/">Click here</NavLink></td>
    </tr>
    <tr>
    <td>Todo list app</td>
     
      <td><NavLink to="https://github.com/Harsh-pixal/Todolist">Click here</NavLink></td>
     
      <td><NavLink to="https://prime-todo-list-app.herokuapp.com/">Click here</NavLink></td>
    </tr>
    <tr>
    <td>Covid19 tracker app</td>
     <td><NavLink to="https://github.com/Harsh-pixal/covid19">Click here</NavLink></td>
    
     <td>      <td><NavLink to="https://covid19-prime-app.herokuapp.com/">Click here</NavLink></td>
</td>
   </tr>
   <tr>
   <td>Google keep app</td>
     
     <td><NavLink to="#">Click here</NavLink></td>
    
          <td><NavLink to="">Click here</NavLink></td>

   </tr>
   <tr>
   <td>Algorithm visualizer app</td>
     
     <td><NavLink to="#">Click here</NavLink></td>
    
          <td><NavLink to="">Click here</NavLink></td>

   </tr>
  </tbody>
</table>


               </div>
        </>
    )
}
export default Project;