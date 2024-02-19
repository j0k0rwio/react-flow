import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling App component
import Canvas from './components/Canvas'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap';

import Navbar from './components/Navbar';

import EnvironmentPage from './components/EnvironmentPage';


function App() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Canvas /></div>

    </div>
  );
}

export default App;
