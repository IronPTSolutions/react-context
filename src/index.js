import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeContextProvider>
  </BrowserRouter>
);



// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
