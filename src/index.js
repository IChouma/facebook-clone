import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

  
  if (localStorage.getItem("theme")==='light'){
  document.body.classList.remove('dark-theme')
}
else if(localStorage.getItem("theme")==='dark'){
  document.body.classList.add('dark-theme')
}else{
  localStorage.setItem("theme","light")
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


