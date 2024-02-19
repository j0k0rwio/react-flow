import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling App component
import Canvas from './components/Canvas';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Canvas /></div>

    </div>
  );
}

export default App;
