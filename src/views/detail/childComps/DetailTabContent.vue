<template>

  <div class="transfer-list-item ">
    <div class="transfer-list-item-left ">
      <img alt="" src="~/assets/logo.png">
    </div>

    <div class="transfer-list-item-center  ">
      <p>{{getToAddress | addressFormat}}</p>
      <p>{{item.gmt_create}}</p>
    </div>
    <div class="transfer-list-item-right  ">
      <p>{{item.amount}}</p>
    </div>
  </div>


</template>

<script>

  export default {
    name: "DetailTabContent",
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      getToAddress() {
        const walletAddress = this.$store.getters.getWalletAddress;
        return walletAddress == this.item.toAddress ? this.item.fromAddress : this.item.toAddress;
      }
    }
  }
</script>

<style scoped>
  .transfer-list-item {
    width: 100%;
    height: 40px;
    margin-top: 3px;
    margin-bottom: 3px;
    display: flex;
    justify-content: space-around;
  }

  .transfer-list-item-left {

  }

  .transfer-list-item-left img {

    width: 40px;
    height: 40px;
  }
</style>
