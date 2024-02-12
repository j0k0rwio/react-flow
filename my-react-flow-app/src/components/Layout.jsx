// App.jsx
import React, { useState } from 'react';
import './Layout.css';

function Layout() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedElement, setDraggedElement] = useState(null);
  const [elementProperties, setElementProperties] = useState({});

  const handleMouseDown = (index, e) => {
    setSelectedElement(index);
    setIsDragging(true);
    const { offsetX, offsetY } = e.nativeEvent;
    setDraggedElement({ index, offsetX, offsetY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const { clientX, clientY } = e;
      const updatedElements = elements.map((el, index) => {
        if (index === selectedElement) {
          return {
            ...el,
            left: clientX - draggedElement.offsetX,
            top: clientY - draggedElement.offsetY,
          };
        }
        return el;
      });
      setElements(updatedElements);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDragStart = (e, elementType) => {
    e.dataTransfer.setData('elementType', elementType);
  };

  const handleDrop = (e) => {
    const elementType = e.dataTransfer.getData('elementType');
    const { clientX, clientY } = e;
    const newElement = {
      type: elementType,
      left: clientX - 50,
      top: clientY - 25,
    };
    setElements([...elements, newElement]);
  };

  const renderElements = () => {
    return elements.map((element, index) => (
      <div
        key={index}
        className={`element ${element.type}`}
        style={{ left: element.left, top: element.top }}
        onMouseDown={(e) => handleMouseDown(index, e)}
      >
        {element.type}
      </div>
    ));
  };

  const handlePropertyChange = (e) => {
    const { name, value } = e.target;
    setElementProperties({ ...elementProperties, [name]: value });
  };

  return (
    <div>
      <header className="header">
        {/* <div className="menu-icon">&#9776;</div> */}
        <h1 className="header-title">Flowchart Maker</h1>
      </header>

      <div
      className="app"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >


      <div className="sidebar">
        <div
          className="tool"
          draggable
          onDragStart={(e) => handleDragStart(e, 'start')}
        >
          Start
        </div>
        <div
          className="tool"
          draggable
          onDragStart={(e) => handleDragStart(e, 'action')}
        >
          Action
        </div>
        <div
          className="tool"
          draggable
          onDragStart={(e) => handleDragStart(e, 'decision')}
        >
          Decision
        </div>
      </div>
      <div className="canvas">{renderElements()}</div>
      
      <div className="panel">
        <h2>Properties</h2>
        {selectedElement !== null && (
          <div>
            <label htmlFor="property1">Property 1:</label>
            <input
              type="text"
              id="property1"
              name="property1"
              value={elementProperties.property1 || ''}
              onChange={handlePropertyChange}
            />
            <label htmlFor="property2">Property 2:</label>
            <input
              type="text"
              id="property2"
              name="property2"
              value={elementProperties.property2 || ''}
              onChange={handlePropertyChange}
            />
          </div>
        )}
      </div>
    </div>

    </div>
    
  );
}

export default Layout;
