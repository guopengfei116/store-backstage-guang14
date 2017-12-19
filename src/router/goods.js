// 导入商品相关组件
import GoodsContentListComponent from '../component/admin/goods/content/GoodsContentList.vue';
import GoodsContentAddComponent from '../component/admin/goods/content/GoodsContentAdd.vue';
import GoodsContentEditComponent from '../component/admin/goods/content/GoodsContentEdit.vue';

import GoodsCategoryListComponent from '../component/admin/goods/category/GoodsCategoryList.vue';
import GoodsCategoryAddComponent from '../component/admin/goods/category/GoodsCategoryAdd.vue';
import GoodsCategoryEditComponent from '../component/admin/goods/category/GoodsCategoryEdit.vue';

import GoodsCommentListComponent from '../component/admin/goods/comment/GoodsCommentList.vue';
import GoodsCommentAddComponent from '../component/admin/goods/comment/GoodsCommentAdd.vue';
import GoodsCommentEditComponent from '../component/admin/goods/comment/GoodsCommentEdit.vue';

// 导入商品模块相关路由配置
export default [
    { name: 'gctl', path: 'goods/content/list', component: GoodsContentListComponent },
    { name: 'gcta', path: 'goods/content/add', component: GoodsContentAddComponent },
    { name: 'gcte', path: 'goods/content/edit', component: GoodsContentEditComponent },

    { name: 'gcgl', path: 'goods/category/list', component: GoodsCategoryListComponent },
    { name: 'gcga', path: 'goods/category/add', component: GoodsCategoryAddComponent },
    { name: 'gcge', path: 'goods/category/edit', component: GoodsCategoryEditComponent },

    { name: 'gcml', path: 'goods/comment/list', component: GoodsCommentListComponent },
    { name: 'gcma', path: 'goods/comment/add', component: GoodsCommentAddComponent },
    { name: 'gcme', path: 'goods/comment/edit', component: GoodsCommentEditComponent },
];
