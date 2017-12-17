<template>
    <div class="aside">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">

            <!-- 导航列表: key属性用于for循环渲染时性能优化, index属性必须设为不一样的值, 这样才能一个一个展开 -->
            <el-submenu v-for="item in menuList" :key="item.title" :index="item.title" >
                <!-- 导航title -->
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>{{ item.title }}</span>
                </template>

                <!-- 导航item -->
                <el-menu-item v-for="subItem in item.children" :key="subItem.title" :index="subItem.title">
                    <!-- 每个子title都是一个a链接, 可以点击, 所以使用router-link, 记得设置to属性 -->
                    <router-link :to="subItem.path">{{ subItem.title }}</router-link>
                </el-menu-item>
            </el-submenu>

        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menuList: [
                    { title: '学生问题', children: 
                        [
                            { title: '内容管理', path: '/' },
                            { title: '类别管理', path: '/' },
                            { title: '评论管理', path: '/' }
                        ]
                    },
                    { title: '前端技术', children: 
                        [
                            { title: '内容管理', path: '/' },
                            { title: '类别管理', path: '/' },
                            { title: '评论管理', path: '/' }
                        ]
                    },
                    { title: '难点分析', children: 
                        [
                            { title: '内容管理', path: '/' },
                            { title: '类别管理', path: '/' },
                            { title: '评论管理', path: '/' }
                        ]
                    },
                    { title: '资源管理', children: 
                        [
                            { title: '内容管理', path: '/' },
                            { title: '类别管理', path: '/' },
                            { title: '评论管理', path: '/' }
                        ]
                    },
                    { title: '商品管理', children: 
                        [
                            { title: '内容管理', path: '/' },
                            { title: '类别管理', path: '/' },
                            { title: '评论管理', path: '/' }
                        ]
                    },
                    { title: '订单管理', children: 
                        [
                            { title: '订单列表', path: '/' },
                        ]
                    }
                ]
            }
        },
    }
</script>

<style scoped lang="less">
    // 让导航列表撑满屏幕
    .aside {
        height: 100%;

        // 导航列表文字左对齐, 并去掉展开列表时右边的1像素边框
        .el-menu {
            height: 100%;
            text-align: left;
            border-right: 0;

            // 去掉导航列表的最小宽度限制
            &-item {
                min-width: 0;
            }
        }
    }
</style>
