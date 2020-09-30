<template>
    <div class="notification">

      <img src="" alt="">

      <span class="notification-text" v-text="message">

      </span>

    </div>
</template>

<script>
    export default {
        name: "Notification",
      data(){
          return{
            message:"我说中国号",
            timer: ""
          }
      },
      methods:{
        show(){
          if(this.timer != null) return;
          this.timer = setInterval(() => {
            console.log("开启跑马灯")
            //获取到头的第一个字符
            let start = this.message.substring(0,1);
            //获取到后面的所有字符
            let end = this.message.substring(1);
            //重新拼接得到新的字符串，并赋值给this.message
            this.message = end + start;
          },300)
        },
      },
      mounted() {
          this.show()
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
}
.notification-text{
  display: inline-block;

}
</style>
