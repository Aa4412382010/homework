<template>
    <el-col class="palyer" :span="18" hidden>
    <aplayer theme="#409eff" showLrc :music="album[0]" :list="album" listFolded/>
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
                    title: '',
                    artist: '',
                    src: '',
                    pic: '',
                    lrc: ''
                }],
            }
        },
        methods:{
            play(music){
                if(!this.album[0].title){
                    this.album.unshift(music)
                    this.album.pop()
                    document.getElementsByClassName('palyer')[0].hidden =false
                }else{
                    if(this.album.indexOf(music)>-1){
                        let add_music = this.album.splice(this.album.indexOf(music),1)[0]
                        this.album.unshift(add_music)
                    }else{
                        this.album.unshift(music)
                    }
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