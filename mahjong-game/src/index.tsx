import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Grid from './components/grid';
import MultiLayerGrid from './components/grid';
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
