<template>
  <div class="menu">
    <div :class="{'show': show}" class="menu-list">
      <div class="menu-header">

        <div class="menu-title">Ces</div>
      </div>
      <div class="menu-ul">


      </div>
    </div>
    <div class="menu-other">
    </div>
  </div>
</template>

<script>

  export default {
    name: 'LeftMenu',
    props: {
      show: {
        type: Boolean
      }
    },

  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import 'menu.styl';

</style>
