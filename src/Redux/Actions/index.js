// Action creator

// Named export
export const selectSong = (song) =>{
    return {
        type : 'SELECT_SONG',
        payload : {selectedSong : song}
    }
}