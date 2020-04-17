import React from 'react';
import VideoItem from './VideoItem'


const YouTubeVideoList = (props) => {
const videosList = props.videos.map(video => <VideoItem key={video.id.videoId} video={video} handleSelectedVideo={props.handleSelectedVideo}/>)
    return(
        <div className="ui relaxed divided list">
            <p>Total video found : {props.videos.length}</p>
            {videosList}
        </div>
    );
}

export default YouTubeVideoList;