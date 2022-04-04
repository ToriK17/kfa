import './App.scss';
import React from 'react';
import NavBar from '../NavBar/NavBar.tsx';
import AboutMe from '../AboutMe/AboutMe.tsx';
import GalleryCard from '../Gallery/Gallery.tsx';
import HomePage from 'src/pages/screens/HomePage';
import { Routes, Route } from 'react-router-dom';
import Divider from '@mui/material/Divider';


const App = () => {
  const background =  require("../../assets/images/45-degree-fabric-light.png")

  return (
    <div className="App">
      <div className='background'>
        <img src={background} className='background' alt="background" />
      </div>
      <NavBar/>
      <HomePage/>
      <Divider className='divider' textAlign="left">GALLERY</Divider>
      <div className='card-container'>
        <GalleryCard/>
      </div>
      <Routes>
        <Route path="/about" element={<AboutMe />} />
      </Routes>

    </div>
  );
}

export default App;
