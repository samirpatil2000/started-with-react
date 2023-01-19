import React from "react";
import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box, Card, makeStyles } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import AddIcon from "@mui/icons-material/Add";

import { CardActionArea } from '@mui/material';


import "../style/styles.css";


export default () => (
  <React.Fragment>
    <Box style={{backgroundColor: 'blue', border: 1}}>
      <h1>hello World</h1>
    </Box>
    
    <Grid container 
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
        }}
    >
      <Grid
        item
        xs={12}
        style={{ 
          backgroundColor: "skyblue", 
          flexGrow: 1,
          overflow: 'auto',
          minHeight: '100%',
      }}
        margin={2}
      >
        <Grid container spacing={1}>
            {
                Array(30).fill(1).map(() =>{
                    return (
                        <Grid item xs={3}>
                            <AddNewAddressButton></AddNewAddressButton>
                        </Grid>
                    )
                })
            }
        </Grid>
        
      </Grid>
      {/* <Grid
        item
        xs={6}
        className={"flex-col-scroll"}
        style={{ backgroundColor: "lightblue" }}
      >
        <h1>Column 2</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>end line</h1>
      </Grid> */}
    </Grid>
    <h2>Hello the this rth</h2>
  </React.Fragment>
);


function AddNewAddressButton() {
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
            </CardActionArea>
          </Card>
        </div>
        
    );
  }
