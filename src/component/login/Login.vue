<template>
    <div class="login">
        <!-- 居中在屏幕中的盒子 -->
        <div class="login_content">
            <!-- logo -->
            <section class="login_content_logo">
                <img src="../../img/logo.png" alt="logo">
            </section>

            <!-- 表单 -->
            <section class="login_content_form">
                <!-- form: 如果你的表单要进行效验, 重置, 那么必须设置model属性, 关联整个表单的数据 -->
                <el-form :model="user" status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                    
                    <!-- input: 如果要效验, 重置, 那么必须设置prop属性, 关联当前的input字段名 -->
                    <el-form-item label="用户名" prop="uname">
                        <!-- input: 记得改写v-model的值 -->
                        <el-input type="text" v-model="user.uname" auto-complete="off"></el-input>
                    </el-form-item>

                    <!-- input: 如果要效验, 重置, 那么必须设置prop属性, 关联当前的input字段名 -->
                    <el-form-item label="密码" prop="upwd">
                        <!-- input: 记得改写v-model的值 -->
                        <el-input type="password" v-model="user.upwd" auto-complete="off"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                        <el-button @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                </el-form>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // 将来提交给后端的用户字段
                user: {
                    uname: '',
                    upwd: ''
                }
            };
        },

        methods: {

            // 点击提交按钮, 调用登陆接口
            submitForm(formName) {
                this.$http.post(this.$api.login, this.user)
                    .then(rsp => alert(rsp.data.message.realname));
            },

            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped lang="less">
    .login {
        height: 100%;
        background-color: blue;

        // &符号就是上级选择器的引用
        // 这里使盒子处于页面中间位置
        &_content {
            width: 400px;
            position: relative;
            left: 50%;
            top: 50%;
            margin-left: -200px;
            margin-top: -160px;
            border: 1px solid red;

            // logo居中
            &_logo {
                text-align: center;
            }

            // form表单使用elemUI
            &_form {

            }
        }
    }
</style>
