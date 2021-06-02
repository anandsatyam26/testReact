import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Route exact path="/">
      <Home />
      </Route>
      <Route path="/about">
      <About />
      </Route>
     
      
    </>
  )
}

export default App
