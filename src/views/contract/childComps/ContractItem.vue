<template>
    <div class="contract-item">

      <p class="contract-item-name">{{item.name}}</p>
      <p class="contract-item-symbol">{{item.symbol}}</p>
      <p class="contract-item-supply">{{item.totalSupply}}</p>
    </div>
</template>

<script>
    export default {
        name: "ContractItem",
        props:{
          item:{
            type: Object,
            default(){
              return {}
            }
          }
        }
    }
</script>

<style scoped>
  .contract-item{
    margin-top: 5%;
    display: flex;

  }
  .contract-item-name{
    margin-left: 3%;
    flex: 1;
  }
  .contract-item-symbol{
    flex: 2;
  }
  .contract-item-supply{
    flex: 1;
  }
</style>
