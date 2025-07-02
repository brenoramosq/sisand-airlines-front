import axios from 'axios';
import {environment} from '../../src/enviroments/environment';

//import { getSessionStorageToken } from './sessionStorageConfig';

axios.defaults.baseURL = environment.apiUrl;

// axios.interceptors.request.use(config => {
//     config.headers['Authorization'] = `Bearer ${getSessionStorageToken()}`;
//     return config;
// });

export default axios;