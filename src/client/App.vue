<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header/Header'

export default {
  name: 'app',
  components: {
    Header
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
  .btn {
    display: block;
    width: 8rem;
    height: 3rem;
    margin: 1rem;
    border: none;
    border-radius: 10px;
    font-size: 2rem;
    cursor: pointer;
    color: #fff;
    background: #188eee;
    outline: none;
    transition: background .5s;
  }
  .btn:hover {
    background: #0364b3;
  }
  .main {
    flex: 1;
  }
</style>
