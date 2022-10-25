import React from 'react';
import ReactDOM from 'react-dom/client';
import Topo from './Topo';
import Corpo from './Corpo';
import Rodape from './Rodape';
import './style.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Topo />
    <Corpo />
    <Rodape />
  </React.StrictMode>
);
