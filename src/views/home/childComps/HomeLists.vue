<template>
    <div class="home-list-content">
       <home-list>
         <home-list-item  v-for="(contract,index) in contracts" :info="contract"></home-list-item>
       </home-list>
    </div>
</template>

<script>
   import HomeList from "../../../components/content/homelist/HomeList";
   import HomeListItem from "../../../components/content/homelist/HomeListItem";

   import {mapGetters} from 'vuex'
   import {getUserRelationContracts} from '@/network/user'
    export default {
        name: "HomeLists",
      components:{
          HomeList,
          HomeListItem
      },
      data(){
        return{
          contracts:[]
        }
      },
      created() {
          this.getUserRelationContract();
      },
      computed:{
        ...mapGetters(['getWalletAddress'])
      },
      methods:{
          async getUserRelationContract(){

            let walletAddress=this.getWalletAddress;
             const result=await getUserRelationContracts(walletAddress)
             this.contracts=result.data;

          }
      }
    }
</script>

<style scoped>

</style>
