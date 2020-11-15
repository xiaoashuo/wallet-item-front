<template>
  <div class="swiper-content">
    <swiper :options="swiperOptions" ref="mySwiper">
      <swiper-slide :key="index" v-for="(banner,index) in banners">
        <img :src="banner"/>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>


  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },

    data() {
      return {
        swiperOptions: {
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },

    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      // this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style scoped>

  .swiper-content {
    width: 100%;
    height: 200px;
  }

  .swiper-slide {
    height: 200px;
  }

  .swiper-container img {
    width: 100%;
    height: 100%;
  }
</style>
