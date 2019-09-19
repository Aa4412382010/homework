<template>
    <el-col :span="3">
        <h5>推荐</h5>
        <hr>
        <el-menu :default-active="active" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <router-link to="/" class="el-menu-item" index="1">
                <i class="el-icon-service"></i>
                <span>发现音乐</span>
            </router-link>
            <router-link class="el-menu-item" to="/video" index="2">
                <i class="el-icon-video-camera"></i>
                <span>视频</span>
            </router-link>
            <router-link class="el-menu-item" to="/MusicList" index="2">
                <i class="el-icon-service"></i>
                <span>音乐列表</span>
            </router-link>
        </el-menu>
    </el-col>
</template>

<script>
    export default {
        computed:{
            active(){
                return this.$store.getters.active
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style scoped>
    .el-col {
        border: 2px solid #409eff;
        position: fixed;
        top:4.5rem
    }
    h5 {
        margin-left: 1rem;
    }
    a{
        text-decoration:none;
        color:#333;
    }
    .el-menu-item{
        display: list-item;
    }
</style>