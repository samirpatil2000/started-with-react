import React from 'react'
import Address from './Address'
import Grid from '@mui/material/Grid'
import AddAddressButton from './button/AddAddress';

const XS = 6;
const MD = 4;
const LG = 3;

export default function AddressList({ addresses }) {
  return (
    <Grid container spacing={1}>
      {
        addresses.map(address => {
          return(
            <Grid item key={ address.id } xs={XS} md={MD} lg={LG}> 
              <Address address={ address }/> 
            </Grid>
          )
        })
      }
      <Grid item xs={XS} md={MD} lg={LG}> 
            <AddAddressButton/>
      </Grid>
    </Grid>
  )
}


/* <Grid container spacing={1}>
            {
                array.map(i => {
                    return (
                        <Grid item key={i} xs={XS} md={MD} lg={LG}>
                            <CustomeCard/>
                        </Grid>
                    );
                })
            }
        </Grid> */