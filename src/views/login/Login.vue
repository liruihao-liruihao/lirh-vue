<template>
    <div class="login">

        <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm" >
            <h3 class="login-title">欢迎登录</h3>
            <el-form-item label="账号" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="pwd" @keyup.enter.native="keyupenter(ruleForm)">
                <el-input v-model="ruleForm.pwd"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleForm)">立即创建</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
    import {hello,login} from "../../network/login";

    export default {
        name: "Login",
        data(){
            return{
                ruleForm: {
                    username: '',
                    pwd: ''
                }
            }
        },
        methods:{
            keyupenter(ruleForm){
                console.log(ruleForm);
                this.submitForm(ruleForm)
            },


            submitForm(ruleForm){
                login(ruleForm).then(res=>{
                    console.log(res);
                    if (res.status!=null&&res.status===200) {
                        localStorage.lirhtoken=res.token
                        this.$router.push("/home")
                    }else{
                        const h = this.$createElement;
                        this.$message({
                            message: h('p', null, [
                                h('span', null, '登录失败， '),
                                h('i', { style: 'color: red' }, '账号或密码错误')
                            ])
                        });

                    }
                })
            }
        }
    }
</script>

<style scoped>
    .demo-ruleForm{
        width: 500px;
        height: 300px;
        border:2px solid #DCDFE6;
        margin: 150px auto;
       padding: 20px 50px 20px 30px;
        border-radius: 20px;
        box-shadow: 0 0 20px #DCDFE6;
    }
    .login-title{
        text-align: center;
        margin-top: 20px;
    }
</style>