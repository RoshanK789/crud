import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import User from './Pages/User';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Edit from './Pages/Edit';
import Create from './Pages/Create';

const App = () => {
  const[id,setId]=useState(0); 
  return (
    <div>
      
      <BrowserRouter> 
      <div>
      <NavBar />
      </div>
      <Routes>
        <Route path='/' element={<Home setId={setId} />} />
        <Route path='/User' element={<User  />} />
        <Route path='/Edit/:id' element={<Edit id={id}/>} />
        <Route path='/create' element={<Create />} />
      </Routes>
      <div>
      <Footer />
      </div>
      </BrowserRouter>
      
    </div>
  );
};

export default App;