import axios from 'axios';

export default axios.create({
    baseURL: '',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: process.env.REACT_APP_API_KEY,
        
    }
})