import React from 'react';
import {connect} from 'react-redux';

const SongDetail = (props) => {
    return(
        <div>
            <h3>Song Details</h3>
            {props.selecedSong && <h4>{props.selecedSong.title}</h4>}
            {props.selecedSong && <h4>{props.selecedSong.duration}</h4>}
        </div>   
    );
}

const mapStateToProps = (state) => {
    return {
        selecedSong : state.selectedSongReducer
    }
}

export default connect(mapStateToProps)(SongDetail);