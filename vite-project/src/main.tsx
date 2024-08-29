import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './index.css';

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Root element not found');
}
