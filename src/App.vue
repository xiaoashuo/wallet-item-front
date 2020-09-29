<template>
  <div id="app">
     <keep-alive>
      <router-view/>
     </keep-alive>
     <main-tab-bar v-if="!isLogin" ></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "@/components/content/maintabbar/MainTabBar"
export default {
  name: 'App',
  components:{
     MainTabBar
  },
  methods:{
    clickMethod(){
     
    }
  },
  computed:{
    isLogin(){
      return this.$route.path.indexOf('/login')!=-1;
    }
  },
  created(){
   
  },
  mounted(){

  }
 
}
</script>

<style>
    @import "assets/css/base.css";
</style>
