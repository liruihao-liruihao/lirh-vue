<template>

    <div>
        <el-container>
            <el-header>Header</el-header>
            <el-main style=" height: calc(100vh - 80px);">
                <!--<div style="display: flex;">-->
                    <!--<span style="width:100px;">当前进度：</span>-->
                    <!--<el-progress :percentage="100" style="width: calc(100vw - 160px);"></el-progress>-->
                <!--</div>-->
                <div style="display: flex;">
                    <span style="width:100px;color: green">剩余时间：</span>
                    <el-progress :percentage="100" style="width: calc(100vw - 160px);"></el-progress>
                </div>
                <el-container>
                    <el-aside width="60vw">
                        <div style="margin-top: 20px">
                            <div style="font-size: 22px"> 第一题:</div>
                            <div style="margin-top: 20px">
                                即将出国的留学去学习数学的雯子想对同学小辉写一段话
                                √-1    əʌ07   kx+b
                                请问表达了什么？
                            </div>
                            <div>
                                <el-image
                                        style="width: 150px; height: 150px"
                                        :src="url"
                                ></el-image>
                            </div>

                            <div>
                                <template>
                                    <div style="margin: 5px;">
                                        <el-radio v-model="radio1" label="1" border style="width: 50vw">备选项1</el-radio>
                                    </div>
                                    <div style="margin: 5px;">
                                        <el-radio v-model="radio1" label="1" border style="width: 50vw">备选项1</el-radio>
                                    </div>
                                    <div style="margin: 5px;">
                                        <el-radio v-model="radio1" label="1" border style="width: 50vw">备选项1</el-radio>
                                    </div>
                                    <div style="margin: 5px;">
                                        <el-radio v-model="radio1" label="1" border style="width: 50vw">备选项1</el-radio>
                                    </div>
                                    <el-button type="primary">上一题</el-button>
                                    <el-button type="primary">下一题</el-button>
                                    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
                                        点我打开
                                    </el-button>

                                </template>
                            </div>

                        </div>
                    </el-aside>
                    <el-main  id="acd">
                    </el-main>
                </el-container>
                <div>
                    <el-drawer
                            title="我是标题"
                            :visible.sync="drawer"
                            :direction="direction"
                            :with-header="false"
                            :before-close="handleClose"  >
                        <span>
                            <div style="display: flex;">
                                <div style="flex-grow: 1;text-align: center;background-color: #67C23A;color: white;height: 40px;line-height: 40px;box-shadow: 0 0 20px #DCDFE6; border:2px solid #DCDFE6;"><i class="el-icon-orange" style="margin-right:5px ; "/>世界</div>
                               <div style="flex-grow: 1;text-align: center;height: 40px;line-height: 40px;"><i class="el-icon-user" style="margin-right:5px ; "/>好友 </div>
                                 <div style="flex-grow: 1;text-align: center;height: 40px;line-height: 40px;"><i class="el-icon-chat-dot-square" style="margin-right:5px ; "/>私聊 </div>
                            </div>
                        </span>
                    </el-drawer>
                </div>
                <div style="position: fixed;bottom: 50vh;right: 25px;" @click="drawer=true">
                    <i class="el-icon-arrow-left" ></i>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                drawer: false,
                direction: 'rtl',
            }
        }
    }
</script>

<style scoped>
    #acd{
        cursor: url("../../assets/abb(已去底).png"),auto;
    }

    .el-header{
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
    }
    body > .el-container {
        margin-bottom: 40px;
    }

</style>