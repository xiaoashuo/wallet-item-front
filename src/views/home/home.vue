<template>
   <div id="home">
          <nav-bar class="home-nav-bar">
              <div slot="nav-bar-center">首页</div>
          </nav-bar>
          <home-swiper :banners="banners"></home-swiper>
          <notification></notification>
     <scroll  class="content" ref="scroll">
          <home-lists></home-lists>
     </scroll>

   </div>
</template>
<script>
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
    Scroll
  },
  data () {
    return {
        banners: [ require('@/assets/img/img1.jpg'),require('@/assets/img/img2.jpg'), require('@/assets/img/img3.jpg') ],

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
