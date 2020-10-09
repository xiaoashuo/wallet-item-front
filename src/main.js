import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  './filters'
import toast from '@/components/common/toast'


Vue.config.productionTip = false
Vue.use(toast)
Vue.prototype.$bus=new Vue();

import { Swiper as SwiperClass, Pagination, Navigation, Mousewheel, Autoplay } from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
SwiperClass.use([Pagination, Mousewheel, Autoplay, Navigation])
Vue.use(getAwesomeSwiper(SwiperClass))
import 'swiper/swiper-bundle.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
