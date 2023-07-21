import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  //se encierrra App en BorweserRouter para que funcione la cong. de las routes en
  //App.js
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  
  document.getElementById('root')
)
