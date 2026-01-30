// App.jsx - Main component that imports other components

// Import React
import React from 'react';

// Import CSS file
import './index.css';

// DEFAULT IMPORT - importing Calculator component
// When a component uses "export default", you can import it with any name
import Calculator from './Calculator';

// NAMED IMPORT - importing InfoBox component
// When a component uses "export function", you must use curly braces {}
// and the exact name
import { InfoBox } from './InfoBox';

// Main App component
function App() {
  return (
    <div className="app">
      {/* Using the imported Calculator component */}
      <Calculator />
      
      {/* Using the imported InfoBox component */}
      <InfoBox />
    </div>
  );
}

// Export the App component as default
// This allows other files to import it
export default App;