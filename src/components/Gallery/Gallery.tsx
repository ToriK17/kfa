import * as React from 'react';
import {useState, useEffect} from "react";
import './gallery.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Gallery = () => {
	 // define the initial state
	interface data {
		title?: string
		dimension?: string
		mediaType?: string
		imageFile?: any
		dataObj?: any
	}

	const [data, setData] = useState<any>([]);
	const query = `
	{
		paintingPostCollection {
			items {
				title
				dimensions
				mediaType
				imageFile {
				  title
				  description
				  contentType
				  fileName
				  size
				  url
				  width
				  height
				}
			}
		}
	}
	`
	useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
			.then((data) => {
        setData(data.data.paintingPostCollection.items)
      })
			.catch((err) => {
        console.log(err);
      });
  }, []);

	let galleryObj = data
	console.log(data.map((g:any) => g) || {})

	return (
		<>
		<div className='title'>
		</div>
		<div className='card-layout'>
			{galleryObj.map((data:any) => {
				return (
					<div className='card-container'>
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								component="img"
								alt={data.imageFile.description}
								image={data.imageFile.url}
								key={'key' + data.mediaType}
							/>
							<CardContent>
								<Typography variant="subtitle1" component="div" key={'key' + data.title}>
									{data.title}
								</Typography>
								<Typography variant="body2" color="text.secondary" key={'key' + data.dimensions}>
									{data.mediaType + "   " + data.dimensions}
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
