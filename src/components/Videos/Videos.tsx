import React from "react";
import './videos.scss';
import videoList from './video_list';

const Videos = () => {

	return (
		<section>
			<h2>Please Visit &nbsp;<a href='https://www.youtube.com/channel/UCzz1Z-gsHb9w4bvj3Xh9REg'>Youtube</a> &nbsp;for full playlist and to Subscribe</h2>

			{videoList.map((data) => {
				return (
					<iframe
						title={data.title}
						width="560"
						height="315"
						src={data.src}
						key={data.src + data.title}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
					</iframe>
				)
			})}

		</section>
	)

}
export default Videos;
