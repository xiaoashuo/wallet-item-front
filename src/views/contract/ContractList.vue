<template>
  <div class="contract-list">
    <nav-bar>
      <div slot="nav-bar-left" class="back" @click="$router.back()">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="nav-bar-center" class="title">
        合约列表
      </div>
    </nav-bar>
    <div class="contract-title-list">
      <p>代币名称</p>
      <p>标志</p>
      <p>发型量</p>
      <p>状态</p>
    </div>

    <div class="empty-contract" v-if="isEmptyContracts"> 合约列表为空</div>
    <scroll :pull-up-load="true" @pullingUp="itemPull" class="content" v-else>
      <contract-item v-for="(item,index) in contractList" :key="index" :item="item"></contract-item>

    </scroll>


  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import ContractItem from "./childComps/ContractItem";

  import {getContractList} from "../../network/contract";
  import Scroll from "../../components/common/scroll/Scroll";

  export default {
    name: "ContractList",
    components: {
      Scroll,
      NavBar,
      ContractItem
    },

    data() {
      return {
        contractList: []
      }
    },
    created() {
      this._getContractList();
    },
    computed: {
      isEmptyContracts() {
        return !this.contractList || this.contractList.length == 0
      }
    },
    methods: {
      _getContractList() {
        getContractList().then(res => {
          if (res.code && res.code === 200) {
            this.contractList = res.data
          } else {
            this.$toast.showToast("获取合约列表失败")
          }
        })
      },
      itemPull() {
        this.$toast.showToast("没有更多内容了哦")
      }
    }

  }
</script>

<style scoped>
  .contract-list {
    height: 100vh;
    position: relative;
    margin-bottom: 49px;
  }

  .back {
    width: 20%;

  }

  .back img {
    margin-top: 12px;
  }

  .empty-contract {
    text-align: center;
  }

  .content {
    height: calc(100% - 44px);
    overflow: hidden;
  }

  .contract-title-list {
    margin-top: 3%;
    display: flex;
    justify-content: space-between;
  }

</style>
