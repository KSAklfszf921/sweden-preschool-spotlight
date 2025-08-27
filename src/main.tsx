import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Handle GitHub Pages SPA redirect
const redirect = sessionStorage.getItem('redirect');
if (redirect) {
  sessionStorage.removeItem('redirect');
  history.replaceState(null, '', redirect);
}

createRoot(document.getElementById("root")!).render(<App />);
