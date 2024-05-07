import App from "./App"
import React from "react"
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.createRoot(
  document.getElementById('root')!).render(
  <React.StrictMode>
    <Router> 
      <App /> 
   </Router> 
  </React.StrictMode>,
)
