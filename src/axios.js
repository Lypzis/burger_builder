import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burguerbuilderapi.firebaseio.com/'
});

export default instance;