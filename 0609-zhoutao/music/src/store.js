import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerImg:[
      {img:require("../public/pic/header/header1.jpg")
    },{
      img:require("../public/pic/header/header2.jpg")
    },{
      img:require("../public/pic/header/header3.jpg")
    },{
      img:require("../public/pic/header/header4.jpg")
    }],
    search:[],
    active:'1',
    videoList:['http://localhost:8080/video/黄义达 - 那女孩对我说.mp4',
      'http://localhost:8080/video/G.E.M.邓紫棋 - 来自天堂的魔鬼.mp4',
      'http://localhost:8080/video/梁汉文 - 七友.mp4',
      'http://localhost:8080/video/G.E.M.邓紫棋 - 泡沫.mp4',
    ],
    album:[
      {
        title: '君が好きだと叫びたい',
        artist: 'BAAD',
        src: 'http://localhost:8080/music/BAAD - 君が好きだと叫びたい.mp3',
        pic: require("../public/pic/君が好きだと叫びたい.jpg"),
        lrc: 'http://localhost:8080/lrc/君が好きだと叫びたい.lrc'
      },
      {
        title: '十年',
        artist: '陈奕迅',
        src: 'http://localhost:8080/music/陈奕迅 - 十年.mp3',
        pic: require("../public/pic/十年.jpg"),
        lrc: 'http://localhost:8080/lrc/十年.lrc'
      },
      {
        title: 'K歌之王',
        artist: '陈奕迅',
        src: 'http://localhost:8080/music/陈奕迅 - K歌之王 (粤语).mp3',
        pic: require("../public/pic/K歌之王.jpg"),
        lrc: 'http://localhost:8080/lrc/K歌之王.lrc'
      },
      {
        title: '大地',
        artist: 'BRYOND',
        src: 'http://localhost:8080/music/BEYOND - 大地 (粤语).mp3',
        pic: require("../public/pic/大地.jpg"),
        lrc: 'http://localhost:8080/lrc/大地.lrc'
      },
      {
        title: '光辉岁月',
        artist: 'BRYOND',
        src: 'http://localhost:8080/music/BEYOND - 光辉岁月 (粤语).mp3',
        pic: require("../public/pic/光辉岁月.jpg"),
        lrc: 'http://localhost:8080/lrc/光辉岁月.lrc'
      },
      {
        title: '给我一个理由忘记',
        artist: 'A-Lin',
        src: 'http://localhost:8080/music/A-Lin - 给我一个理由忘记.mp3',
        pic: require("../public/pic/给我一个理由忘记.jpg"),
        lrc: 'http://localhost:8080/lrc/给我一个理由忘记.lrc'
      },
      {
        title: '光年之外',
        artist: 'G.E.M. 邓紫棋',
        src: 'http://localhost:8080/music/G.E.M. 邓紫棋 - 光年之外.mp3',
        pic: require("../public/pic/光年之外.png"),
        lrc: 'http://localhost:8080/lrc/光年之外.lrc'
      },
      {
        title: '追梦赤子心',
        artist: 'GALA',
        src: 'http://localhost:8080/music/GALA - 追梦赤子心.mp3',
        pic: require("../public/pic/追梦赤子心.jpg"),
        lrc: 'http://localhost:8080/lrc/追梦赤子心.lrc'
      },
    ]
  },
  mutations: {
    getSearch(state, payload){
      state.search = state.album.filter(p =>{
        if(p.title.includes(payload)||p.artist.includes(payload)){
          return p
        }
      })
    }
  },
  actions: {
    getSearch ({ commit }, payload) { commit('getSearch', payload) },
  },
  getters:{
    headerImg:(state) => {return state.headerImg},
    album:(state) => {return state.album},
    search:(state) =>{return state.search},
    active:(state) =>{return state.active},
    videoList:(state) =>{return state.videoList}
  }
})
