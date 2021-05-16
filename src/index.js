 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js')
        .then(function(registeration){
            
            console.log('Registration successful, scope is :',registeration.scope);
        }).catch(function (error){
            console.log('Service worker registration failed,error',error);
    })
}
 //Message form 1620701795 Give Me A SenPai