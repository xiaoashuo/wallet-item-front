<template>
   <div id="home">
          <nav-bar class="home-nav-bar">
              <div slot="nav-bar-center">首页</div>
          </nav-bar>
          <home-swiper :banners="banners"></home-swiper>
          <notification></notification>
          <home-lists></home-lists>

   </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar'
import Notification from "../../components/common/notification/Notification";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeLists from "./childComps/HomeLists";
import {getGasInfo} from '@/network/token'

export default {
  name: "home",
  components:{
      NavBar,
      HomeSwiper,
      HomeLists,
    Notification
  },
  data () {
    return {
        banners: [ require('@/assets/img/img1.jpg'),require('@/assets/img/img2.jpg'), require('@/assets/img/img3.jpg') ],

    };
  },
  created(){
      console.log("home主页创建")
      console.log(getGasInfo());
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
      	iconURL(item) {
				return require('@/assets/img/' + item.icon)
      }
  }
}
</script>
<style scoped>
#home {
    margin-bottom: 49px;
    overflow: hidden;
  }

  .home-nav-bar {
    color: white;
    background-color: var(--color-blue);
  }


</style>
