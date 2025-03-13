import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Aos from 'aos';

Aos.init({
  duration: 1000,
  easing: 'ease-in-out',
  once:true,
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
