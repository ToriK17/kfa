import * as React from 'react';
import './gallery.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
type Props = {
	image: string
	title: string
	dimensions: number
	height: number
	alt: string
};

const GalleryCard = ({ image, title, dimensions, alt, height }: Props) => {
	return (
		<div className='card-container'>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component="img"
					alt={alt}
					height={height}
					image={image}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{dimensions}
					</Typography>
				</CardContent>
				{/* <CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn More</Button>
				</CardActions> */}
			</Card>
		</div>
	);
}

export default GalleryCard;
