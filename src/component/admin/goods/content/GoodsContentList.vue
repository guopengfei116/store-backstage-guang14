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
                <el-input size="small" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
            </div>
        </section>

        <!-- 表格: data属性为列表数据, 传入后会根据这个数据自动渲染 -->
        <el-table ref="multipleTable" :data="tableList" tooltip-effect="dark" 
            style="width: 100%" height="400">
            <!-- 多选框列 -->
            <el-table-column type="selection"></el-table-column>

            <!-- 普通列: label用于设置表头, prop用于指定该列展示的字段名称 -->
            <el-table-column label="日期" prop="date"></el-table-column>

            <!-- 普通列: label用于设置表头, 里面的template可以用于设定任意html结构 -->
            <el-table-column label="姓名">
                <!-- 在temoplate里面, 需要通过scope.row拿到每一行数据 -->
                <template slot-scope="scope">
                    <a href="">{{ scope.row.name }}</a>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页: size-change用于监听每页展示条目的变化, current-change用于监听页码的变化 -->
        <!-- 分页: current-page属性用于设置当前处于第几页, page-size属性用于设置每页条目的可选项 -->
        <!-- 分页: layout用于设置要使用那些分页小组件, total用于设置数据总量 -->
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="1" :page-size="100" :page-sizes="[100, 200, 300, 400]"
            layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableList: [
                    { date: 2017, name: '小美' },
                    { date: 2016, name: '美美' },
                    { date: 2015, name: '大美' },
                    { date: 2015, name: '大美' },
                    { date: 2017, name: '小美' },
                    { date: 2016, name: '美美' },
                    { date: 2015, name: '大美' },
                    { date: 2015, name: '大美' },
                    { date: 2017, name: '小美' },
                    { date: 2016, name: '美美' },
                    { date: 2015, name: '大美' },
                    { date: 2015, name: '大美' },
                    { date: 2017, name: '小美' },
                    { date: 2016, name: '美美' },
                    { date: 2015, name: '大美' },
                    { date: 2015, name: '大美' },
                    { date: 2017, name: '小美' },
                    { date: 2016, name: '美美' },
                    { date: 2015, name: '大美' },
                    { date: 2015, name: '大美' },
                    { date: 2017, name: '小美' },
                    { date: 2016, name: '美美' },
                    { date: 2015, name: '大美' },
                    { date: 2015, name: '大美' },
                    { date: 2017, name: '小美' },
                    { date: 2016, name: '美美' },
                    { date: 2015, name: '大美' },
                    { date: 2015, name: '大美' },
                ]
            }
        },

        methods: {
            handleSizeChange() {
                
            },
            handleCurrentChange() {

            }
        },
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