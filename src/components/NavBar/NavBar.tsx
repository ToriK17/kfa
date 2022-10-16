import React from 'react';
import { Link } from "react-router-dom";
import './navbar.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const NavBar = () => {
	const saLogo =  require("../../assets/icons/sa-logo.png")

	return (
		<>
		<nav className='nav-container'>
      <Link to='/gallery' className='home-button'>Kafati Art Studio</Link>
			<div className='inner-container'>
				<div className='nav-links'>
					<Link to='/gallery' className='nav-link' >Gallery</Link>
					<Link to='/about' className='nav-link' >About</Link>
					<Link to='/videos' className='nav-link' >Videos</Link>
					<Link to='/contact' className='nav-link' >Contact</Link>
						<a className='media-links' href='https://www.instagram.com/kafati_art_studio/?hl=en'>
							<InstagramIcon sx={{ color: 'white' }}/>
						</a>
						<a className='media-links' href='https://www.facebook.com/jaime.kafati.5'>
							<FacebookIcon sx={{ color: 'white' }}/>
						</a>
						<a className='media-links' href='https://www.youtube.com/channel/UCzz1Z-gsHb9w4bvj3Xh9REg'>
						  <YouTubeIcon sx={{ color: 'red' }}/>
						</a>
						<a className='media-links' href='https://www.saatchiart.com/kafati'>
							<img src={saLogo} className='sa-art' alt="saatchi art logo" />
						</a>
				</div>
			</div>
		</nav>
		</>
	)

}
export default NavBar;
