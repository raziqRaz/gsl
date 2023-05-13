import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from './component/SideNavBar/SideNav';
import HOME from './component/HOME/Home.js';
import Header from './component/Header/Header';

function App() {
  return (
    <div className='main'>
     <Header/>
     <BrowserRouter>
     
     <Sidebar/>

     <Routes>
    <Route path="/" element={<HOME/>} />

    
    
   </Routes> 
    </BrowserRouter> 
    </div>
  );
}

export default App;
