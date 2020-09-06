import React from 'react';
import './Post.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const Post = (props) => {
    const {title, body, userId}= props.post;
    const history = useHistory();
    const handleClick =(Id)=>{
        history.push(`/review/${Id}`)
    };



   

   
    return (
        <div className="post">
            <h1 className="title">Title:{title}</h1>
            <p>{body}</p>
             <Button onClick={()=>handleClick(userId) } variant="contained" color="secondary">See More</Button>
               
        </div>
    );
};

export default Post;