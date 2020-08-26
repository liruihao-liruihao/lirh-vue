<template>

    <div>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
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

                            <!--<div>-->
                                <!--<template>-->
                                    <!--<div style="margin: 5px;">-->
                                        <!--<el-radio v-model="radio1" label="1" border style="width: 50vw">备选项1</el-radio>-->
                                    <!--</div>-->
                                    <!--<div style="margin: 5px;">-->
                                        <!--<el-radio v-model="radio1" label="1" border style="width: 50vw">备选项1</el-radio>-->
                                    <!--</div>-->
                                    <!--<div style="margin: 5px;">-->
                                        <!--<el-radio v-model="radio1" label="1" border style="width: 50vw">备选项1</el-radio>-->
                                    <!--</div>-->
                                    <!--<div style="margin: 5px;">-->
                                        <!--<el-radio v-model="radio1" label="1" border style="width: 50vw">备选项1</el-radio>-->
                                    <!--</div>-->
                                    <!--<el-button type="primary">上一题</el-button>-->
                                    <!--<el-button type="primary">下一题</el-button>-->

                                <!--</template>-->
                            <!--</div>-->

                        </div>
                    </el-aside>
                    <el-main style="background-color: green" id="acd">
                        <img src="../../assets/abb.png" alt="">
                    </el-main>
                </el-container>


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
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
            }
        }
    }
</script>

<style scoped>

    .el-header{
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        height: calc(100vh - 80px);
    }
    body > .el-container {
        margin-bottom: 40px;
    }

</style>