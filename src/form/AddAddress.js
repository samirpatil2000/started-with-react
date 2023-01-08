import {React, useRef} from 'react'
import { Form } from 'react-router-dom'
import {Box, Button, Grid, TextField, Typography} from '@mui/material'

const addressFields = [
    "name", "address_line_1", "address_line_2", "zipcode", "city", "state"
]

const XS = 4;
const MD = 8;
const LG = 8;
const fieldStyle = {
    marginBottom: "1em",
    marginLeft:"2em",
    marginRight:"2em"
}
export default function AddAddress() {
    // const name = useRef()



    // // function handleSubmit(){
    // //     const name = 
    // // }
    return (
        // <Form>
        //     <Grid container justify='center' alignItems="center" direction='column' >
        //         <Grid item> 
        //             <Typography variant='h5' style={{ marginBottom: "1em" }} color="primary">Add New Address</Typography>
        //         </Grid>
                
        //         <Grid item> 
        //             <AddressForm/>
        //         </Grid>
                
        //         <Grid item>
        //             <Button variant="contained" style={{marginTop: 10}}>Submit</Button>
        //         </Grid>
                
        //     </Grid>
        // </Form>
        <>
        <div>
                <Grid container justify='center' alignItems="center" direction='column' >
                <Grid item> 
                    <Typography variant='h5' style={{ marginBottom: "1em" }} color="primary">Add New Address</Typography>
                </Grid>
                
                <Grid item> 
                    <AddressForm/>
                </Grid>
                
                <Grid item>
                    <Button variant="contained" style={{marginTop: 10}}>Submit</Button>
                </Grid>
                
            </Grid>
        </div>
        </>
    )
}




const AddressForm = () => {
    return (
        // spacing={1} alignitems="center" justify='center' direction='column'
        <Grid container >
            <TextField fullWidth required id="name" label="Name" defaultValue="" style={fieldStyle} xs={XS}/>
            <TextField fullWidth required id="address_line_1" label="address line 1" defaultValue="" style={fieldStyle} xs={XS}/>
            <TextField fullWidth  id="address_line_2" label="address line 2" defaultValue="" style={fieldStyle} xs={XS}/>
            <TextField fullWidth required id="zipcode" label="Zipcode" defaultValue="" style={fieldStyle} xs={XS}/>
            <TextField fullWidth required id="city" label="City" defaultValue="" style={fieldStyle} xs={XS}/>
            <TextField fullWidth required id="state" label="State" defaultValue="" style={fieldStyle} xs={XS}/>
        </Grid>
    )
}


