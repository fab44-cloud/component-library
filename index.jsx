import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge/Badge.jsx"

function App() {
  return (
    <Badge>Success</Badge>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
