import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PhotoView from '../PhotoView/PhotoView';


const Photo = () => {
    const {Id}= useParams();
    const{photos, setPhotos} = useState([]);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos${Id}`)
        .then(res => res.json())
        .then (data => setPhotos(data))
        
},[Id])

    return (
        <div>
            {
                photos.map(photo => <PhotoView photo={photo}></PhotoView>)
            }
        </div>
    );
};

export default Photo;