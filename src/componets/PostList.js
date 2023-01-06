import React from 'react'
import Post from './Post'
import Grid from '@mui/material/Grid'

const XS = 6;
const MD = 4;
const LG = 3;

export default function Posts({ posts }) {
  return (
    <Grid container spacing={1}>
      {
        posts.map(post => {
          return(
            <Grid item key={post.id} xs={XS} md={MD} lg={LG}> 
              <Post post={post}/> 
            </Grid>
          )
        })
      }
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