<template>
    <div class="edit">
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>内容管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品编辑</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- Form表单 -->
        <section class="edit_box">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
            class="edit__form">
                <el-form-item label="内容标题" prop="title">
                    <el-input v-model="ruleForm.title"></el-input>
                </el-form-item>
                <el-form-item label="副标题" prop="sub_title">
                    <el-input v-model="ruleForm.sub_title"></el-input>
                </el-form-item>
                <el-form-item label="所属类别" prop="category_id">
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否发布" prop="status">
                    <el-switch v-model="ruleForm.status"></el-switch>
                </el-form-item>
                <el-form-item label="推荐类型" required>
                    <el-switch v-model="ruleForm.is_slide"></el-switch>
                    <el-switch v-model="ruleForm.is_top"></el-switch>
                    <el-switch v-model="ruleForm.is_hot"></el-switch>
                </el-form-item>
                <el-form-item label="封面上传" >
                    封面上传
                </el-form-item>
                <el-form-item label="附件上传">
                    附件上传
                </el-form-item>
                <el-form-item label="商品货号" prop="goods_no">
                    <el-input v-model="ruleForm.goods_no"></el-input>
                </el-form-item>
                <el-form-item label="库存数量" prop="stock_quantity">
                    <el-input v-model="ruleForm.stock_quantity"></el-input>
                </el-form-item>
                <el-form-item label="市场价格" prop="market_price">
                    <el-input v-model="ruleForm.market_price"></el-input>
                </el-form-item>
                <el-form-item label="销售价格" prop="sell_price">
                    <el-input v-model="ruleForm.sell_price"></el-input>
                </el-form-item>
                <el-form-item label="内容摘要" prop="zhaiyao">
                    <el-input type="textarea" v-model="ruleForm.zhaiyao"></el-input>
                </el-form-item>
                <el-form-item label="详细信息" prop="content">
                    <el-input type="textarea" v-model="ruleForm.content"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id,
                ruleForm: {
                    "title":"Hazzys哈吉斯2017新款男士长袖衬衫纯棉修身英伦衬衫显瘦商务衬衣",
                    "sub_title":"英伦轻奢 专柜同款 为不凡而生",
                    "goods_no":"NZ0000000002",
                    "category_id":"151",
                    "stock_quantity":200,
                    "market_price":1000,
                    "sell_price":800,
                    "status":false,
                    "is_slide":false,
                    "is_top":false,
                    "is_hot":true,
                    "zhaiyao":"为不凡而生",
                    "content":"<p><strong>产品参数：</strong></p>",
                    "imgList":[
                            {
                            "name":"wTgAWDLpQReTQ-ZOMdlAk4vF.jpg",
                            "url":"http://127.0.0.1:8899/imgs/wTgAWDLpQReTQ-ZOMdlAk4vF.jpg",
                            "shorturl":"/imgs/wTgAWDLpQReTQ-ZOMdlAk4vF.jpg"        
                            }
                        ],
                    "fileList":[
                        {
                        "name":"HN5d4_wrbsUk5KQNjzYSGGwm.jpg",
                        "url":"http://127.0.0.1:8899/imgs/HN5d4_wrbsUk5KQNjzYSGGwm.jpg",
                        "shorturl":"/imgs/HN5d4_wrbsUk5KQNjzYSGGwm.jpg"
                        }
                    ]
                },
                rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: '请选择活动资源', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' }
                ]
                }
            };
        },
        methods: {
            // 获取商品信息, 记得后面加上商品ID参数
            getGoods() {
                this.$http.get(this.$api.gsDetail + this.id)
                    .then(rsp => this.ruleForm = rsp.data.message);
            },

            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },

        created() {
            this.getGoods();
        }
    }
</script>

<style scoped lang="less">
    .edit {

        &_box {
            margin-top: 20px;
            border: 1px solid #cccccc;
            border-radius: 8px;
            padding-top: 20px;
        }

        &__form {
            width: 450px;
        }
    }
</style>
