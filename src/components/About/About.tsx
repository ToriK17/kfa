import React from "react";
import './about.scss';


const AboutMe = () => {
	const profilePic =  require("../../assets/images/Jaime.jpg")
	return (
		<>
		<section className="container">
			<div className='left-half'>
				<h1>About Jaime Kafati</h1>
				<img className="profile-img" src={profilePic} alt="Jaime Kafati" />
			</div>
			<div className="right-half">
				<article className="about-description">
					<p>
						By way of introduction, I am a Salvadorian-American artist, following over 30 years of uniformed service, one tour in the US Marines, and 27+ years in law enforcement, I can now dedicate my full-time exploring and creating art. From an early age, before migrating from El Salvador to the United States, I was passionate about art. It was during a primary-school field trip to the San Salvador Museum of Art that I felt an immediate connection to the art world. Regrettably, art was not in the forefront of our family’s wants. As a descendant of two immigrant grandfathers to Central America from the Palestinian Diaspora, providing sustenance to a family and surviving in a new land was gave us a different outlook on life.
					</p>
					<p>
						In 1978, due to political unrest, my family and I migrated to the United States, and as a teenager, I attended Columbine High School (CHS), Littleton, CO, along with my brothers. It was there when we were placed in a diverse set of courses in order to listen and learn English. It was my exposure to art then that reignited that flame and desire to create. As a student, I was selected to be a part of a large mural at the CHS library; unfortunately, the mural was destroyed following the tragedy. I then joined the US Marines with hopes to save and enrolling in college. After one tour, I attended college and studied Liberal Arts and Science. After 2 ½ years, I was unable to continue, as family obligations pushed me to follow completely diverse paths, I’ve been a dishwasher, a stock-boy, later on, a sheriff deputy that retired as a captain, but all that time I continued to be an artist with every opportunity and instance I could grasp.
					</p>
					<p>
						Since my 2018 retirement from public life, I have a dedicated art studio in Denver, Colorado. Although oils are my primary medium, I love to experiment with a diverse set of mediums and styles. While my works are continually evolving in style and subject matter, the human condition occupies the central motif of my paintings.
					</p>
					<p>
						In November 2021, I was honored to be named a winner in the Integral Concept Latinoamerica art competition receiving higher scores in the category “Nuestra Identidad” (Our Identity) by a panel of international judges from Mexico, Colombia, and Argentina. My works selected were “The Weeping Sicario, Luke 23:42” and “Tribunal Mexicano”.
					</p>
					<p>
						To me, the canvas calls my name, it is a fountain of inspiration and life. It is the only place in this existence where I am in control. It is where the dust settles after the chaos, it is a place of great joy and tremendous frustration; and where more than once I’ve exorcised the demons that inhabit my soul.
					</p>
				</article>
			</div>
		</section>
		</>
	)

}
export default AboutMe;
