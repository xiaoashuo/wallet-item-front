<template>
   <div class="transactions">

          <detail-transfer-list-item v-for="(item,index) in infos" :key="index"></detail-transfer-list-item>


   </div>
</template>

<script>
  import DetailTransferListItem from "../../../components/content/detail/DetailTransferListItem";
    export default {
        name: "DetailTabContent",
      props:{
        infos:{
          type: Array,
          default(){
            return []
          }
        }
      },
        components:{

          DetailTransferListItem
        }
    }
</script>

<style scoped>

</style>
