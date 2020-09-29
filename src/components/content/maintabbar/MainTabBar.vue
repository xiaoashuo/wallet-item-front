<template>
  <tab-bar>
    <tab-bar-item link="/home" activeColor="var(--color-tint)">
      <svg slot="item-icon" class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouye1-copy"></use>
      </svg>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/profile" activeColor="var(--color-tint)">
      <svg slot="item-icon" class="icon" aria-hidden="true">
        <use xlink:href="#icon-wode"></use>
      </svg>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from "@/components/common/tabBar/TabBar";
import TabBarItem from "@/components/common/tabBar/TabBarItem";
require("@/assets/iconfont/tabbar/iconfont");
export default {
  name: "MainTabBar",
  components:{
      TabBar,
      TabBarItem
  }
};
</script>
<style scoped>
</style>