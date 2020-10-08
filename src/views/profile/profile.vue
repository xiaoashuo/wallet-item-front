<template>
   <div id="profile">
        <nav-bar class="profile-nav-bar">
            <div slot="nav-bar-center">我的</div>
        </nav-bar>
        <section class="profile-header clear-fix">
          <div class="profile_image left">
            <img src="~/assets/logo.png" alt="">
          </div>
          <div class="user-info left">
            <p class="user-info-top" >{{getUserInfo.id}}</p>
            <p>

              <span class="icon-mobile-number">{{getUserInfo.username}}</span>
            </p>
          </div>
          <span class="arrow">
           <i class="iconfont icon-jiantou1"></i>
          </span>
        </section>
        <section class="grid-view-list-content">
           <grid-view-list :items="gridItems"></grid-view-list>
        </section>
        <section class="grid-view-list-right">
          <scroll class="content">
            <profile-lists :profileList="profileList"></profile-lists>
          </scroll>
        </section>
     <div class="grid-view-list-footer">
       <button @click="logout">退出登录</button>
     </div>
   </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar'
import GridViewList from "./childComps/GridViewList";
import ProfileLists from "./childComps/ProfileLists";
import Scroll from "../../components/common/scroll/Scroll";
import {removeToken} from "../../network/auth";
export default {
  name: "profile",
  components:{
    Scroll,
    NavBar,
    GridViewList,
    ProfileLists
  },
  data () {
    return {
      profileList: [{logo: '',text:'发布合约',url:'/contract/publish'},
        {logo: '',text:'我的合约',url:'/contract'}],
      gridItems: [
        {logo: '',text:'我的钱包',url:'/wallet/list'}, {logo: '',text:'测试文本',url:''}, {logo: '',text:'测试文本',url:''}
      ],
    };
  },
  computed:{
    getUserInfo(){
      return this.$store.getters.getUserInfo
    }
  },
  methods:{
    logout(){
      removeToken()
      this.$store.dispatch("setWalletAddress",'')
      this.$store.dispatch("setUserInfo",{})
      this.$router.push("/login")
    }
  }
}
</script>
<style scoped>
#profile {
    margin-bottom: 49px;
    overflow: hidden;

  }

  .profile-nav-bar {
    color: white;
    background-color: var(--color-blue);
  }
  .profile-header{
    margin-top: 2px;
    background-color: var(--color-blue);
  }
.profile_image{
  margin: 10px 0 10px 5px;
  width: 60px;
  height: 60px;
}
.profile_image img{
  width: 100%;
  height: 100%;
}
  .user-info{
    margin-top: 10px;
    margin-left: 20px;
    color: white;
  }
  .user-info-top{
    margin-top: 3px;
    margin-bottom: 10px;
  }
  .grid-view-list-content{
    margin-top: 10px;
  }
.grid-view-list-right{
  margin-top: 15px;
  border-top: 1px solid #f1f1f1;
}
  .grid-view-list-footer{
    margin-top: 35px;
    text-align: center;
  }
  .grid-view-list-footer button{
    width: 50%;
    height: 40px;
    border-radius: 10px;
    outline: none;
    background-color: var(--color-blue);
    border: 1px solid var(--color-blue);
    color: white;
  }
</style>
