


import React from 'react';


import './index.css';
import Calculator from './Calculator';

import { InfoBox } from './InfoBox';

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

export default App;