import React from 'react'
import Post from './Post'
export default function Posts({ posts }) {
  return (
      posts.map(post => {
        return <Post key={post.id} post={post} />
      })
  )
}
