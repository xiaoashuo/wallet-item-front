<template>
    <div class="notification">

      <img src="~/assets/logo.png" alt="">
      <div class="notification-content"  v-text="message">

      </div>
      <span class="notification-text">

      </span>

    </div>
</template>

<script>
    export default {
        name: "Notification",
      data(){
          return{
            message:"我说中国号",
            timer: null
          }
      },
      methods:{
        show(){
          if(this.timer != null) return;
          this.timer = setInterval( ()=>

          {
            //获取到头的第一个字符
            let start = this.message.substring(0,1);
            //获取到后面的所有字符
            let end = this.message.substring(1);
            //重新拼接得到新的字符串，并赋值给this.message
            this.message = end + start;
          },300)
        },
      },
     created() {
       this.show()
     },
      destroyed() {
        clearInterval(this.timer)
        this.timer=null
      },
      activated() {
        this.show()
      },
      deactivated() {
        clearInterval(this.timer)
        this.timer=null
      }
    }
</script>

<style scoped>
.notification{
  margin: 10px 0;
  width: 100%;
  height: 40px;

}
.notification img{
  width: 40px;
  height: 40px;
  vertical-align:middle;
}
.notification-content{
  width: calc(100% - 40px );
  display: inline-block;
}
</style>
