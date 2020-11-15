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

    <main-tab-bar v-show="isShow"></main-tab-bar>
  </div>
</template>

<script>

  import MainTabBar from "@/components/content/maintabbar/MainTabBar"
  import {createSocket} from "./utils/websocket";
  import {Message_Type} from "./utils/socket-constants";
  import {SysConstants} from "./constants/SysConstants";
  import {getToken} from "./network/auth";

  export default {
    name: 'App',
    components: {
      MainTabBar
    },
    data() {
      return {
        cacheView: []
      }
    },


    methods: {
      getWebSocketMessage(e) {
        if (!(e && e.detail.data)) {
          return;
        }
        console.log(e)
        const res = JSON.parse(e.detail.data)
        switch (res.type) {
          case Message_Type.register:

            break
          case Message_Type.receive:
            //接收到服务器消息

            break
          case Message_Type.notify:
            //接收订单通知信息
            this.$store.dispatch("saveNotifyMessage", res.data)
            break
        }
      },
      saveState() {
        this.$store.dispatch("saveState")
      }
    },

    computed: {
      isShow() {
        return this.$route.path.indexOf('/home') != -1 || this.$route.path.indexOf('/profile') != -1;
      }
    },
    mounted() {
      window.addEventListener("receiveMessage", this.getWebSocketMessage)
      window.addEventListener("unload", this.saveState)
      window.addEventListener("load", function () {
        sessionStorage.clear()
        createSocket(SysConstants.webSocketUrlPrefix + "?token=" + getToken());

      })
    },
    beforeDestroy() {
      window.removeEventListener("receiveMessage", this.getWebSocketMessage)
    },

  }
</script>

<style>
  @import "assets/css/base.css";
</style>
