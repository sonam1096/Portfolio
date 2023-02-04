import React from "react";
 import './index.css'
 import Home from "./Routes/Home";
 import About from "./Routes/About";
import Project from "./Routes/Project";
import Contact from "./Routes/Contact";
import {Route ,Routes} from "react-router-dom"
const App=()=>{
     return(
        
            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/project" element={<Project/>}/>
               <Route path="/contact" element={<Contact/>}/>
               </Routes> 
        
        
     )
}

export default App