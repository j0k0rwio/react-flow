import React, { useState, useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

import { AiFillAppstore } from "react-icons/ai";

import "reactflow/dist/style.css";
import "./Canvas.css";

import toolsData from "./nodes.json";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "Tool 1" } },
  { id: "2", position: { x: 30, y: 200 }, data: { label: "Tool 2" } },
  { id: "3", position: { x: 100, y: 0 }, data: { label: "Tool 3" } },
  { id: "4", position: { x: 100, y: 100 }, data: { label: "Tool 4" } }, // New node
  { id: "5", position: { x: 200, y: 0 }, data: { label: "Tool 5" } }, // New node
  { id: "6", position: { x: 200, y: 100 }, data: { label: "Tool 6" } },
];
const initialEdges = [
  // { id: "e1-2", source: "1", target: "2" },
  // { id: "e2-3", source: "2", target: "3" },
  // { id: "e3-4", source: "3", target: "4" }, // New edge from Tool 2 to Tool 4
  // { id: "e4-5", source: "4", target: "5" }, // New edge from Tool 3 to Tool 5
  // { id: "e5-6", source: "5", target: "6" },
];

function Canvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [tools, setTools] = useState ("");
  
  const appendMethod = (toolData) => {
    const newNodeId = (nodes.length + 1).toString();
    const newNode = {
      id: newNodeId,
      position: { x: 400, y: 400 },
      data: { label: toolData },
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <>
      <div className="Thinbar1">
         <h2>Manage Blueprint</h2>
         <button className="btn">Update</button>
      </div>

      <div className="layout">
        <div className="sidebar">
          <div className="tool-section">
            <h3>External Client</h3>

            <div className="tool-row"> {toolsData.map((data) => (<button className="Sidebar-menu" onClick={() => appendMethod(data.name)}>{data.label}</button>))}</div>


            {/* <div className="tool-row">
              <div className="tool" onClick={appendMethod}><AiFillAppstore /></div>
              <div className="tool" onClick={appendMethod}><AiFillAppstore /></div>
              <div className="tool"><AiFillAppstore /></div>
            </div>
            <div className="tool-row">
              <div className="tool"><AiFillAppstore /></div>
              <div className="tool"><AiFillAppstore /></div>
            </div> */}
          </div>

          
        </div>

        
        <div className="canvas-container">
          <div className="canvas">
            <div style={{ width: "60vw", height: "90vh" }}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                elements={nodes.concat(edges)}
                
              >
                <Controls />
                <MiniMap />
                <Background variant="dots" gap={12} size={1} />
              </ReactFlow>
            </div>
          </div>
        </div>

        <div className="Rightbar">
         <h3 className="title">Edit Properties</h3>
         <div className="edit"> </div>
         <div className="edit"> </div>
         <div className="edit"> </div>
         <div className="edit"> </div>
         <div className="edit"> </div>
         <div className="edit"> </div>
         <div className="edit"> </div>
      </div>


      </div>
    </>
  );
}

export default Canvas;
