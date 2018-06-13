<template>
  <div class="header">
    <div class="logo-container">
      <img src="../../assets/images/logo.png">
    </div>
    <span class="header-title">GitWeb</span>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .header {
    height: 60px;
    box-sizing: border-box;
    padding: 10px 20px;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(150, 150, 150, 0.3);
  }
  .logo-container {
    position: absolute;
    width: 40px;
    height: 40px;
  }
  .logo-container img {
    height: 100%
  }
  .header-title {
    font-size: 2rem;
    line-height: 1.5;
    color: #188eee;
  }
</style>
