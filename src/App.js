import React, { useState } from 'react';
import "./App.css"
import LoginPage from './pages/Login';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import { auth } from "./config/firebase";


function App() {
  const [search, setSearch] = useState('')
  const [currentEmail, setCurrentEmail] = useState(auth?.currentUser?.email)
  const location = useLocation()
  

  return (
    <div className='container'>
      {
      location.pathname === '/' ? null
      : 
        // NAVBAR
        <NavBar search={search} setSearch={setSearch} setCurrentEmail={setCurrentEmail} currentEmail={currentEmail}/>
      }
      {/* ROUTES */}
      <Routes>
        <Route path='/' 
        element={<LoginPage currentEmail={currentEmail} 
        setCurrentEmail={setCurrentEmail}/>} exact/>
        <Route path='/home' element={<HomePage search={search}/>} />
      </Routes>
    </div>
  );
}

export default App;
