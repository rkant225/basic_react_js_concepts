import React from 'react';
import Song from './Song';
import {connect} from 'react-redux';
import * as actions from '../Redux/Actions';

class SongList extends React.Component{
    render(){
        return(
            <div className="ui divided list">
                {this.props.songs.map(song => <Song key={song.title} song={song} selectSong={this.props.selectSong}/>)}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        songs : state.songsListReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectSong : (song) => dispatch(actions.selectSong(song))
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList);