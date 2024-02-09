import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './components/Nav';
import reportWebVitals from './reportWebVitals';
import Container from '@mui/material/Container'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Nav />

    <Container>
      <App />
    </Container>
  </React.StrictMode>
);

reportWebVitals();
