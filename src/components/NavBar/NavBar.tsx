import React from 'react';
// @ts-ignore
import Logo from '../../assets/icons/favicon copy.ico';
import './navbar.scss';


const NavBar = () => {

	return (
		<nav className='nav-container'>
			<h1>someText</h1>
			<img className="nav-img" src={Logo} alt="header logo" />
		</nav>
	)

}
export default NavBar;
