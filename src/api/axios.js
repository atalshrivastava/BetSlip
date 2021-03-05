import axios from 'axios';

export default axios.create({
    withCredentials: true,
    baseURL: 'https://www.mocky.io/v2/'


})