import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://chimaobi.herokuapp.com'
});

export default instance;