// Import React library
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import our App component
import App from './App.jsx';

// Import our styles
import './index.css';

// Render our App component inside the 'root' div in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);