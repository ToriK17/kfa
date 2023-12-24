import * as React from 'react';
import { render } from "react-dom";
import './index.scss';
import App from './components/App/App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Videos from './components/Videos/Videos';
import NoMatch from './components/NoMatch/NoMatch';



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Gallery />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>
  ,
  rootElement
);
