import * as React from 'react';
import { render } from "react-dom";
import './index.scss';
import App from './components/App/App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Videos from './components/Videos/Videos';


const rootElement = document.getElementById("root");
const background =  require("./assets/images/45-degree-fabric-light.png")
render(
  <div className='background'>
    <img src={background} className='background' alt="background" />
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </div>,
  rootElement
);
