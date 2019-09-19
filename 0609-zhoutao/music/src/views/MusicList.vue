 <template>
     <el-col class="header" :span="21" offset="7">
             <el-table :data="musicList" style="width: 55%">
                 <el-table-column prop="title" label="歌名" width="250">
                 </el-table-column>
                 <el-table-column prop="artist" label="歌手" width="180">
                 </el-table-column>
                 <el-table-column label="操作" width="100">
                     <template slot-scope="scope">
                         <el-button type="text" size="small" icon="el-icon-refresh-right" @click="play(scope.row)">播放
                         </el-button>
                     </template>
                 </el-table-column>
             </el-table>
         <MusicPlayer ref="Music" />
     </el-col>
 </template>

 <script>
     import MusicPlayer from '../components/MusicPlayer'
     export default {
         components: {
             MusicPlayer
         },
         computed: {
             musicList() {
                 return this.$store.getters.album
             }
         },
         methods: {
             play(music) {
                 console.log(music);
                 this.$refs.Music.play(music)
             }
         }
     }
 </script>
 <style scoped>
     .el-table {
        border: 2px solid rgb(64, 158, 255);
        margin: 2rem 0rem

     }

 </style>