import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css' // Fixed import path
import App from './App'

console.log('Mounting React application...');

const rootElement = document.getElementById('root');
console.log('Root element found:', rootElement);

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  console.log('React rendered successfully');
}
