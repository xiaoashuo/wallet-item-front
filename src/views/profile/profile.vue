<template>
   <div id="profile">
        <nav-bar class="profile-nav-bar">
            <div slot="nav-bar-center">我的</div>
        </nav-bar>
   </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
  name: "profile",
  components:{
    NavBar
  },
  data () {
    return {
    };
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
</style>