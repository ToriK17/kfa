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

					<p><NavLink to='/' className='nav-link' >Home</NavLink></p>
					<p className='nav-link' >Gallery</p>
					<p className='nav-link' >About</p>
					<p className='nav-link' >Videos</p>
					<p className='nav-link' >Contact</p>
				</div>
				{/* <a style='nav-link' href='#'>Home</a> */}
			</div>
			{/* <img className="nav-img" src={Logo} alt="header logo" /> */}
		</nav>
		</>
	)

}
export default NavBar;
