<template>
    <div class="list">
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>内容管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 工具条 -->
        <section class="list_util">
            <!-- 左边按钮 -->
            <div class="list_util_btns">
                <el-button plain size="small" icon="el-icon-plus">添加</el-button>
                <el-button plain size="small" icon="el-icon-check">全选</el-button>
                <el-button plain size="small" icon="el-icon-delete">删除</el-button>
            </div>

            <!-- 右边搜索框 -->
            <div class="list_util_search">
                <!-- 当焦点离开时, 调用接口获取搜索后的数据列表 -->
                <el-input @blur="getTableList" v-model="query.searchvalue" size="small" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
            </div>
        </section>

        <!-- 表格: data属性为列表数据, 传入后会根据这个数据自动渲染 -->
        <el-table ref="multipleTable" :data="tableList" tooltip-effect="dark" 
            style="width: 100%" height="400">
            <!-- 多选框列 -->
            <el-table-column type="selection"></el-table-column>

            <!-- 普通列: label用于设置表头, prop用于指定该列展示的字段名称 -->
            <el-table-column label="商品名称" prop="title"></el-table-column>
            <el-table-column width="100" label="所属类别" prop="categoryname"></el-table-column>
            <el-table-column width="100" label="库存" prop="stock_quantity"></el-table-column>
            <el-table-column width="100" label="市场价" prop="market_price"></el-table-column>
            <el-table-column width="100" label="销售价" prop="sell_price"></el-table-column>

            <!-- 商品状态: label用于设置表头, 里面的template可以用于设定任意html结构 -->
            <el-table-column width="100" label="状态">
                <!-- 在temoplate里面, 需要通过scope.row拿到每一行数据 -->
                <template slot-scope="scope">
                    <i :class="['el-icon-upload2', scope.row.is_top? 'active': '']"></i>
                    <i :class="['el-icon-phone-outline', scope.row.is_hot? 'active': '']"></i>
                    <i :class="['el-icon-picture', scope.row.is_slide? 'active': '']"></i>
                </template>
            </el-table-column>

            <el-table-column width="100" label="操作">
                <template slot-scope="scope">
                   <router-link :to="{name: 'gcte', params: {id: scope.row.id}}">修改</router-link>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页: size-change用于监听每页展示条目的变化, current-change用于监听页码的变化 -->
        <!-- 分页: current-page属性用于设置当前处于第几页, page-size属性用于设置每页条目的可选项 -->
        <!-- 分页: layout用于设置要使用那些分页小组件, total用于设置数据总量 -->
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="query.pageIndex" :page-size="query.pageSize" :page-sizes="[10, 20, 30, 40]"
            layout="total, sizes, prev, pager, next, jumper" :total="totalcount">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // 请求接口所需的查询字符串, 在分页组件里也可以修改
                query: {
                    pageIndex: 1,
                    pageSize: 10,
                    searchvalue: ''
                },
                // 数据总量
                totalcount: 0,
                // 列表数据
                tableList: [],
            }
        },

        methods: {
            // 获取商品列表
            getTableList() {
                // get方法的第二个参数可以用来指定查询字符串, header头信息等内容
                this.$http.get(this.$api.gsList, { params: this.query })
                    .then(rsp => {
                        this.tableList = rsp.data.message;
                        this.totalcount = rsp.data.totalcount;
                    });
            },

            // 每页数量变化时触发
            handleSizeChange(pageSize) {
                this.query.pageSize = pageSize;
                this.getTableList();
            },

            // 页码变化时触发
            handleCurrentChange(pageIndex) {
                this.query.pageIndex = pageIndex;
                this.getTableList();
            }
        },

        created() {
            // 页面一上来就请求接口获取商品列表进展示
            this.getTableList();
        }
    }
</script>

<style  lang="less">
    .list {
        // 导航
        .el-breadcrumb {
            padding-bottom: 10px;
            border-bottom: 1px solid #a6a6a6;
        }

        // 防止父盒子坍塌, 所以加overflow
        &_util {
            overflow: hidden;
            padding: 10px 0;

            // 按钮在左边
            &_btns {
                float: left;
            }

            // 搜索框在右边
            &_search {
                float: right
            }
        }

        // 分页
        .el-pagination {
            background-color: #fff;
            padding: 8px;
        }
    }
</style>
