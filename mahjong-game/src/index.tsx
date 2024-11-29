import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MultiLayerGrid from './components/MultiLayeredGrid';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div style={{position: 'relative'}}>
      <MultiLayerGrid />
    </div>

  </React.StrictMode>
);

reportWebVitals();
