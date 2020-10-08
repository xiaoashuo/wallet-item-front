<template>
 <div class="wallet-list">
   <nav-bar>
     <div slot="nav-bar-left" class="back" @click="$router.back()">
       <img src="@/assets/img/common/back.svg" alt="">
     </div>
     <div slot="nav-bar-center" class="title">
        钱包列表
     </div>
   </nav-bar>
    <div class="wallet-content-desc">
      <p>地址</p>
      <p>操作</p>
    </div>
     <scroll ref="wallet-content" class="wallet-content">
        <div class="wallet-content-items" v-for="item in wallets">
          <p>{{item.address | addressFormat}}</p>
          <p class="opt-btn"><button @click="downWallet(item)">保存</button></p>
        </div>
     </scroll>

 </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import Scroll from "../../components/common/scroll/Scroll";

  import {getWalletList,downloadWallet} from "../../network/wallet";

  export default {
        name: "WalletList",
      components:{
        Scroll,
          NavBar,
      },
      data(){
          return{
            wallets:[]
          }
      },
      created() {
          this._getWalletList()
      },
      methods:{
         _getWalletList(){
           getWalletList().then(res=>{

             if (res.code && res.code===200){

                this.wallets=res.data;
             }else{
               this.$toast.showToast(res.msg);
             }
           })
           .catch(err=>{
             this.$toast.showToast(err);
           })
         },
        downWallet(item){
          downloadWallet(item.address)
            .then(res=>{
              if (!res){
                this.$toast.showToast("下载内容不存在")
                return
              }
              let url = window.URL.createObjectURL(new Blob([res]))
              let link = document.createElement('a')
              link.style.display = 'none'
              link.href = url
              link.setAttribute('download', item.address + '.txt')
              document.body.appendChild(link)
              link.click()
              //释放URL对象所占资源
              window.URL.revokeObjectURL(url)
              //用完即删
              document.body.removeChild(link)
            }).catch(err=>this.$toast.showToast(err))
        }
      }
    }
</script>

<style scoped>
  .wallet-list {
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
.wallet-content{
  height: calc(100% - 44px);
  overflow: hidden;
}

.wallet-content-desc,  .wallet-content-items{
  margin-top: 3%;
    height: 40px;
    display: flex;
    justify-content: space-between;
  }
  .wallet-content-desc p:first-of-type,.wallet-content-items p:first-of-type{
    margin-left: 3%;
  }
  .wallet-content-desc p:last-of-type, .wallet-content-items p:last-of-type{
    margin-right: 3%;
  }
  .opt-btn button{

  }
</style>
