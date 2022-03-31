import './App.scss';
import React from 'react';
import NavBar from '../NavBar/NavBar.tsx';
import AboutMe from '../AboutMe/AboutMe.tsx';

const App = () => {
  const background =  require("../../assets/images/canvas_adobe.jpeg")
  return (
    <div className="App">
      <div className='background'>
        <img src={background} className='background' alt="background" />
      </div>
      <NavBar/>
      <AboutMe/>

    </div>
  );
}

export default App;
