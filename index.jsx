import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge/Badge.jsx"

function App() {
  return (
    <>
    <h1 className="heading">Badges</h1>
      <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
        <span className="badge-shape">SQUARE</span>
        <Badge color="gray" shape="square">Badge</Badge>
        <Badge color="red" shape="square">Badge</Badge>
        <Badge color="yellow" shape="square">Badge</Badge>
        <Badge color="green" shape="square">Badge</Badge>
        <Badge color="blue" shape="square">Badge</Badge>
        <Badge color="indigo" shape="square">Badge</Badge>
        <Badge color="purple" shape="square">Badge</Badge>
        <Badge color="pink" shape="square">Badge</Badge>
      </div>
      <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
        <span className="badge-shape">PILL</span>
        <Badge color="gray" shape="pill">Badge</Badge>
        <Badge color="red" shape="pill">Badge</Badge>
        <Badge color="yellow" shape="pill">Badge</Badge>
        <Badge color="green" shape="pill">Badge</Badge>
        <Badge color="blue" shape="pill">Badge</Badge>
        <Badge color="indigo" shape="pill">Badge</Badge>
        <Badge color="purple" shape="pill">Badge</Badge>
        <Badge color="pink" shape="pill">Badge</Badge>
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
