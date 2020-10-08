<template>
  <div class="bottom-bar">
     <div class="left tips">
       <img src="~/assets/img/smile.jpg" alt="">
     </div>
    <div class="center">
      <button class="btn-common btn-collect" @click="itemClick(1)">收款</button>
    </div>
    <div class="right">
      <button class="btn-common btn-transfer"  @click="itemClick(2)">转账</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailBottomBar",
      methods:{
          itemClick(index){
            this.$emit("bottom-click",index)
          }
      }

    }
</script>

<style scoped>
  .bottom-bar {
    height: 55px;

    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    text-align: center;
    align-items: flex-end;

  }

  .bottom-bar .left {
    height: 55px;
    flex: 1;
    padding-top: 5%;

  }
  .bottom-bar .center ,.bottom-bar .right {
    height: 55px;
    flex: 2;
    padding-top: 5%;
  }

  .btn-common{

    outline: none;
    width: 95%;
    height: 85%;
    border-radius: 5px;
    border: none;
    color: white;
  }
  .btn-collect{
    background-color: #8c9eff;
  }
  .btn-transfer{
    background-color: #5677fc;
  }
  .tips{
    color: darkgray;
  }
  .tips img{
    width: 35px;
    height: 35px;
  }
</style>
