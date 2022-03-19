import './App.scss';
import React from 'react';
import NavBar from '../NavBar/NavBar.tsx';
import AboutMe from '../AboutMe/AboutMe.tsx';

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <AboutMe/>

    </div>
  );
}

export default App;
