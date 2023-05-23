import React, { useState } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from './component/SideNavBar/SideNav';
import HOME from './component/HOME/Home.js';
import Header from './component/Header/Header';
import Sample from './component/HOME/Sample';
import LeadsMain from './component/Leads/LeadsMain'
import All_leadListTable from './component/Leads/All_leadListTable';
import Login from './component/auth/login/Login';
import SampleTable from './component/Table/SampleTable';

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

    <Route path="/login" element={<Login toggle={isHover}/>} />
    
    <Route path="/sample" element={<Sample toggle={isHover}/>} />

    <Route path="/table" element={<SampleTable toggle={isHover}/>} />

    <Route path="/Leads" element={<LeadsMain toggle={isHover} tab1={<All_leadListTable toggle={isHover}/>}/>} />

    

    

    
    
   </Routes> 
    </BrowserRouter> 
    </div>
  );
}

export default App;
