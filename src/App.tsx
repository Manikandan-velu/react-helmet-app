import React from 'react';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className="App">     
      <Header />
      <Landing />
    </div>
  );
}

export default App;
