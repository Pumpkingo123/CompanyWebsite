<template>
<div class="container">
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#19324c"
    text-color="#fff"
    active-text-color="#fff">
    <div>111111</div>
    <el-menu-item class=Nav index="1" @mouseover="h" @click = "go('Home')">首页</el-menu-item>
    <el-menu-item class=Nav index="2" @mouseover="h" @click = "go('Help')">帮助文档</el-menu-item>
    <el-menu-item class=Nav index="3" @mouseover="h" @click = "go('Search')">搜索</el-menu-item>
    <el-menu-item class=Nav index="4" @mouseover="h" @click = "go('Register')">注册</el-menu-item>
    <el-menu-item class=Nav index="5" @mouseover="h" @click = "go('Login')">登录</el-menu-item>
  </el-menu>
</div>
</template>

<script>
    export default {
        name:"Nav",
    data() {
      return {
        hover: false
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
        go(path){
          this.$router.push({name: path});
        },
        h(){
          this.hover = true;
        }
    }
  }
</script>

<style scoped>

.el-menu{
  position: sticky;
  top: 0;
  z-index: 999;
  height: 100px;
}
.Nav:hover{
  background-color:#cd6155 !important;
  color: white !important;
}

</style>