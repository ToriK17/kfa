import React from 'react';
import HomeButton from './HomeButton';
import './navbar.scss';


const NavBar = () => {
	// const Logo =  require('../../assets/icons/favicon copy.ico')

	return (
		<nav className='nav-container'>
				<HomeButton/>
			<div className='inner-container'>
				<div className='nav-links'>
					<p className='nav-link' >Home</p>
					<p className='nav-link' >Gallery</p>
					<p className='nav-link' >About</p>
					<p className='nav-link' >Videos</p>
					<p className='nav-link' >Contact</p>
				</div>
				{/* <a style='nav-link' href='#'>Home</a> */}
			</div>
			{/* <img className="nav-img" src={Logo} alt="header logo" /> */}
		</nav>
	)

}
export default NavBar;
