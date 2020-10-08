<template>
    <div class="transfer-list-item ">
       <div class="transfer-list-item-left ">
         <img src="~/assets/logo.png" alt="">
       </div>

       <div class="transfer-list-item-center  ">
         <p>0x13aec6....8c631c3</p>
         <p>01/03/2020 10:57:06</p>
       </div>
       <div class="transfer-list-item-right  clear-fix">
         <p class="right">0</p>
       </div>
    </div>

</template>

<script>
    export default {
        name: "DetailTransferListItem"
    }
</script>

<style scoped>
.transfer-list-item{
  width: 100%;
  height: 40px;
  margin-top: 3px;
  margin-bottom: 3px;
  display:flex;
  justify-content: flex-start;
}
.transfer-list-item-left{
  margin-left: 7%;
}
.transfer-list-item-left img{

  width: 40px;
  height: 40px;
}
.transfer-list-item-center{
  margin-left: 8%;
}
.transfer-list-item-right{
  margin-left: 22%;
}

/*.transfer-list-item-left{*/
/*   flex: 1;*/
/*}*/
/*.transfer-list-item-center{*/
/*  flex: 2;*/
/*}*/
/*  .transfer-list-item-right{*/
/*    flex: 1;*/

/*  }*/

</style>
