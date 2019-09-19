<template>
  <div>
    <MusicHeader/>
    <div class="middle">
    <MusicAside />
    <router-view></router-view>
    </div>
    </div>
</template>

<script>
import MusicHeader from './components/MusicHeader'
import MusicAside from './components/MusicAside'

export default {
  name: 'app',
  components: {
    MusicHeader,
    MusicAside,
  }
}
</script>

<style>
body {
  margin: 0px;
}
.middle{
  display: flex;
}
</style>
