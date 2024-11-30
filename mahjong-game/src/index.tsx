import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MultiLayerGrid from './components/MultiLayeredGrid';
import { Level } from './components/game/Level';
import { TestLevel } from './components/game/levels/TestLevel';
import { BMWLevel } from './components/game/levels/BmwLevel';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div style={{position: 'relative'}}>
      <MultiLayerGrid given_level={new BMWLevel()}/>
    </div>

  </React.StrictMode>
);

reportWebVitals();

