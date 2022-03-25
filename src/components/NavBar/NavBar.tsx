import React from 'react';
import HomeButton from './HomeButton';
import './navbar.scss';


const NavBar = () => {
	const Logo =  require('../../assets/icons/favicon copy.ico')

	return (
		<nav className='nav-container'>
			<div className='inner-container'>
				<HomeButton/>
			</div>
			<img className="nav-img" src={Logo} alt="header logo" />
		</nav>
	)

}
export default NavBar;
