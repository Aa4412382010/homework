<template>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="#409eff" text-color="#fff" active-text-color="#303133">
        <el-row>
            <el-col><img src="../../public/51memo-logo.png" alt="logo"></el-col>
            <el-col class="search">
                <el-input v-model="input" placeholder="搜索音乐">
                </el-input>
                <el-button icon="el-icon-search" circle @click="search"></el-button>
            </el-col>
            <el-col class="memu">
                <el-menu-item index="1"><i class="el-icon-user-solid" />用户</el-menu-item>
                <el-menu-item index="2"><i class="el-icon-message-solid" />消息中心</el-menu-item>
                <el-menu-item index="3"><i class="el-icon-s-tools" />设置</el-menu-item>
            </el-col>
        </el-row>
    </el-menu>
</template>

<script>
    export default {
        data() {
            return {
                input: '',
                activeIndex2: ''
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            search(){
                this.$store.commit('getSearch',this.input)
            }
        }
    }
</script>
<style scoped>
    .el-menu.el-menu--horizontal {
        border-bottom: solid 0px #e6e6e6 !important;
    }

    .el-menu-demo {
        padding: 0.5rem;

    }

    .el-menu-item i {
        color: #ffffff !important;
    }

    .el-row {
        display: flex;
        justify-content: space-between;

    }
    .search{
        display: flex;
    }
    .memu {
        display: flex;
        justify-content: flex-end;
    }
    .el-button{
        border-radius:5px !important;
        height: max-content;
        position: relative;
        top: 0.5rem;
    }
    .el-input {
        top: 0.5rem
    }
</style>