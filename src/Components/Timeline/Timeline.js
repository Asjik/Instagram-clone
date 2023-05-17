import React, { useState } from 'react';
import "./Timeline.css"
import Suggestions from '../Suggestions/Suggestions';
import Posts from '../Posts/Posts';

function Timeline() {
  const[posts, setPosts] = useState([
    {
      user: "John",
      postImage: "https://images.unsplash.com/photo-1456415333674-42b11b9f5b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      likes: 12,
      timeStamp: "12h"
    },
    {
      user: "Jane",
      postImage: "https://images.unsplash.com/photo-1424709746721-b8fd0ff52499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      likes: 1000,
      timeStamp: "15min"
    },
    {
        user: "Jake",
        postImage: "https://images.unsplash.com/photo-1494537449588-7f07cede2556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        likes: 1,
        timeStamp: "25sec"
    },
    {
      user: "July",
      postImage: "https://images.unsplash.com/photo-1594303546054-17707f1e7224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      likes: 100,
      timeStamp: "25min"
  },

])
  return (
    <div className='timeline'>
      <div className='timeline__left'>
        <div className='timeline_posts'>
          {posts.map(post => (
          <Posts 
            user={post.user} 
            postImage={post.postImage} 
            likes={post.likes} 
            timeStamp={post.timeStamp}/>))}
        </div>
      </div>

      <div className='timeline__right'>
        <Suggestions/>
      </div>
    </div>
  )
}

export default Timeline
