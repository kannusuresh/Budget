import React from 'react';
import ReactDOM from 'react-dom';
import Login from './component/Login';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


ReactDOM.render(
  
  <BrowserRouter>
    <App />
    </BrowserRouter>,
  
  document.getElementById('root')
);

