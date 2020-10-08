<template>
  <div id="app">
     <keep-alive :include="cacheView">
      <router-view/>
     </keep-alive>

     <main-tab-bar v-show="isShow" ></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "@/components/content/maintabbar/MainTabBar"
export default {
  name: 'App',
  components:{
     MainTabBar
  },
  data(){
    return{
      cacheView:['home','ContractList','Detail','WalletList']
    }
  },
  methods:{
    clickMethod(){

    }
  },
  computed:{
    isShow(){

      return this.$route.path.indexOf('/home')!=-1||this.$route.path.indexOf('/profile')!=-1;
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
