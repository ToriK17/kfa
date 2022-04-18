import './App.scss';
import React from 'react';
import NavBar from '../NavBar/NavBar.tsx';
import { Outlet} from "react-router-dom";


const App = () => {
  const background =  require("../../assets/images/45-degree-fabric-light.png")

  return (
    <div className="App">
      <div className='background'>
        <img src={background} className='background' alt="background" />
      </div>
      <NavBar/>
      <Outlet/>
    </div>
  );
}

export default App;
