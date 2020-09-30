<template>
    <div class="home-list-content">
       <home-list>
         <home-list-item></home-list-item>
         <home-list-item></home-list-item>
         <home-list-item></home-list-item>
       </home-list>
    </div>
</template>

<script>
   import HomeList from "../../../components/content/homelist/HomeList";
   import HomeListItem from "../../../components/content/homelist/HomeListItem";
    export default {
        name: "HomeLists",
      components:{
          HomeList,
          HomeListItem
      }
    }
</script>

<style scoped>

</style>
