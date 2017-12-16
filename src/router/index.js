// 导入被路由的组件
import HomeComponent from '../component/home/Home.vue';
import LoginComponent from '../component/login/Login.vue';

// 对外导出路由配置对象
export default {
    routes: [
        // 首页
        { name: 'h', path: '/home', component: HomeComponent },

        // 账号管理
        { name: 'l', path: '/login', component: LoginComponent },
    ]
};
