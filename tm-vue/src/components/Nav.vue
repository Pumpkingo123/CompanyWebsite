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
    <el-menu-item index="0" id="box" @mouseover="h" @click = "go('Home')">
      <img id='pic' src="../assets/logo.png" alt="">
    </el-menu-item>
    <el-menu-item class=Nav index="1" id='a' @mouseover="h" @click = "go('Home')">
      <i class="el-icon-s-home" style="color: white"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item class=Nav index="2" id='b' @mouseover="h" @click = "go('Help')">
      <i class="el-icon-thirdditu_diqiu_o" style="color: white"></i>
      <span slot="title">帮助文档</span>
    </el-menu-item>
    <el-menu-item class=Nav index="3" id='c' @mouseover="h" @click = "go('Search')">
      <i class="el-icon-search" style="color: white"></i>
      <span slot="title">搜索</span>
    </el-menu-item>
    <el-menu-item class=Nav index="4" id='d' @mouseover="h" @click = "go('Register')" style="float:right">
      <i class="el-icon-thirdzhuce" style="color: white"></i>
      <span slot="title">注册</span>
    </el-menu-item>
    <el-menu-item class=Nav index="5" id='e' @mouseover="h" @click = "go('Login')" style="float:right">
      <i class="el-icon-thirddenglu" style="color: white"></i>
      <span slot="title">登录</span>
    </el-menu-item>
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
.container{
  height: 100%;
  width: 100%;
}

.el-menu{
  position: fixed;
  top: 0;
  z-index: 999;
  height: 60px;
  width: 100%;
}

.Nav:hover{
  background-color:#cd6155 !important;
  color: white !important;
}

#box{
  margin-left: 100px;
  height: 60px;
  width: 60px;
  overflow: hidden;
}

#pic{
  width: 100%;
  height: 100%;
  object-fit:contain;
  transition: 0.5s all ease-in-out;
}

#pic:hover{
  transform: scale(1.5);
}

#d{
  margin-right: 90px;
}
.el-icon-thirdditu_diqiu_o{
  font-size: 25px;
}

</style>