import axios from 'axios';

const apiAnimes = axios.create({
    baseURL: 'https://animechan.vercel.app/api/available/anime',

})

export default apiAnimes