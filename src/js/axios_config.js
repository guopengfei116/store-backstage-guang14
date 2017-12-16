import axios from 'axios';
import { domain } from './api_config.js';

// 配置默认的域名, 将来请求接口的时候直接写路径就可以了
axios.defaults.baseURL = domain;

// 导出配置后的axios
export default axios;
