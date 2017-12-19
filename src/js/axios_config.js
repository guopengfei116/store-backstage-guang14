import axios from 'axios';
import { domain } from './api_config.js';

// 配置默认的域名, 将来请求接口的时候直接写路径就可以了
axios.defaults.baseURL = domain;

// 因为我们调用的接口都是跨域的, 默认不会携带cookie, 如果需要携带, 就必须配置withCredentials为true
axios.defaults.withCredentials = true;

// 导出配置后的axios
export default axios;
