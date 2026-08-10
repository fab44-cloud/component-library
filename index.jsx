import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge/Badge.jsx"

function App() {
  return (
    <div>
      <Badge color="gray">Badge</Badge>
      <Badge color="red">Badge</Badge>
      <Badge color="yellow">Badge</Badge>
      <Badge color="green">Badge</Badge>
      <Badge color="blue">Badge</Badge>
      <Badge color="indigo">Badge</Badge>
      <Badge color="purple">Badge</Badge>
      <Badge color="pink">Badge</Badge>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
