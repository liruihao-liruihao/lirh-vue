<template>
    <div>
        <el-container class="contains"  >
            <el-aside width="200px"  >
                <el-menu :default-openeds="['1']" class="menu">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message" id="acd"></i>导航一</template>
                            <el-menu-item index="1-1" >选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                            <el-menu-item index="1-4">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-message"></i>导航二</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-menu-item index="2-4">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-message"></i>导航三</template>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                        <el-menu-item index="3-3">选项3</el-menu-item>
                        <el-menu-item index="3-4">选项3</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container >
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span style="margin-right: 6px">王小虎</span>
                    <span class="logout" @click="logout">
                        <i class="el-icon-loading"></i>
                    </span>

                </el-header>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>

    </div>
</template>

<script>
    import {getUser} from "../../network/home";
    import {logout} from "../../network/login";

    export default {
        name: "Home",
        methods:{
            keyupesc(){
                //console.log('logout');
                 this.logout();
            },
            logout(){
                console.log('logout');
                logout().then(res=>{
                    if (res.status === 100) {
                        //清除token
                        localStorage.removeItem("lirhtoken")
                        //跳转登录页
                        this.$router.push("/login")
                    }
                })
            }
        },
        created(){
            getUser().then(res=>{
                console.log(res);
            })
            var _this = this;
            document.onkeydown = function(e) {
                let key = window.event.keyCode;
                console.log(_this.$route);
                if (_this.$route.path!=="/login" && key == 27) {
                    _this.keyupesc();
                }
            };
        }
    }
</script>
<style>

</style>

<style  scoped>
    el-menu-item{
        background-color: red;
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
    .contains{
        height: 100vh;
    }
    .menu {
        background-color:#D3DCE6;
    }



</style>