import React from 'react';

class Song extends React.Component{
    render(){
        return(
            <div className="item">
                <div className="right floated content">
                    <button className="ui button primary" onClick={()=> this.props.selectSong(this.props.song)}>Select</button>
                </div>
                <div className="content">
                    {this.props.song.title}
                </div>
            </div>   
        );
    }
}

export default Song;