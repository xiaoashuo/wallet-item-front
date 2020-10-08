<template>
  <div class="collect-money">
    <nav-bar>
      <div slot="nav-bar-left" class="back" @click="backClick">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="nav-bar-center" class="title">
        收款
      </div>
    </nav-bar>
    <div class="qr-data">
      <div class="qr-address-code">
        <vue-qr :text="text" :size="200"></vue-qr>
      </div>
      <div class="qr-text">
        <p class="qr-text-label">钱包地址</p>
        <p class="qr-text-value" v-text="text"></p>
      </div>
      <div class="qr-btn">
        <button @click="copyToClip(text)">复制</button>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import vueQr from 'vue-qr'

  export default {
    name: "ColletMoney",
    components: {
      vueQr,
      NavBar
    },
    data() {
      return {
        text: this.$store.getters.getWalletAddress
      }
    },
    methods: {
      backClick() {
        this.$router.back();
      },
      /**
       * 复制内容到粘贴板
       * content : 需要复制的内容
       */
      copyToClip(content) {
        var aux = document.createElement("input");
        aux.setAttribute("value", content);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        this.$toast.showToast("复制成功", 1000)
      }
    }
  }
</script>

<style scoped>
  .collect-money {
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

  .qr-address-code {
    margin-top: 3%;
    text-align: center;
  }

  .qr-text-label {
    text-align: center;
  }

  .qr-text-value {
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 10px;

    text-align: center;

    word-break: break-all;
    word-wrap: break-word

  }

  .qr-btn {
    margin-top: 3%;
    text-align: center;
    height: 40px;
  }

  .qr-btn button {
    outline: none;
    border: none;
    width: 75%;
    height: 40px;
    color: white;
    border-radius: 5px;
    background-color: #03a9f4;
  }
</style>
