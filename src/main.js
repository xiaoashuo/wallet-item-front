import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './filters'
import toast from '@/components/common/toast'
import {Autoplay, Mousewheel, Navigation, Pagination, Swiper as SwiperClass} from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import 'swiper/swiper-bundle.css'


Vue.config.productionTip = false
Vue.use(toast)
Vue.prototype.$bus = new Vue();

SwiperClass.use([Pagination, Mousewheel, Autoplay, Navigation])
Vue.use(getAwesomeSwiper(SwiperClass))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
