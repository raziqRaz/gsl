import React, { useState } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from './component/SideNavBar/SideNav';
import HOME from './component/HOME/Home.js';
import Header from './component/Header/Header';
import Sample from './component/HOME/Sample';

function App() {
  const [isHover, setIsHover] = useState(true);

  const mouseOnEnter = ()=>{
    setIsHover(false)
  }
  const mouseOnLeave = ()=>{
    setIsHover(true)
  }
  return (
    <div className='main'>
     <Header/>
     <BrowserRouter>
     
     <Sidebar mouseOnEnter = {mouseOnEnter} mouseOnLeave={mouseOnLeave} isHover={isHover}/>

     <Routes>
    <Route path="/" element={<HOME toggle={isHover}/>} />
    
    <Route path="/Leads" element={<Sample toggle={isHover}/>} />

    

    
    
   </Routes> 
    </BrowserRouter> 
    </div>
  );
}

export default App;
