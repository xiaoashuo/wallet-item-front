<template>
  <div class="contract-publish">
    <nav-bar>
      <div @click="$router.back()" class="back" slot="nav-bar-left">
        <img alt="" src="@/assets/img/common/back.svg">
      </div>
      <div class="title" slot="nav-bar-center">
        部署合约
      </div>
    </nav-bar>
    <form ref="contractForm">
      <div class="contract-publish-name contract-item">
        <p>合约名称:</p>
        <p><input name="name" placeholder="请输入合约名称" type="text"></p>
      </div>
      <div class="contract-publish-symbol contract-item">
        <p>合约标志:</p>
        <p><input name="symbol" placeholder="请输入合约标志" type="text"></p>
      </div>
      <div class="contract-publish-decimals contract-item">
        <p>合约精度:</p>
        <p><input name="decimals" placeholder="请输入合约精度" type="text"></p>
      </div>
      <div class="contract-publish-supply contract-item">
        <p>合约发行量:</p>
        <p><input name="totalSupply" placeholder="请输入总发行量" type="text"></p>
      </div>

    </form>
    <div class="tips">
      <p>默认使用22GWEI</p>
      <p>上限4000000</p>
    </div>
    <div class="contract-publish-btn">
      <button @click="deployContract">发布合约</button>
    </div>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";

  import {deployContract} from "../../network/contract";

  export default {
    name: "ContractPublish",
    components: {
      NavBar
    },

    methods: {
      deployContract() {

        const formData = new FormData(this.$refs['contractForm']);
        formData.append("address", this.$store.getters.getWalletAddress);
        if (formData.get("name") == '' || formData.get("symbol") == '' || formData.get("totalSupply") == '' || formData.get("decimals") == '') {
          this.$toast.showToast("输入内容不能为空")
          return
        }


        // let data={}
        // for (let [key, val] of formData.entries()) {
        //   Object.assign(data, { [key]: val })
        // }
        // console.log(data);//{name:'xxx', age:xx }
        deployContract(formData).then(res => {
          if (res.code && res.code === 200) {
            this.$toast.showToast("合约正在部署中,查看合约列表")
            this.$router.back();
          } else {
            this.$toast.showToast(res.msg)
          }
        }).catch(err => {
          this.$toast.showToast(err)
        })
      }
    }

  }
</script>

<style scoped>
  .contract-publish {
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

  .contract-item {

    margin-top: 6%;
    margin-left: 3%;
    display: flex;
    justify-content: flex-start;

  }

  .contract-item p:first-of-type {
    width: 30%;
  }

  .contract-item p:last-of-type {
    margin-left: 10%;
    width: 70%;
  }

  .contract-item input {

    outline: none;
    border: none;
    border-bottom: 1px solid #f1f1f1;

  }

  .contract-publish-btn {
    margin-top: 8%;
    text-align: center;
  }

  .contract-publish-btn button {
    outline: none;
    width: 80%;
    height: 35px;
    border-radius: 5px;
    border: none;
    background-color: #03a9f4;
    color: white;
  }

  .tips {
    text-align: center;
    margin-top: 3%;
  }
</style>
