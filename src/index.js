import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Navbar from './Components/Navbar';
import ImageCard from './Components/ImageCard';
import Content from './Components/Content';
import Footer from './Components/Footer';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className='App App-tint'>
    <Navbar />
    <ImageCard />
    <Content />
    <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
