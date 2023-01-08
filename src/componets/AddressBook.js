import * as React from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { Box, Card, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import axios from "axios"
import AddressBookEntry from "./AddressBookEntry";
import AddressList from "../componets/AddressList";




const END_POINT = "https://myfirstonlineproject.pythonanywhere.com"
const POST_URL = `${END_POINT}/api/address/`
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjczMTA0Nzk2LCJpYXQiOjE2NzI5MjgzOTYsImp0aSI6ImI2OGUxNjE3NDUwMDQ2MWM5MTk5YTc1MTdmOTZkZDkxIiwidXNlcl9pZCI6MX0._h1NOa3xS8mDeQRAkjzU0ctpe7TGDA-DSI2IDvDTOoc"





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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
        
      }}
    >
      <form>
        <FormControl
          sx={{
            width: { sm: "95vh" },
            height: { sm: "72vh" },
            p: 1,
            justifyContent: "space-around",
          }}
          variant="standard"
        >
          <Box sx={{border:1, borderRadius: 4}}>
            <FormLabel
              sx={{
                color: "black",
                fontSize: "0.9rem",
                fontWeight: "bold",
                margin: "10px"
              }}
              id="recent-address"
            >
              Most recently used Addresses
            </FormLabel>
            <Grid
              container spacing={0.5} justify='center' alignItems="center" 
            >
              {data != null &&
                data.data.map((address) => {
                  return (
                    <Grid margin={1} item key={address.id} xs={12} sm={4} md={3} lg={3}>
                      <AddressBookEntry address={address} />
                    </Grid>
                  );
                })}
                <Grid margin={1} item key="addressButton" xs={12} sm={4} md={3} lg={3}>
                      <AddNewAddressButton></AddNewAddressButton>
                </Grid>
            </Grid>
            <Button
              sx={{
                "& MuiTypography-root": { fontSize: "0.8rem" },
                width: "fit-content",
              }}
              variant="text"
              onClick={addNewAddressSelected}
            >
              <AddIcon />
              Add a new Address
            </Button>
          </Box>
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
              // type="submit"
              variant="contained"
              onClick={handleClick}
            >
              Use this address 
            </Button>
          </Box>
        </FormControl>
      </form>
    </Box>
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
