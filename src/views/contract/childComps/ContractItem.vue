<template>
  <div class="contract-item">

    <p class="contract-item-name">{{item.name}}</p>
    <p class="contract-item-symbol">{{item.symbol}}</p>
    <p class="contract-item-supply">{{item.totalSupply}}</p>
    <p class="contract-item-status">{{getStatus}}</p>
  </div>
</template>

<script>
  export default {
    name: "ContractItem",
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      getStatus() {
        let status;
        switch (this.item.status) {
          case 1:
            status = "成功"
            break
          case 2:
            status = "失败"
            break
          default:
            status = "部署中"
            break
        }

        return status;
      }
    }
  }
</script>

<style scoped>
  .contract-item {
    margin-top: 5%;
    display: flex;


    justify-content: space-between;
  }

</style>
