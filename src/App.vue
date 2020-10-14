<template>
  <div id="app">
<!--    <template v-if="$store.getters.getRefresh">-->
<!--      <keep-alive :include="cacheView">-->
<!--        <router-view/>-->
<!--      </keep-alive>-->
<!--    </template>-->
<!--    <template v-if="!$store.getters.getRefresh">-->
<!--      <router-view/>-->
<!--    </template>-->
    <keep-alive :include="cacheView">
      <router-view/>
    </keep-alive>

     <main-tab-bar v-show="isShow" ></main-tab-bar>
  </div>
</template>

<script>

import MainTabBar from "@/components/content/maintabbar/MainTabBar"
import {WebSocketUtil} from "./utils/WebSocketUtil";

export default {
  name: 'App',
  components:{
     MainTabBar
  },
  data(){
    return{
      cacheView:[]
    }
  },
created() {
    var webSocketUtil = new WebSocketUtil();
    webSocketUtil.initWebSocket("ws://127.0.0.1:9001/ws?token=111")
},
  methods:{
    clickMethod(){

    },
    saveState(){
      this.$store.dispatch("saveState")
    }
  },

  computed:{
    isShow(){
      return this.$route.path.indexOf('/home')!=-1||this.$route.path.indexOf('/profile')!=-1;
    }
  },
  mounted() {
    window.addEventListener("unload",this.saveState)
    window.addEventListener("load",function () {
      sessionStorage.clear()
    })
  }

}
</script>

<style>
    @import "assets/css/base.css";
</style>
