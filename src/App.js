import React from 'react';
import './App.css';
import imagenLogo from './Imagenes/logo.png'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/NavBar/Nav';
import {Routes, Route} from "react-router-dom"

function App() {
   const [characters, setCharacters]=React.useState([])

   function onSearch(){
      setCharacters([...characters, {}])
   }
   return (
      <div className='app-container'>
         <Routes>
            <Route path='/' element={<h1>hola bienvenido</h1>} ></Route>
            <Route path='/home' element= <Cards characters={characters} onClose={onClose} /> ></Route>
            <Route path='/about' element= > {<h1>soy el about</h1>}</Route>
         </Routes>
         <div className='App'>
         <img src={imagenLogo} className="imagenEntrada" alt='No aparece la imagen xd'></img>
         
         </div>
      </div>
      
   );
}
{/* <Nav onSearch={onSearch    }/>
         */}
        

export default App;
