import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling App component
import Canvas from './components/Canvas';
<<<<<<< HEAD
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap';
=======
import Navbar from './components/Navbar';
import EnvironmentPage from './components/EnvironmentPage';
>>>>>>> c8c796bb526962a740aa9689f7e43f6543300d1c

function App() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Canvas /></div>
      <div><EnvironmentPage /></div>
    </div>
  );
}

export default App;
