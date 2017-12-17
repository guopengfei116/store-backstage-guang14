// 导入被路由的组件
import LoginComponent from '../component/login/Login.vue';
import AdminComponent from '../component/admin/Admin.vue';
// 导入商品相关组件
import GoodsContentListComponent from '../component/admin/goods/content/GoodsContentList.vue';
import GoodsContentAddComponent from '../component/admin/goods/content/GoodsContentAdd.vue';
import GoodsContentEditComponent from '../component/admin/goods/content/GoodsContentEdit.vue';


// admin子路由配置
let adminChildren = [
    { name: 'gcl', path: 'goods/content/list', component: GoodsContentListComponent },
    { name: 'gca', path: 'goods/content/add', component: GoodsContentAddComponent },
    { name: 'gce', path: 'goods/content/edit', component: GoodsContentEditComponent },
];

// 对外导出路由配置对象
export default {
    routes: [
        // 后台管理首页
        { name: 'a', path: '/', component: AdminComponent, children: adminChildren},

        // 账号管理
        { name: 'l', path: '/login', component: LoginComponent },
    ]
};
