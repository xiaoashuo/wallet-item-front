<template>
  <div class="transfer">
    <nav-bar>
      <div @click="$router.back()" class="back" slot="nav-bar-left">
        <img alt="" src="@/assets/img/common/back.svg">
      </div>
      <div class="title" slot="nav-bar-center">
        {{this.$route.query.symbol}}转账
      </div>
    </nav-bar>
    <div class="transfer-money">
      <div class="transfer-money-mark">
        <p>{{this.$route.query.symbol}}</p>
        <p>余额: {{this.$route.query.balance}}</p>
      </div>
      <div class="transfer-money-input">
        <input placeholder="请输入金额" type="number" v-model="transferVal">
      </div>
    </div>
    <div class="transfer-collect">
      <div class="transfer-collect-address">
        <div class="transfer-collect-head">
          <div class="transfer-collect-head-left">
            收款地址
          </div>
          <div class="transfer-collect-head-right">
            扫一扫
          </div>
        </div>
        <div class="transfer-collect-footer">
          <input placeholder="请输入交易地址" type="text" v-model="transferAddress">
        </div>
      </div>

    </div>
    <div class="transfer-miner-fee">
      矿工费: <input placeholder="请输入矿工费" type="number" v-model="minerFee"> GWEI
    </div>
    <div class="transfer-miner-fee-estimate">
      <span>{{estimateFee|| 0}}</span> GWEI
    </div>
    <div class="transfer-btn">
      <button @click="transferMoney">转账</button>
    </div>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {getGasInfo, transferMoney, transferTokenMoney} from "../../network/token";
  import {isEmpty} from "../../utils/validation";


  export default {
    name: "Transfer",
    components: {
      NavBar
    },
    data() {
      return {
        transferVal: '',
        transferAddress: '',
        minerFee: '',
        estimateFee: ''
      }
    },
    created() {
      this.getEstimateFee()
    },
    methods: {
      async getEstimateFee() {
        const res = await getGasInfo();
        if (res.code && res.code === 200) {
          this.estimateFee = res.data.gasPrice;
        } else {
          this.$toast.showToast("预估矿工费失败" + res.msg)
        }

      },
      async transferMoney() {
        if (isEmpty(this.transferVal) || isEmpty(this.transferAddress) || isEmpty(this.estimateFee)) {
          this.$toast.showToast("输入内容不能为空")
          return;
        }
        //判断是本币转账 还是代币转账
        const contractAddress = this.$route.query.address;
        const walletAddress = this.$store.getters.getWalletAddress;
        if (isEmpty(contractAddress)) {
          //执行本币转账
          const formData = new FormData();
          formData.append("fromAddress", walletAddress)
          formData.append("toAddress", this.transferAddress)
          formData.append("amount", this.transferVal)
          formData.append("gasPrice", this.minerFee)
          const res = await transferMoney(formData);
          if (res.code && res.code === 200) {
            console.log(res)
            this.$toast.showToast("转账已发起")
            this.$router.back()
          } else {
            this.$toast.showToast(res.msg)
          }
        } else {
          //执行代币转账
          const formData = new FormData();
          formData.append("fromAddress", walletAddress)
          formData.append("contractAddress", contractAddress)
          formData.append("toAddress", this.transferAddress)
          formData.append("amount", this.transferVal)
          formData.append("gasPrice", this.minerFee)
          const res = await transferTokenMoney(formData)
          if (res.code && res.code === 200) {
            console.log(res)
            this.$toast.showToast("转账已发起")
            this.$router.back()
          } else {
            this.$toast.showToast(res.msg)
          }
        }
      }
    }

  }
</script>

<style scoped>
  .transfer {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .back {
    width: 20%;
  }

  .back img {
    margin-top: 12px;
  }

  input::placeholder {
    color: darkgrey;
  }

  /*money输入框*/
  .transfer-money {
    margin-bottom: 3%;
  }

  .transfer-money-mark {
    margin-top: 3%;
    display: flex;
    justify-content: space-between;
  }

  .transfer-money-mark p:first-of-type {
    margin-left: 3%;
  }

  .transfer-money-mark p:last-of-type {
    margin-right: 3%;
  }

  .transfer-money-input {
    height: 40px;
  }

  .transfer-money-input input {
    width: 95%;
    border: none;
    height: 40px;
    margin-left: 3%;
    font-size: 20px;
    outline: none;
    border-bottom: 1px solid #f1f1f1;
  }

  /*收款地址*/
  .transfer-collect {
    margin-bottom: 5%;
  }

  .transfer-collect-head {
    display: flex;
    justify-content: space-between;
  }

  .transfer-collect-head-left {
    margin-left: 3%;
  }

  .transfer-collect-head-right {
    margin-right: 3%;
  }

  .transfer-collect-footer input {
    width: 95%;
    border: none;
    height: 40px;
    margin-left: 3%;
    font-size: 20px;
    outline: none;
    border-bottom: 1px solid #f1f1f1;
  }

  /*费率*/
  .transfer-miner-fee {
    padding-left: 3%;
  }

  /*按钮*/
  .transfer-btn {
    margin-top: 10%;
    text-align: center;
    height: 40px;
  }

  .transfer-btn button {
    outline: none;
    height: 40px;
    border: none;
    border-radius: 5px;
    width: 80%;
    background-color: #03a9f4;
    color: white;
  }

  .transfer-miner-fee-estimate {
    width: 100%;
    text-align: center;
  }
</style>
