import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function Address({address}) {
    function handleClick(){
        console.log(address.name)
        console.log("Clicked..!")
        console.log()
    }
    const addresses = address.address_line_1.split(',')
    return (
        <div>
            <Card sx={{ maxWidth: 345, backgroundColor: "skyblue" }}>
                <CardActionArea onClick={handleClick}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {address.name}
                        </Typography>
                        {/* <Typography  variant="body2" color="text.secondary" >
                                {address.address_line_1.split(',')}
                        </Typography> */}
                        
                        {address.address_line_1.split(',').map(word => {
                            return(
                                <Typography  variant="body2" color="text.secondary" >
                                    {word},
                                </Typography>
                            )
                        })}
                        <Typography variant="body2" color="text.secondary">
                            {address.city}, {address.state}, {address.zipcode}, India
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Edit</Button>
                        {/* <Button size="small">Learn More</Button> */}
                    </CardActions>
                </CardActionArea>
            </Card>
        </div>
    )
}
