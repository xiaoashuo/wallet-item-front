<template>
  <div id="login">
    <div class="loginLogo">
      <img alt="" src="~/assets/logo.png">
    </div>
    <div class="login-content">
      <div class="login-username">
        <input placeholder="请输入用户名" v-focus v-model="username"/>
      </div>
      <div class="login-password">
        <input placeholder="请输入密码" type="password" v-model="password"/>
      </div>
      <div @click="startLogin" class="login-button">
        <button>登录</button>
      </div>
    </div>
    <loading :show="isShow"></loading>
  </div>
</template>
<script>
  import loading from "../../components/common/loading/loading";
  import {getUserInfo, userLogin} from '@/network/user'
  import {isEmpty, isRangeLength} from '@/utils/validation'
  import {setToken} from "../../network/auth";
  import {mapActions} from 'vuex'
  import {SET_USER_INFO, SET_WALLET_ADDRESS} from "../../store/mutation-type";
  import {createSocket} from "../../utils/websocket";
  import {SysConstants} from "../../constants/SysConstants";


  export default {
    name: "Login",
    data() {
      return {
        username: "",
        password: "",
        isShow: false
      };
    },
    components: {
      loading
    },
    directives: {
      focus: {
        inserted(e1) {
          e1.focus()
        }
      }
    },
    computed: {},

    created() {
      //keepAlive缓存不会

    },

    methods: {
      ...mapActions([SET_WALLET_ADDRESS, SET_USER_INFO]),
      validateParams(data) {
        return isRangeLength(data, 5, 10)
      },
      async startLogin() {

        if (isEmpty(this.username) || isEmpty(this.password)) {
          this.$toast.showToast('用户名或密码不能为空', 500)
          return;
        }

        if (!this.validateParams(this.username) || !this.validateParams(this.password)) {
          this.$toast.showToast('用户名或密码必须在5-10位', 500)
          return;
        }
        this.isShow = true
        const form = new FormData()
        form.append("username", this.username);
        form.append("password", this.password)
        let _this = this;

        const res = await userLogin(form);
        console.log(res)
        if (!res.code || res.code !== 200) {
          this.$toast.showToast(res.msg, 500)
          this.isShow = false
          return
        }

        //设置token

        setToken(res.data.token);
        const result = await getUserInfo()
        if (!result.code || result.code !== 200) {
          this.$toast.showToast(result.msg, 500)
          this.isShow = false
          return
        }

        let wallets = result.data.wallet;
        //设置钱包地址
        this.setWalletAddress(wallets[0].address)
        //设置用户信息
        this.setUserInfo(result.data.user)

        //开启websocket
       const url= SysConstants.webSocketUrlPrefix + "?token=" + res.data.token;
        createSocket(url);

        setTimeout(function () {
          this.isShow = false
          //   _this.$toast.showToast("登录成功",500)
          _this.$router.push("/home")
        }, 1000)


      }
    }
  }
</script>
<style scoped>
  #login {
    height: 100vh;
    position: relative;
  }

  .loginLogo {
    margin-top: 20%;
    text-align: center;
  }

  .login-content {
    margin-top: 10px;

  }

  .login-username {
    text-align: center;
  }

  .login-username input {
    width: 80%;
    height: 50px;
    line-height: 48px \9;
    padding-left: 10px;
    border: 1px #d9d9d9 solid;
    border-radius: 5px;
    font-size: 14px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    outline: none;
  }

  .login-password {
    text-align: center;
    margin-top: 10%;
  }

  .login-password input {
    width: 80%;
    height: 50px;
    line-height: 48px \9;
    padding-left: 10px;
    border: 1px #d9d9d9 solid;
    border-radius: 5px;
    font-size: 14px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    outline: none;
  }

  .login-button {
    margin-top: 10%;
    text-align: center;
  }

  .login-button button {
    width: 80%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    border: 0;
    background-color: #03a9f4;
    color: #fff;
    border-radius: 5px;
    outline: none;
  }

</style>
