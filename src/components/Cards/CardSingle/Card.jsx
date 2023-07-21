import React from "react";
import './Card.css'
export default function Card(props) {
   return (
      <div className="card-container">
         <button className="close-button"  onClick={props.onClose}>X</button>
         <img src={props.image} alt='' />
         <div className="">
            <h2>{props.name}</h2>
            <h2>{props.status}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <h2>{props.origin}</h2>
         </div>
        
         
      </div>
   );
}
