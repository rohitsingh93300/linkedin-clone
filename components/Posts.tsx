import React from 'react'
import Post from './Post'
import { IPostDocument } from '@/models/post.model'


const Posts = ({ posts}: { posts: IPostDocument[]}) => {
  
  return (
    <div>
      {
        posts?.map((post, index) => {
          return (
            <Post key={index} post={post} />
          )
        })
      }
    </div>
  )
}

export default Posts;