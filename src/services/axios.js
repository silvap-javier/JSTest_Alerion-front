import axios from 'axios';
import * as env from '../environment';
const { API_URL } = env[process.env.REACT_APP_ENV] || env['development'];

const intanceAxios = axios.create({
  baseURL: API_URL
});

export default intanceAxios;
