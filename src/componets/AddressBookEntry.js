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

  const classes = {
    root: {
      flexGrow: 1,
    },
    card: {
      width: '100%',
      height: '100%',
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
    }
  }

  return (
      <div>
        <Card className={classes.card} sx={{ backgroundColor: "skyblue"}} onClick={handleClick}>
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
