import './App.scss';
import React from 'react';
import NavBar from '../NavBar/NavBar.tsx';
import { Outlet} from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
    </div>
  );
}

export default App;
