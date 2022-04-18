import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { render } from "react-dom";
import './index.scss';
import App from './components/App/App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
