<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div @click="showLeftMenu" slot="nav-bar-left">
        <img alt="" src="~assets/img/menu.png" style="width: 40px;height: 40px">
      </div>

      <div slot="nav-bar-center">首页</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <notification></notification>
    <scroll class="content" ref="myScroll">
      <home-list-item :info="contract" :key="index" v-for="(contract,index) in contracts"></home-list-item>
    </scroll>

    <!--遮罩层组件-->
    <mask-layer :show="mask"></mask-layer>
    <!--左侧菜单组件-->
    <menu-left :list="menu.list" :show="menu.show" @closeLeftMenu="closeLeftMenu"></menu-left>
  </div>

</template>
<script>
  import MaskLayer from "@/components/common/menuleft/MaskLayer";
  import MenuLeft from "@/components/common/menuleft/MenuLeft";
  import Scroll from "@/components/common/scroll/Scroll";
  import NavBar from '@/components/common/navbar/NavBar'
  import Notification from "@/components/common/notification/Notification";
  import HomeSwiper from "./childComps/HomeSwiper";

  import HomeListItem from "../../components/content/homelist/HomeListItem";
  import {SET_WALLET_ADDRESS} from "../../store/mutation-type";
  import {mapActions, mapGetters} from 'vuex'
  import {getUserRelationContracts} from '@/network/user'

  export default {
    name: "home",
    components: {
      NavBar,
      HomeSwiper,

      Notification,
      Scroll,
      HomeListItem,
      MenuLeft,
      MaskLayer

    },
    data() {
      return {
        banners: [require('@/assets/img/img1.jpg'), require('@/assets/img/img2.jpg'), require('@/assets/img/img3.jpg')],
        mask: false,
        menu: {
          show: false,
          list: [],
        },
        contracts: []
      };
    },
    created() {
      this.getUserRelationContract();

    },

    computed: {
      ...mapGetters(['getWalletAddress']),

      showImg(name) {
        return require('@/assets/img/' + name)
      }
    },
    methods: {
      ...mapActions([SET_WALLET_ADDRESS]),
      async getUserRelationContract() {

        let walletAddress = this.getWalletAddress;
        const result = await getUserRelationContracts(walletAddress)

        this.contracts = result.data;
        this.$nextTick(() => {
          if (this.$refs.myScroll) {
            this.$refs.myScroll.refresh()
          }
        })

      },
      iconURL(item) {
        return require('@/assets/img/' + item.icon)
      },
      closeLeftMenu() {
        this.menu.show = false
        this.mask = false
      },
      showLeftMenu() {
        console.log(this.$refs.myScroll)
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

  .content {


    height: calc(100% - 44px - 40px - 200px - 55px - 10px);
    overflow: hidden;
  }


</style>
