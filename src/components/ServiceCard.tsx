import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardMedia, Typography } from '@mui/material';

const ServiceCard = () => {
  return (
    <>
        <Card sx={{ maxWidth: "250px", backgroundColor:'lightgray'}}>
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                DSI Chat
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    </>
  )
}

export default ServiceCard
