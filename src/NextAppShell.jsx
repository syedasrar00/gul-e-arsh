import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

export default function NextAppShell() {
  return (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}
