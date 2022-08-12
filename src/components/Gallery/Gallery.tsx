import * as React from 'react';
import {useState, useEffect} from "react";
import './gallery.scss'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import galleryData from './gallery_data.js';


const Gallery = () => {
	 // define the initial state
	interface image {
		title?: string
		dimension?: string
		mediaType?: string
		imageFile?: any
		dataObj?: any
	}

	const [image, setImage] =  useState<any>([])
	const [dataObj, setValue] =  useState<any>([])
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
    window.fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}/`, {
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
      .then(({ data, errors }) => {
        if (errors) {
          // console.error(errors);
        }

        // rerender the entire component with new data
				// debugger

				console.log(data.paintingPostCollection.items[0].title)
				// setValue(data.paintingPostCollection.items[0].dimensions) works
				setValue(data.paintingPostCollection)
				// return data.paintingPostCollection.items[0].title
        // setImage(data.paintingPostCollection.items[0]);
				setImage(data.paintingPostCollection.items[0].imageFile.url)


      });
  }, []);


	const galleryObj:any = dataObj.items
	console.log(galleryObj.map((galleryObj:any) => galleryObj))


	return (
		<>
		<div className='title'>
			GALLERY
		</div>
		{/* <div className='banner'></div>	 */}
		{/* {!dataObj && 'LOADING'} */}
		{/* <p>{dataObj!.title || ""}</p> */}
		<div className='card-layout'>
			{/* {galleryObj} */}
			{/* <img src = {image} alt = "painting"/> */}
			{/* {galleryObj.map((data:any) => {
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
			})} */}
		</div>
		</>
	);
}

export default Gallery;
