import './App.css';
import React from 'react'
import Trains from './components/Trains';
import Ferry from './components/Ferry'
import Tram from './components/Tram';

function App() {
  return (
    <React.Fragment>
      <Trains/>
      <Ferry/>
      <Tram/>
    </React.Fragment>
  );
}

export default App;
