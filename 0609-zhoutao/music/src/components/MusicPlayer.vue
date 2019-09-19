<template>
    <el-col class="palyer" :span="18" hidden>
    <aplayer theme="#409eff" showLrc :music="album[0]" :list="album" listFolded repeat="list"/>
    </el-col>
</template>

<script>
    import Aplayer from 'vue-aplayer'

    export default {
        components: {
            Aplayer
        },
        props:['music'],
        data(){
            return{
            album:[{
                    title: '光年之外',
                    artist: 'G.E.M. 邓紫棋',
                    src: 'http://localhost:8080/music/G.E.M. 邓紫棋 - 光年之外.mp3',
                    pic: require("../../public/pic/光年之外.png"),
                    lrc: 'http://localhost:8080/lrc/光年之外.lrc'
                }],
            }
        },
        methods:{
            play(music){
                document.getElementsByClassName('palyer')[0].hidden =false
                if(this.album.indexOf(music)>-1){
                    let add_music = this.album.splice(this.album.indexOf(music),1)[0]
                    this.album.unshift(add_music)
                }else{ 
                    this.album.unshift(music)
                }
            }
        }
    }
</script>
<style scoped>
    /* .el-col{
        position: relative;
        left: inherit;
    } */
</style>