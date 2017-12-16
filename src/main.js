// 1.1 导入第三包
import Vue from 'vue';

// 2.1 导入根组件
import AppComponent from './component/App.vue';

// 渲染根组件, 启动应用程序
new Vue({
    el: '#app',
    render: c => c(AppComponent)
});
