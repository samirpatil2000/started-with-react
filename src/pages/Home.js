import React from 'react'
import Layout from '../componets/Post'
import TodoRouter from './Todo'

export default function Home() {
  return (
    <div>
      <TodoRouter/>
      <Layout/>
    </div>
  )
}
