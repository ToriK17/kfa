import * as React from 'react';
import { useState, useEffect } from "react";
import './gallery.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface Painting {
  title?: string;
  dimensions?: string;
  mediaType?: string;
  imageFile?: {
    description?: string;
    url?: string;
  };
}

const Gallery = () => {
  const [data, setData] = useState<Painting[]>([]);

  const fetchContentfulData = async () => {
    const query = `
      {
        paintingPostCollection {
          items {
            title
            dimensions
            mediaType
            imageFile {
              description
              url
            }
          }
        }
      }
    `;

    try {
      const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();
      setData(result.data.paintingPostCollection.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchContentfulData();
  }, []);

  return (
    <>
      <div className='gallery-body'>
        <div className='gallery-side-spacing'></div>
        <div className='gallery-content'>
          <div className='card-layout'>
            {data.map((painting: Painting, index) => (
              <div className='card-container' key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  {painting.imageFile?.description && painting.imageFile?.url && (
                    <CardMedia
                      component="img"
                      alt={painting.imageFile.description}
                      image={painting.imageFile.url}
                      key={`key-${painting.mediaType}-${index}`}
                    />
                  )}
                  <CardContent>
                    <Typography variant="subtitle1" component="div" key={`key-${painting.title}-${index}`}>
                      {painting.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" key={`key-${painting.dimensions}-${index}`}>
                      {`${painting.mediaType}   ${painting.dimensions}`}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
