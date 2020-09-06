import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostReview.css';
import Comment from '../Comment/Comment';





const PostReview = () => {
    const {Id}= useParams();
    const [comments, setComment]= useState([]);
    
   
    useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${Id}`)
            .then(res => res.json())
            .then (data => setComment(data))
            
    },[Id])


   
    return (
       <div>
         
          {
             comments.map(comment => <Comment comment={comment}></Comment>)
 
          }
       </div>     
    );
};

export default PostReview;

