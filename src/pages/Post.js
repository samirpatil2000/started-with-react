import React from 'react'
import GetPostAPIComponent from '../api/getPostApi'
import LoadingButton from '@mui/lab/LoadingButton';

export default function Post() {
  return (
    <div>
      <LoadingButton>LoadingButton</LoadingButton>
      <div>Hello There</div>
      <GetPostAPIComponent></GetPostAPIComponent>
    </div>
  )
}
