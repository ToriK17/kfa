import React from 'react';
import HomeButton from './HomeButton';
import './navbar.scss';


const NavBar = () => {
	// const Logo =  require('../../assets/icons/favicon copy.ico')

	return (
		<nav className='nav-container'>
			<div className='inner-container'>
				<HomeButton/>
				<div className='nav-link-box'>
					<button className='nav-link' >Home</button>
					<button className='nav-link' >Gallery</button>
					<button className='nav-link' >About</button>
					<button className='nav-link' >Videos</button>
					<button className='nav-link' >Contact</button>
				</div>
				{/* <a style='nav-link' href='#'>Home</a> */}
			</div>
			{/* <img className="nav-img" src={Logo} alt="header logo" /> */}
		</nav>
	)

}
export default NavBar;
