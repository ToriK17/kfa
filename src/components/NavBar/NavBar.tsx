import React from 'react';
import { Link } from "react-router-dom";
import HomeButton from './HomeButton';
import './navbar.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const NavBar = () => {
	const saLogo =  require("../../assets/icons/sa-logo.png")

	return (
		<>
		<nav className='nav-container'>
      <Link to='/'><HomeButton/></Link>
			<div className='inner-container'>
				<div className='nav-links'>
					<Link to='/' className='nav-link' >Home</Link>
					<Link to='/gallery' className='nav-link' >Gallery</Link>
					<Link to='/about' className='nav-link' >About</Link>
					<Link to='/videos' className='nav-link' >Videos</Link>
					<Link to='/contact' className='nav-link' >Contact</Link>
					<InstagramIcon sx={{ color: 'white' }}/>
					<FacebookIcon sx={{ color: 'white' }}/>
					<img src={saLogo} className='sa-art' alt="saatchi art logo" />
				</div>
			</div>
		</nav>
		</>
	)

}
export default NavBar;
