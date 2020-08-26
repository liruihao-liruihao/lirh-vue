<template>
    <div>
        <el-container>
            <el-header  style="text-align: right; font-size: 12px">
                <span  style="margin-right: 25px">当前在线:100人</span>
                <span>王小虎,欢迎您！</span>
            </el-header>
            <el-main style="display :flex;justify-content: space-around;flex-wrap: wrap">
                <div class="block" style="display: flex; flex-direction: column;justify-content: flex-start">
                    <el-image :src="src"  style="width: 250px; height: 250px"  :fit="fit" >
                        <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                        </div>
                    </el-image>
                    <div style="line-height:40px;text-align: left ">
                        <div style="text-align: center;">软件测试题库</div>
                    </div>
                </div>
                <div class="block" style="display: flex; flex-direction: column;justify-content: flex-start">
                    <el-image :src="src"  style="width: 250px; height: 250px"  :fit="fit" >
                        <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                        </div>
                    </el-image>
                    <div style="line-height:40px;text-align: left ">
                        <div style="text-align: center;">Java开发题库</div>
                    </div>
                </div>
                <div class="block" style="display: flex; flex-direction: column;justify-content: flex-start">
                    <el-image :src="src"  style="width: 250px; height: 250px"  :fit="fit" >
                        <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                        </div>
                    </el-image>
                    <div style="line-height:40px;text-align: left ">
                        <div style="text-align: center;">前端题库</div>
                    </div>
                </div>
                <div class="block" style="display: flex; flex-direction: column;justify-content: flex-start">
                    <el-image :src="src"  style="width: 250px; height: 250px"  :fit="fit" >
                        <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                        </div>
                    </el-image>
                    <div style="line-height:40px;text-align: left ">
                        <div style="line-height:40px;text-align: left ">
                            <div style="text-align: center;">运维题库</div>
                        </div>
                    </div>
                </div>
            </el-main>

        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Option",
        data(){
            return{
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
            }
        }
    }
</script>

<style scoped>
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
        /*line-height: 160px;*/
        line-height: calc(100vh - 120px);
        height:calc(100vh - 60px) ;
    }

    body > .el-container {
        margin-bottom: 40px;
        height: 100vh;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>