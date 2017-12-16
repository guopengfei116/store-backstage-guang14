// 1.1 导入第三包
import Vue from 'vue';
import VueRouter from 'vue-router';

// 1.2 启动vue插件
Vue.use(VueRouter);

// 2.1 导入根组件
import AppComponent from './component/App.vue';

// 2.2 导入路由配置
import RouterConfig from './router';   // 写一个目录, 会自动找index.js

// 渲染根组件, 启动应用程序
new Vue({
    el: '#app',
    render: c => c(AppComponent),
    router: new VueRouter(RouterConfig)
});
