<template>
    <div class="edit">
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>内容管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品编辑</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- Form表单: model关联表单数据, rules设置表单校验规则 -->
        <section class="edit_box">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
            class="edit__form">
                <!-- 字段如果要进行校验或者重置, 那么必须设置prop属性才可以  -->
                <el-form-item label="内容标题" prop="title">
                    <el-input v-model="ruleForm.title"></el-input>
                </el-form-item>
                <el-form-item label="副标题" prop="sub_title">
                    <el-input v-model="ruleForm.sub_title"></el-input>
                </el-form-item>
                <el-form-item label="所属类别" prop="category_id">
                    <!-- 这个select数据是动态获取的, 需要v-for渲染option -->
                    <el-select v-model="ruleForm.category_id" placeholder="请选择活动区域">
                        <!-- 这里label属性设置option提示文本, value属性设置被选时的值 -->
                        <el-option v-for="item in goodsCategory" :key="item.category_id" :label="item.title" :value="item.category_id"></el-option>
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
                // 表单数据
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
                // 表单校验规则
                rules: {
                    title: [
                        { required: true, message: '请输入内容标题', trigger: 'blur' }
                    ],
                    sub_title: [
                        { required: true, message: '请输入副标题', trigger: 'blur' }
                    ],
                    goods_no: [
                        { required: true, message: '请输入商品编号', trigger: 'blur' }
                    ],
                    stock_quantity: [
                        { required: true, message: '请输入库存', trigger: 'blur' }
                    ],
                    market_price: [
                        { required: true, message: '请输入市场价格', trigger: 'blur' }
                    ],
                    sell_price: [
                        { required: true, message: '请输入销售价格', trigger: 'blur' }
                    ],
                },
                // 商品分类
                goodsCategory: []
            };
        },
        methods: {
            // 获取商品分类信息, 获取分类的接口多个模块公用一个, 需要通过模块名称进行不同分类请求
            getGoodsCategory() {
                this.$http.get(this.$api.ctList + 'goods')
                    .then(rsp => {
                        this.goodsCategory = rsp.data.message;
                    });
            },

            // 获取商品信息, 记得后面加上商品ID参数
            getGoods() {
                this.$http.get(this.$api.gsDetail + this.id)
                    .then(rsp => {
                        // 为了让select能够自动选取默认的值, 把category_id转换为number, 与分类列表的id数据类型一致
                        rsp.data.message.category_id = +rsp.data.message.category_id;
                        this.ruleForm = rsp.data.message;
                    });
            },

            // 修改商品信息, 记得后面加上商品ID参数
            modifyGoods() {
                this.$http.post(this.$api.gsEdit + this.id, this.ruleForm)
                    .then(rsp => this.$alert(rsp.data.message));
            },

            // 表单提交前先进行校验, 通过后再调用接口修改
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.modifyGoods();
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },

        created() {
            this.getGoodsCategory();
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
