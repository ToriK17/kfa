import React from "react";
import './videos.scss';

const Videos = () => {

	return (
		<section>
			<h2>Please Visit &nbsp;<a href='https://www.youtube.com/channel/UCzz1Z-gsHb9w4bvj3Xh9REg'> Youtube </a> &nbsp;for full playlist and to Subscribe</h2>
			<iframe
				title="youtube video"
				width="560"
				height="315"
				src="https://www.youtube.com/embed/PmjtlK9fWoI"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen></iframe>
		</section>
	)

}
export default Videos;
