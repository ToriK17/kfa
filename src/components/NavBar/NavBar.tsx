import React from 'react';
import { NavLink} from "react-router-dom";
import HomeButton from './HomeButton';
import './navbar.scss';


const NavBar = () => {

	return (
		<>
		<nav className='nav-container'>
      <NavLink to='/'><HomeButton/></NavLink>
			<div className='inner-container'>
				<div className='nav-links'>
					<NavLink to='/' className='nav-link' >Home</NavLink>
					<NavLink to='/gallery' className='nav-link' >Gallery</NavLink>
					<NavLink to='/about' className='nav-link' >About</NavLink>
					<NavLink to='/videos' className='nav-link' >Videos</NavLink>
					<NavLink to='/contact' className='nav-link' >Contact</NavLink>
				</div>
				{/* <a style='nav-link' href='#'>Home</a> */}
			</div>
		</nav>
		</>
	)

}
export default NavBar;
