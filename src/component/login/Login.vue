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
                <el-form :model="user" :rules="formRules" status-icon ref="ruleForm2" label-width="70px"
                    class="demo-ruleForm" label-position="left">
                    
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
                        <el-button @click="submitForm('ruleForm2')">提交</el-button>
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
                },

                // 配置校验规则
                formRules: {
                    uname: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { pattern: /\w{5,18}/, message: '长度在 4 到 18 个字符, 且只能为&_或字母与数字', trigger: 'blur' },
                    ],
                    upwd: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { pattern: /.{6,18}/, message: '长度在 6 到 18 个字符', trigger: 'blur' },
                    ]
                }
            };
        },

        methods: {

            // 登陆
            login() {
                // 登陆成功后
                // 1 判断status是否为0, 不为0给出错误提示
                // 2 如果为0, 说明登陆成功, 本地localStorage存储后端返回的用户信息
                // 3 跳转到后台管理首页
                this.$http.post(this.$api.login, this.user)
                    .then(rsp => {
                        let {status, message} = rsp.data; // 解构两个属性值
                        if(status == 0) {
                            localStorage.setItem('user', JSON.stringify(message)); // 需要转换为字符串存储
                            this.$router.push('/');
                        }else {
                            alert('哥们你确实逗我呢!')
                        }
                    });
            },

            // 点击提交按钮, 调用登陆接口
            submitForm(formName) {

                // 先校验表单, 再提交
                this.$refs[formName].validate((result) => {
                    if(result) {
                       this.login();
                    }else {
                        alert('哥们你逗我呢!')
                    }
                });
            },

            // vue中提供了一个$refs对象, 用来快速的获取dom元素, 
            // 在一些特殊情况下我们需要拿到原生dom进行操作
            resetForm(formName) {
                this.$refs[formName].resetFields();   // 这里拿到form组件对象, 调用其重置方法重置表单
            }
        }
    }
</script>

<style scoped lang="less">
    .login {
        height: 100%;
        background-color: rgb(38, 124, 183);

        // &符号就是上级选择器的引用
        // 这里使盒子处于页面中间位置
        &_content {
            width: 400px;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -200px;
            margin-top: -160px;
            padding: 10px;
            border: 1px solid hsla(0,0%,100%,.2);
            border-radius: 4px;

            // logo居中
            &_logo {
                text-align: center;
            }

            // form表单使用elemUI
            &_form {
                padding: 2px 10px;
            }
        }
    }
</style>
