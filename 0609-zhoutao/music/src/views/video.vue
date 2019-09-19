<template>
<div>
  <el-col id="dplayer" :span="10">   
  </el-col>
  <el-button type="primary" icon="el-icon-refresh-right" circle @click="swith">切换视频</el-button>
  </div>
</template>

<script>

import 'dplayer/dist/DPlayer.min.css';
import DPlayer from 'dplayer';

export default {
  data(){
    return {
      db:null,
      vnumber:0,
    }
  },
  computed:{
    videolist(){
      return this.$store.getters.videoList
    }
  },
  mounted(){
    this.dp = new DPlayer({
        container: document.getElementById('dplayer'),
        video: {
            url: this.videolist[0]
        },
        theme	:'#b7daff',
    })
  },
  methods:{
    swith(){
      this.vnumber +=1
      if(this.vnumber == 4){
        this.vnumber = 0
      }
      this.dp.switchVideo({
          url: this.videolist[this.vnumber],
          autoplay:true
      })
      }
  }
}
</script>
<style scoped>
  .el-col{
    position: absolute;
    top: 23%;
    right: 27%;
  }
  .el-button{
    position: absolute;
    top: 76%;
    right: 47%;
    border-radius: 6% !important;
  }
</style>
