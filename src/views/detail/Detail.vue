<template>
    <div class="detail">
      <nav-bar>
        <div slot="nav-bar-left" class="back" @click="backClick">
          <img src="@/assets/img/common/back.svg" alt="">
        </div>
        <div slot="nav-bar-center" class="title">
          {{$route.query.symbol}}
        </div>
      </nav-bar>

      <div class="detail-content">
          <p>合约名称: {{ this.$route.query.name}}</p>
          <p>合约标志: {{ this.$route.query.symbol}}</p>
          <p>账户余额: <span class="detail-content-balance">{{balance}}</span></p>
      </div>
      <hr class="horizontal"/>

      <tab-control :titles="['全部','转出','转入','失败']" @tab-click="itemClick"></tab-control>
      <scroll @pullingUp="loadMore" :pull-up-load="true" class="content" ref="scroll">

        <detail-tab-content  v-for="(item,index) in showTransactions" :key="item.id" :item="item"></detail-tab-content>

      </scroll>
        <div class="detail-footer">
          <detail-bottom-bar @bottom-click="btnItemClick"></detail-bottom-bar>
        </div>
    </div>
</template>

<script>
   import NavBar from "@/components/common/navbar/NavBar";
   import DetailBottomBar from "./childComps/DetailBottomBar";
   import TabControl from "../../components/content/tabcontrol/TabControl";
   import DetailTabContent from "./childComps/DetailTabContent";
   import Scroll from "../../components/common/scroll/Scroll";

   import {getWalletBalance} from "../../network/wallet";
   import {getTransactionList} from "../../network/transaction";
   import {getTokenBalance} from "../../network/token";
   import {mapGetters} from 'vuex'
   export default {
        name: "Detail",
      components:{
        Scroll,
        NavBar,
        DetailBottomBar,
        TabControl,
        DetailTabContent
      },
      data(){
        return{
          balance: 0,
          currentType: 'all',
          transactions:{
            'all':{pn: 1,isLastPage: false,list:[]},
            'outTo':{pn: 1,isLastPage: false,list:[]},
            'into':{pn: 1,isLastPage: false,list:[]},
            'fail':{pn: 1,isLastPage: false,list:[]},
          }
        }
      },
      computed:{
          ...mapGetters(["getWalletAddress"]),
        showTransactions(){
          return this.transactions[this.currentType].list;
        },

      },
      created() {
          this.getWalletBalance();
        this.getTransactions('all')
        this.getTransactions('outTo')
         this.getTransactions('into')
         this.getTransactions('fail')
      },
      methods:{
        btnItemClick(index){
          switch (index) {
            case 1:
              this.$router.push("/collect/money")
              break
            case 2:
              this.$router.push({path:"/transfer",query:{
                  symbol: this.$route.query.symbol,
                  balance: this.balance,
                  address: this.$route.query.address
                }})
              break
          }
        },
        getOptionType(type){
          if (type=='all') return 0;
          if (type=='outTo') return 1;
          if (type=='into') return 2;
          if (type=='fail') return 3;
        },
        backClick(){
          this.$router.back();
        },
        getWalletBalance(){
         const  contractAddress=this.$route.query.address;
         if (contractAddress==null||contractAddress.length==0){
           //执行本币余额查询
           getWalletBalance(this.getWalletAddress).then(res=>{
             if (res.code&&res.code==200){
               this.balance=res.data.balance
             }else{
               this.$toast.showToast("获取余额失败哦",1000)
             }
             }
           ).catch(err=>{
             this.$toast.showToast("获取余额失败哦",1000)
           })
         }else{
           //执行代币余额查询
           getTokenBalance(contractAddress,this.getWalletAddress)
           .then(res=>{
             if (res.code&&res.code==200){
               this.balance=res.data
             }else{
               this.$toast.showToast("获取余额失败哦",1000)
             }
           }).catch(err=>{
             this.$toast.showToast("获取余额失败哦",1000)
           });
         }
        },
        getTransactions(type){
          if (this.transactions[type].isLastPage){
            this.$toast.showToast("没有更多内容了哦")
            return
          }
          const data={}
          data.pageNum=this.transactions[type].pn
          data.pageSize=10
          data.address=this.getWalletAddress;
          data.contractAddress=this.$route.query.address;
          data.optionType=this.getOptionType(type)
          getTransactionList(data).then(res=>{
            if (res.code===200){
                 const  result=res.data;
                 this.transactions[type].isLastPage=result.isLastPage
                 this.transactions[type].pn=result.isLastPage?this.transactions[type].pn:result.pageNum;
                 this.transactions[type].list.push(...result.lists)
                 this.$refs.scroll.finishPullUp();

             }else{
               this.$toast.showToast("获取列表失败哦",1000)
             }
            // this.goods[type].list.push(...res.data.list);
            // this.goods[type].page+=1;
            // this.$refs.scroll.finishPullUp();
          }).catch(err=>{
            console.log(err)
            this.$toast.showToast("获取交易列表失败",1000)
          })
        },
        itemClick(index){
          switch (index) {
             case 0:
               this.currentType='all'
               break
            case 1:
              this.currentType='outTo'
              break
            case 2:
              this.currentType='into'
              break
            case 3:
              this.currentType='fail'
              break
          }
        },
        loadMore(){
          this.getTransactions(this.currentType)
        }
      }
    }
</script>

<style scoped>
  .detail {
    height: 100vh;
    position: relative;
    margin-bottom: 49px;
  }

  .back{
    width: 20%;

  }
  .back img {
    margin-top: 12px;
  }
  .horizontal{
    height: 3px;
    background-color: #f1f1f1;
    border: none;
  }

  .detail-content{
    height: 15%;
    text-align: center;
  }

.detail-content p{
   margin: 6px 0;
}
  .detail-content-balance{
     color: red;
  }
  .content {
    height: calc( 100% - 44px - 20% - 100px );
    overflow: hidden;
  }


</style>
