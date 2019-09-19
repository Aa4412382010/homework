<template>
  <el-col class="header" :span="21">
    <el-carousel height="300px">
      <el-carousel-item v-for="(item ,index) in headerImg" :key="index">
        <img :src="item.img" alt="header">
      </el-carousel-item>
    </el-carousel>
    <el-col class="card" :span="4" v-for="(music, index) in MusicList" :key="index + music" :offset="index == 0 || index%4 == 0 ? 1 : 2">
    <el-card>
      <img :src="music.pic" class="image">
      <div style="padding: 14px;">
        <span>{{music.title}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ music.artist }}</time>
          <el-button type="text" class="button" @click="play(music)">播放</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
  <el-col offset="2">
  <MusicPlayer ref="Music"/>
  </el-col>
  </el-col>
</template>

<script>
import MusicPlayer from '../components/MusicPlayer'
export default {
  name: 'home',
  components: {
    MusicPlayer
  },
  computed:{
    headerImg(){
      return this.$store.getters.headerImg
    },
    MusicList(){
      if(this.$store.getters.search.length){
        return this.$store.getters.search
      }else{
      return this.$store.getters.album
      }
    },
  },
  methods:{
    play(music){
      this.$refs.Music.play(music)
    }
  }
}
</script>

<style scoped>
  .el-carousel{
    margin: 2rem;
  }

  img {
    width: 100%;
    height: auto;
  }
  .header{
    position: relative;
    left: 11rem;
    height: 60rem;
    overflow: auto;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 10rem;
    height: 10rem;
    display: block;
  }
  span {
    font-size: .8rem;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .card{
    margin-bottom: 3%
  }
</style>