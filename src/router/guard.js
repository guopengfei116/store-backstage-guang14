// 因为这不是组件, 没有组件实例, 自然没有this.$http方法, 所以要手动导入axios
import axios from 'axios';
// $http无法使用, $api也无法使用, 所以需要手动导入api_consif
import apiConfig from '../js/api_config.js';

// 该模块向外导出一个路由守卫函数
export default function(to, from, next) {

    // 1 调用接口判断用户的登陆状态
    // 2 再通过to对象的name属性得知用户去往的页面
    // 2.1 如果去往登陆页面
    // 2.2 登陆 -> 自动跳转到首页 -> 调next('/')
    // 2.3 未登陆 -> 允许访问 -> 调next()
    // 3.1 如果去往非登陆页面
    // 3.2 登陆 -> 允许访问 -> 调next()
    // 3.3 未登陆 -> 自动跳转到登陆页 -> 调next('/login')
    axios.get(apiConfig.islogin).then(rsp => {
        let isLogin = rsp.data.code == 'logined';
        let toPage = to.name;

        // 去往登陆
        if(toPage == 'l') {
            if(isLogin) {
                next('/'); // 转首页
            }else { 
                next();    // 允许访问
            }
        }
        
        // 去往非登陆
        if(toPage != 'l') {
            console.log(isLogin)
            if(isLogin) {
                next();           // 允许访问
            }else { 
                next('/login');    // 转登陆
            }
        }

    });
};
