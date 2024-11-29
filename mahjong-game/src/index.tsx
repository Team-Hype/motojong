import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MultiLayerGrid from './components/MultiLayeredGrid';
import { Level } from './components/game/Level';
import { TestLevel } from './components/game/levels/TestLevel';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div style={{position: 'relative'}}>
      <MultiLayerGrid level={new TestLevel()}/>
    </div>

  </React.StrictMode>
);

reportWebVitals();

