<template>
    <div class="home-list-item">
      <img src="~/assets/logo.png" alt="logo标识">
      <div>我说列表</div>
    </div>
</template>

<script>
    export default {
        name: "HomeListItem"
    }
</script>

<style scoped>
 .home-list-item{
   width: 100%;
   height: 40px;
   display:flex;
   justify-content:flex-start;

 }
 .home-list-item  img{
   padding-top: 10px;
    padding-left: 10px;
     width: 40px;
     height: 40px;
   }
 .home-list-item  div{
     display: inline-block;
     width: calc(100% - 40px - 6px - 20px);
     font-size: 15px;
     margin-left: 20px;
   height: 45px;
   line-height: 45px;
   }

</style>
