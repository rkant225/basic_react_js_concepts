import React from 'react';
import './VideoItem.css';

const VideoItem = (props) => {
    return(
        <div className="video-item item" onClick={()=> props.handleSelectedVideo(props.video)}>
            <img className="ui image" alt={props.video.snippet.thumbnails.default.url} src={props.video.snippet.thumbnails.default.url}/>
            <div className="content">
                <div className="header">{props.video.snippet.title}</div>
            </div>            
        </div>            
    );
}

export default VideoItem;