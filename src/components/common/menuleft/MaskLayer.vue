<style scoped>
  .ui-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: rgba(0, 0, 0, .6);
  }
</style>
<template>
  <div class="ui-mask" id="BP_Mask" v-show="show"></div>
</template>
<script>
  export default {
    name: "MaskLayer",
    props: ['show']
  }
</script>
