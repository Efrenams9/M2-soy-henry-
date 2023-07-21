import React from "react";
import './SearchBar.css'
export default function SearchBar(props) {
   
   return (
      <div>
          <input 
          typeof="text"
          placeholder="Busca un personaje" type='text' />
         <button className="diseñoBoton" onClick={props.onSearch}>Agregar</button> 
      </div>
   );
}
