import axios from 'axios';

const KEY = "AIzaSyBj_VE8ptWP3HZGQboYbEOFr8oUpvPAY5s";

export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params : {part : 'snippet', maxResults : 10, key : KEY, type: 'video'}
});