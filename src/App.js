import React, { Component} from 'react';
import "./styles.css";
import Routes from './routes';


import Header from './componentes/Header';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
