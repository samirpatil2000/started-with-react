import * as React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function AddNewAddressButton() {
  const onContinue = () => {
    console.log("On continue")
  };

  const handleClick = () => {
    console.log("Add Button Click")
  }

  

  return (
      <div>
        <Card sx={{ maxWidth: 300, minWidth: 160}} onClick={handleClick}>
          <CardActionArea>
            <CardContent>
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
