import React from 'react'
import Login from './components/LoginPage/Login';
import Sigup from './components/SigupPage/Sigup';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Posts from './components/Main/Posts';
import NavBar from './components/NavBar/NavBar';
import Main from './components/MainPage/Main';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' Component={Main} />
      <Route path= '/login' Component={Login} />
      <Route path ='/sigup' Component={Sigup} />
      <Route path='/admin' Component={Posts} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;