import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Aos from 'aos';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';
import { Notifications } from '@mantine/notifications';
import { Carousel } from '@mantine/carousel';

Aos.init({
  duration: 1000,
  easing: 'ease-in-out',
  once:true,
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <MantineProvider withGlobalClasses withCssVariables>
    <Notifications/>
    <Router>
      <App />
    </Router>
  </MantineProvider>
  </StrictMode>
);
