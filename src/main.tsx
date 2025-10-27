import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

function AppWithSplash() {
  useEffect(() => {
    const splashScreen = document.getElementById('splash-screen');

    const hideSplash = () => {
      if (splashScreen) {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
          splashScreen.style.display = 'none';
        }, 500);
      }
    };

    if (document.readyState === 'complete') {
      setTimeout(hideSplash, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(hideSplash, 1000);
      });
    }
  }, []);

  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithSplash />
  </StrictMode>
);
