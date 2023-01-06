import React, { useState, useRef, useEffect } from "react";
import axios from "axios"

import Button from '@mui/material/Button'
import AddressList from "../componets/AddressList";
import { Typography } from "@mui/material";

const END_POINT = "https://myfirstonlineproject.pythonanywhere.com"
const POST_URL = `${END_POINT}/api/address/`
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjczMTA0Nzk2LCJpYXQiOjE2NzI5MjgzOTYsImp0aSI6ImI2OGUxNjE3NDUwMDQ2MWM5MTk5YTc1MTdmOTZkZDkxIiwidXNlcl9pZCI6MX0._h1NOa3xS8mDeQRAkjzU0ctpe7TGDA-DSI2IDvDTOoc"

export default function GetAddressAPIComponent(){
    const [data, setData] = useState(null);
  
    const handleClick = async () => {
      let headers = new Headers();
      headers.append("Authorization", `Bearer ${TOKEN}`)
      const response = await axios.get(POST_URL, {
          mode: 'no-cors',
      });
      const data = await response.data;
      console.log(data, "DATA")
      setData(data)
    }
  
    return (
      <div>
        <Button variant="contained"  onClick={handleClick}>Get Data</Button>
        <br/>
        {data ? (
          <>
            <Typography variant="h4">The Status is {data.status}</Typography>
            <br/>
            <AddressList addresses={data.data}></AddressList>
          </>
        ) : (
          <div>No data</div>
        )}
      </div>
  
    );
  }