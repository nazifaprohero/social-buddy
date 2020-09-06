import React from 'react';

const PhotoView = (props) => {
    const{url}= props.photo;
    return (
        <div>
            {url}
        </div>
    );
};

export default PhotoView;