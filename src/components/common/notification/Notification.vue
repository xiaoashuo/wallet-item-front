<template>
  <div class="notification">

    <img alt="" src="~/assets/logo.png">
    <div class="notification-content" v-text="message">

    </div>
    <span class="notification-text">

      </span>

  </div>
</template>

<script>
  export default {
    name: "Notification",
    data() {
      return {
        timer: null
      }
    },
    methods: {
      show() {
        if (this.timer != null) return;
        this.timer = setInterval(() => {
          //获取到头的第一个字符
          var notifyMessage = this.$store.getters.getNotifyMessage;
          let start = notifyMessage.substring(0, 1);
          //获取到后面的所有字符
          let end = notifyMessage.substring(1);
          //重新拼接得到新的字符串，并赋值给this.message
          this.$store.dispatch("saveNotifyMessage", end + start)
        }, 300)
      },
    },
    computed: {
      message() {
        return this.$store.getters.getNotifyMessage;
      }
    },
    created() {
      this.show()
    },
    destroyed() {
      clearInterval(this.timer)
      this.timer = null
    },
    // activated() {
    //   this.show()
    // },
    // deactivated() {
    //   clearInterval(this.timer)
    //   this.timer = null
    // }
  }
</script>

<style scoped>
  .notification {
    margin: 10px 0;
    width: 100%;
    height: 40px;

  }

  .notification img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }

  .notification-content {
    width: calc(100% - 40px);
    display: inline-block;
  }
</style>
