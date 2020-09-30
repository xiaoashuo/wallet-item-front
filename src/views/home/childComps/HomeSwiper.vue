<template>
   <div class="swiper-content">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide   v-for="(banner,index) in banners" :key="index">
        <img :src="banner"/>
      </swiper-slide>

      <div class="swiper-pagination"   slot="pagination"></div>
    </swiper>
   </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/swiper-bundle.css'

    export default {
        name: "HomeSwiper",
        props:{
          banners:  {
            type: Array,
            default(){
              return []
            }
          }
        },
        components:{
          Swiper,
          SwiperSlide
        },
        data(){
          return{
            swiperOptions: {

              autoplay: {
                delay: 2000,
                disableOnInteraction: false
              },
              loop: true,
              pagination: {
                el: '.swiper-pagination',
                clickable:true
              }
            }
          }
        },

      computed:{
        swiper() {
          return this.$refs.mySwiper.$swiper
        }
      },
      mounted() {
        this.swiper.slideTo(3, 1000, false)
      }
    }
</script>

<style scoped>

  .swiper-container {
    width: 100%;
    height: 200px;
  }
  .swiper-container img{
    width: 100%;
  }
</style>
