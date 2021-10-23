<template>
  <div>
    <div class="nav">
      <a href="/test.html">without vue</a>
      <router-link to="/test_01_FullScreen">FullScreen</router-link>
      <router-link to="/test_02_InitContent">InitContent</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  body{
    padding: 0px;
    margin: 0px;
  }
  .nav{
    margin: 0px;
    background-color: #eee;
    width: 100%;
    height: 60px;
    line-height: 60px;
  }
  a{
    margin-left: 10px;
  }
  a:link, a:visited {
    color:blue;
    text-decoration:underline;
  }

  a:hover, a:active {
    color:red;
    text-decoration:none;
  }
</style>
