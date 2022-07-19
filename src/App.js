import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Navbar, NavbarBrand, Container } from 'reactstrap';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Header from './components/Header';
import ArraysList from './features/cards/arraysList';
import  Footer from "./components/footer"



import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <ArraysList/>
        <Footer/>
        <Routes>
          <Route path='/' />
          <Route path='/contact' />
          <Route path='/about us' />
          <Route path='/Buisness' />
          <Route path='/Education' />
          <Route path='/Charity' />
        </Routes>
      </Router>
    </div>


  );
}

export default App;
