import axios from 'axios';

export default axios.create({
    baseURL : "https://api.unsplash.com",
    headers : {Authorization: "Client-ID ASZwdkHpnbZ0c_dR8q_btUkZKfcLofyx49RtSOa6XbQ" }
});