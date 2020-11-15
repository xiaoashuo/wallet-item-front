<template>
  <div class="grid-view-item">
    <div class="grid-view-item-left">
      <img alt="" src="~/assets/logo.png">
    </div>
    <div class="grid-view-item-right">
      {{item.text}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "GridViewItem",
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .grid-view-item {
    text-align: center;
  }

  .grid-view-item-left img {
    height: 60px;
    width: 60px;
  }
</style>
