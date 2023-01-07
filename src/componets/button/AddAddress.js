import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import  {useNavigate} from 'react-router-dom'

export default function AddAddress() {
    const navigate = useNavigate()
    const handleClick = () => {
        console.log("Add Address Clicked")
        navigate('/add-address')
    }
    return (
        <div>
            <Card sx={{ maxWidth: 345 }} alignItems='center' direction='column' justify='center'>
                <CardActionArea onClick={handleClick}>
                    <AddIcon style={
                        {
                            width: 60,
                            height: 60,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }
                    }/>
                    <Typography variant='h5'>Add Address</Typography>
                </CardActionArea>
            </Card>
        </div>
    )
}
