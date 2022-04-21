import * as React from 'react';
import './gallery.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import galleryData from './gallery_data.js';


const Gallery = () => {
	return (
		<>
		<div className='title'>
			GALLERY
		</div>
		{/* <div className='banner'></div>	 */}
		<div className='card-layout'>
			{galleryData.map((data) => {
				return (
					<div className='card-container'>
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								component="img"
								alt={data.alt}
								height={data.height}
								image={data.image}
								key={'key' + data.title}
							/>
							<CardContent>
								<Typography variant="subtitle1" component="div">
									{data.title}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{data.dimensions}
								</Typography>
							</CardContent>
						</Card>
					</div>
				)
			})}
		</div>
		</>
	);
}

export default Gallery;
