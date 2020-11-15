<template>
  <tab-bar>
    <tab-bar-item activeColor="var(--color-tint)" link="/home">
      <svg aria-hidden="true" class="icon" slot="item-icon">
        <use xlink:href="#icon-shouye1-copy"></use>
      </svg>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item activeColor="var(--color-tint)" link="/profile">
      <svg aria-hidden="true" class="icon" slot="item-icon">
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
    components: {
      TabBar,
      TabBarItem
    }
  };
</script>
<style scoped>
</style>
