import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing/Landing';
import Header from './components/Header/Header';
import { Helmet, HelmetProvider, HelmetData } from 'react-helmet-async';

function App() {
  return (
    <div className="App">     
      <Header />
      <Landing />
    </div>
  );
}

export default App;
