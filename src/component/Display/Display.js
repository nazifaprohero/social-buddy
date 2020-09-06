import React from 'react';
import  { useState } from 'react';
import fakeData from '../../fakeData/index';
import Post from '../Post/Post';


const Display = () => {
    const first100 =fakeData.slice(0,100);
    const[posts, setPosts]= useState(first100);
    
    return (
        <div>           
      {
        posts.map(post => <Post post={post}></Post>)
      }
        </div>
    );
};

export default Display;