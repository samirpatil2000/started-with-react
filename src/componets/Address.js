import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function Address({address}) {
    function handleClick(){
        console.log(address.name)
        console.log("Clicked..!")
    }
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={handleClick}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://images.pexels.com/photos/7698475/pexels-photo-7698475.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        title="Wooden Table"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {address.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {address.address_line_1}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </CardActionArea>
            </Card>
            
        </div>
    )
}
