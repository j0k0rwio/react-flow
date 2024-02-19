import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling App component
import Canvas from './components/Canvas';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap';

function App() {
  return (
    <div className='layout'>
      <div><Canvas /></div>
    </div>
  );
}

export default App;
