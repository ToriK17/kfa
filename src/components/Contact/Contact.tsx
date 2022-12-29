import React from "react";
import './contact.scss';
import ButtonMailto from "./MailButton";
// import InstagramIcon from '@mui/icons-material/Instagram';


const Contact = () => {
	const contactPic =  require("../../assets/images/oxen.png")
	return (
		<>
		<section className="contact-container">
			<div className='left-half'>
				<h1></h1>
				<img className="contact-img" src={contactPic} alt="Jaime Kafati" />
			</div>
			<div className="right-half">
				<article className="about-description">
				<h1>Get in touch</h1>
					<p>
						If there is a piece that you're interested in purchasing, please <ButtonMailto label="send me an email" mailto="mailto:jeskb57@gmail.com" />, and I would be happy to discuss further details.
					</p>
					{/* <h3>Other ways to stay up to date</h3>
					<p>
						<a className='media-links' href='https://www.instagram.com/kafati_art_studio/?hl=en'>
							<InstagramIcon sx={{ color: 'black' }}/> Instagram
						</a>
					</p> */}
				</article>
			</div>
		</section>
		</>
	)

}
export default Contact;
