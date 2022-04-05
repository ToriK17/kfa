import * as React from 'react';
import './gallery.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import galleryData from './gallery_data.js';

const GalleryCard = () => {
	return (
		<>
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
							<Typography gutterBottom variant="h5" component="div">
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
		</>
	);
}

export default GalleryCard;
