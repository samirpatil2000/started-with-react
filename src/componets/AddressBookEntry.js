import * as React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function AddressBookEntry({ address }) {
  const onContinue = () => {
    console.log("On continue")
  };

  const handleClick = () => {
    console.log("Address Click", address.name)
  }

  

  return (
      <div>
        <Card sx={{ maxWidth: 300, minWidth: 160}} onClick={handleClick}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {address.name}
              </Typography>

              {address.address_line_1.split(',').map(word => {
                return(
                    <Typography  variant="body2" color="text.secondary" >
                      {word},
                    </Typography>
                )
              })}
              <Typography variant="body2" color="text.secondary">
                {address.city}, {address.state}, {address.pincode}, India
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={onContinue}>Edit</Button>
              {/* <Button size="small">Learn More</Button> */}
            </CardActions>
          </CardActionArea>
        </Card>
      </div>
  );
}
