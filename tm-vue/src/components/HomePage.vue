<template>
    <div class="container">
        <Nav></Nav>
        <div class="img1">
            <img src="http://www.zhdlink.com/static/images/banner01.jpg" style="width:100%; height:100%">
        </div>
        <div class="backtop" @click="backtop">
            <div class="el-icon-top"></div>
        </div>
    </div>
</template>

 
<script>
import Nav from './Nav.vue'
export default{
    components:{
        Nav
    },
    methods:{
        backtop(){
            document.documentElement.scrollTop=0
        }
    }
}


</script>


 
<style scoped>
.container{
    margin : 0 auto;
    padding: 0;
}
.img1{
    width: 100%;
    height: 840px;
    vertical-align: center;
    transition: 0.5s all ease-in-out;
}
.img1:hover{
    transform: scale(1.2);
}
.backtop{
    position: fixed;
    box-sizing:border-box;
    bottom: 50px;
    right: 50px;
    width: 45px;
    height: 45px;
    border: 1px solid #ddd;
    background-color: white;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    line-height:50px;
}
.el-icon-top{
    display: inline-block;
    font-size: 25px;
}
</style>
