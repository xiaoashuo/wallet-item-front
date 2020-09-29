<template>
   <div id="login">
        <div class="login-username">
            <label>用户名</label>
              <input v-focus v-model="username" placeholder="请输入用户名"/>
        </div>
      <div class="login-password">
            <label>密码</label>
              <input type="password"  v-model="password" placeholder="请输入密码"/>
      </div>
      <div class="login-button" @click="startLogin">
          <button>登录</button>
      </div>
   </div>
</template>
<script>
import {userLogin} from '@/network/user'
import {isRangeLength,isEmpty} from '@/utils/validation'
export default {
  name: "Login",
  data () {
    return {
      username: "",
      password: ""
    };
  },
  directives:{
     focus:{
         inserted(e1){
             e1.focus()
         }
     }
  },
  methods:{
      validateParams(data){
         return isRangeLength(data,5,10)
      },
      startLogin(){
          if(isEmpty(this.username)||isEmpty(this.password)){
              this.$toast.showToast('用户名或密码不能为空',500)
              return;
          }
  
          if(!this.validateParams(this.username)||!this.validateParams(this.password)){
              this.$toast.showToast('用户名或密码必须在5-10位',500)
              return ;
         }
     
         const form = new FormData()    
         form.append("username",this.username);
         form.append("password",this.password)
          let _this=this;
          userLogin(form).then(res=>{
           
             if(res.code!=""&&res.code==200){
                this.$toast.showToast("登录成功",500)
                setTimeout(function(){
                   _this.$router.push("/home")
                },1500)
                 
             }else{
                 this.$toast.showToast("用户名或密码不正确",500)
             }
          }).catch(err=>{
              this.$toast.showToast("登录失败，请联系客服",500)
          })
         
      }
  }
}
</script>
<style scoped>
</style>