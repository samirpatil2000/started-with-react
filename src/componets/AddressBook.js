import * as React from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { Box, Card, Grid, makeStyles } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import axios from "axios"
import AddressBookEntry from "./AddressBookEntry";
import AddressList from "../componets/AddressList";
import { borderRadius } from "@mui/system";

import "../style/styles.css";

const END_POINT = "https://myfirstonlineproject.pythonanywhere.com"
const POST_URL = `${END_POINT}/api/address/`
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjczMTA0Nzk2LCJpYXQiOjE2NzI5MjgzOTYsImp0aSI6ImI2OGUxNjE3NDUwMDQ2MWM5MTk5YTc1MTdmOTZkZDkxIiwidXNlcl9pZCI6MX0._h1NOa3xS8mDeQRAkjzU0ctpe7TGDA-DSI2IDvDTOoc"




const useStyles = {
  gridContainer: {
    paddingLeft: '200px',
    paddingRight: '20px'
  }
}



export default function AddressBook({
  selectedAddressId,
  addresses,
}) {
  const [value, setValue] = useState(selectedAddressId);


  const [data, setData] = useState(null);  
  
  const handleClick = async () => {
    let headers = new Headers();
    console.log("Clicking ...!")
    headers.append("Authorization", `Bearer ${TOKEN}`)
    const response = await axios.get(POST_URL, {
        mode: 'no-cors',
    });
    const data = await response.data;
    console.log(data, "DATA")
    setData(data)
  }

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };
  function onContinue() {
    console.log("On Continue")
  }

  function addNewAddressSelected() {
    console.log("New Address")
  }

  

  return (
    <div>
      <Grid container  alignItems='center'
        direction='column' 
        sx={{
          border: 1,
          borderRadius: 2
        }}
      >
        <Grid item>
          <FormLabel
              sx={{
                color: "black",
                fontSize: "0.9rem",
                fontWeight: "bold",
                margin: "10px",
              }}
              id="recent-address">
              Most recently used Addresses
          </FormLabel>
        </Grid>
        <Grid item xs={3} >
          <Grid 
            container spacing={0.5} 
            justifyContent='center' 
            // flexGrow={1}
            // overflow='auto'
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100%',
            }}>
              <Grid item sx={{
                backgroundColor: "blue", 
                flexGrow: 1,
                overflow: 'auto',
                minHeight: '100%',
              }}>
                <Grid container justifyContent='center' >
                  {data != null &&
                    [...data.data, ...data.data].map((address) => {
                      return (
                        <Grid margin={1} item key={address.id} xs={6} >
                          {/* <AddressBookEntry address={address} /> */}
                          {/* <AddNewAddressButton></AddNewAddressButton> */}
                          {/* <CardAction/> */}
                          <CustomCard/>
                        </Grid>   
                      );
                  })}
                  {/* <Grid margin={1} item key="addressButton" xs={12} sm={4} md={3} lg={3}>
                        <AddNewAddressButton></AddNewAddressButton>
                  </Grid> */}
                </Grid>
              </Grid>
            
          </Grid>
        </Grid>
         <Grid item>
           <Box sx={{ textAlign: "center" }}>
               <Button
                 sx={{
                  m: 1,
                  p: 1,
                  width: { xs: "90vw", sm: "50ch" },
                  color: "white",
                  backgroundColor: "#000000",
                  "&:hover": { backgroundColor: "#000000" },
                }}
                variant="contained"
                onClick={handleClick}
              >
                Load addresses
              </Button>
          </Box>
        </Grid>
      </Grid>
      <h1>Samir</h1>
      {/* <ResponsiveCardGrid/> */}
    </div>
          
  );
}



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


function ResponsiveCardGrid() {
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
    <div className={classes.root}>
      <Grid container spacing={3}>
        {
          [].map(() => {
            return (<Grid item xs={12} sm={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  Card 1, Card 1, Card 1, Card 1, Card 1, Card 1
                </CardContent>
              </Card>
            </Grid>)
          })
        }
      </Grid>
    </div>
  );
}



function CustomCard(){
  return (
    <Card elevation={1} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Grid container>
            <Grid item>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </Grid>
            <Grid marginTop={1}>
              <Button variant="outlined" size="small"  >Edit</Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
