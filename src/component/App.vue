<template>
    <div>
        测试
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
        </el-date-picker>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value1: ''
            }
        },

        // 组件初始化完毕会自动调用的生命周期函数
        created() {
            // 测试axios与api是否成功注入到vue原型中
            this.$http.get(this.$api.islogin)
                .then(rsp => alert(rsp.data.code));
        }
    }
</script>

<style scoped>

</style>
