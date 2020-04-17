import { combineReducers } from 'redux';


const songsListReducer =()=>{
    return [
        {title : 'Hum tumhe chahte hai aise', duration : '4:05'},
        {title : 'Raziya gundo me fas gai', duration : '7:45'},
        {title : 'Ashiq banaya aap ne', duration : '4:00'},
        {title : 'Jhalak dikhla jaa', duration : '6:01'},
        {title : 'Tere naam hmne kiya hai', duration : '5:23'}
    ];
}


const selectedSongReducer = (selectedSong = null, action) =>{
    if(action.type === 'SELECT_SONG'){
        return action.payload.selectedSong;
    }

    return selectedSong;
}


export default combineReducers({
    songsListReducer : songsListReducer,
    selectedSongReducer : selectedSongReducer
});