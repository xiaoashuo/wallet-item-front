<template>
   <div id="home">
          <nav-bar class="home-nav-bar">
              <div slot="nav-bar-center">首页</div>
          </nav-bar>
          <div class="swiper-content">
              <swiper ref="mySwiper" :options="swiperOptions">
                  <swiper-slide  :key="banner" v-for=" banner in banners">
                       <img :src="banner"/>
                   </swiper-slide>
                 
                  <div class="swiper-pagination" ></div>
              </swiper>
          </div>
   </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

import {getGasInfo} from '@/network/token'
import 'swiper/swiper-bundle.css'

export default {
  name: "home",
  components:{
      NavBar,
      Swiper,
      SwiperSlide
  },
  data () {
    return {
        banners: [ require('@/assets/img/img1.jpg'),require('@/assets/img/img2.jpg'), require('@/assets/img/img3.jpg') ],       
        swiperOptions: {
            autoplay: 5000,
            pagination: {
                el: '.swiper-pagination'
            }
        }
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

  .swiper-content {
      border: 1px solid red;
      height: 200px;
  }

</style>