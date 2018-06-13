<template>
  <div id="app">
    <Header></Header>
    <BranchStage></BranchStage>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import BranchStage from './components/BranchStage/BranchStage.vue'

export default {
  name: 'app',
  components: {
    Header,
    BranchStage
  }
}
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
