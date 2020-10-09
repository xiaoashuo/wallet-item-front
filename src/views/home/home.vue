<template>
   <div id="home">
          <nav-bar class="home-nav-bar">
            <div slot="nav-bar-left" @click="showLeftMenu">
              <img  style="width: 40px;height: 40px" src="~assets/img/menu.jpg" alt="">
            </div>

            <div slot="nav-bar-center">首页</div>
          </nav-bar>
          <home-swiper :banners="banners"></home-swiper>
          <notification></notification>
     <scroll  class="content" ref="scroll">
          <home-lists></home-lists>
     </scroll>

     <!--遮罩层组件-->
     <mask-layer :show="mask"></mask-layer>
     <!--左侧菜单组件-->
     <menu-left @closeLeftMenu="closeLeftMenu" :show="menu.show" :list="menu.list"></menu-left>
   </div>

</template>
<script>
  import MaskLayer from "../../components/common/menuleft/MaskLayer";
import MenuLeft from "../../components/common/menuleft/MenuLeft";
import Scroll from "../../components/common/scroll/Scroll";
import NavBar from '@/components/common/navbar/NavBar'
import Notification from "../../components/common/notification/Notification";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeLists from "./childComps/HomeLists";

import {SET_WALLET_ADDRESS} from "../../store/mutation-type";
import {mapActions} from 'vuex'
export default {
  name: "home",
  components:{
      NavBar,
      HomeSwiper,
      HomeLists,
    Notification,
    Scroll,
    MenuLeft,
    MaskLayer

  },
  data () {
    return {
        banners: [ require('@/assets/img/img1.jpg'),require('@/assets/img/img2.jpg'), require('@/assets/img/img3.jpg') ],
      mask:false,
      menu:{
        show:false,
        list:[]
      },
    };
  },
  created(){



  },
  computed:{
      swiper(){
          return this.$refs.mySwiper.$swiper
      },
      showImg(name){
    	return require('@/assets/img/' + name)
      }
  },
  methods:{
       ...mapActions([SET_WALLET_ADDRESS]),
      	iconURL(item) {
				return require('@/assets/img/' + item.icon)
      },
    closeLeftMenu(){
      this.menu.show = false
      this.mask = false
    },
    showLeftMenu(){
      this.menu.show = true
      this.mask = true
    }
  }
}
</script>
<style scoped>
#home {
  height: 100vh;
  position: relative;
  margin-bottom: 49px;
  }

  .home-nav-bar {
    color: white;
    background-color: var(--color-blue);
  }
.content{
  height: calc(100% - 44px - 40px - 200px - 55px - 10px);
  overflow: hidden;
}
.home-list-content{
  height: 100%;
}


</style>
