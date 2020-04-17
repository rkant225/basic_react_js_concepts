import React from 'react';
import './ImageList.css'
import ImageCard from '../ImageCard/ImageCard'

const ImageList = (props) =>{
    const images = props.imageResults.map(image => <ImageCard key={image.id} image={image} />);
    return(
        <div>
            <p>Found {props.imageResults.length} images.</p>
            <div className="image-list">{images}</div>
        </div>
    );
}

export default ImageList;