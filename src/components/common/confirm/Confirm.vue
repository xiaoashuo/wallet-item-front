<template>
  <transition name="fade">
    <div class="confirm-wrap" v-if="visible">
      <div class="confirm">
        <div class="hd">
          {{title}}
          <i @click="handleAction('close')" class="btn-close iconfont icon-close"></i>
        </div>
        <div class="bd">
          <i :class="'icon-'+type" class="icon-type iconfont" v-if="type!=''"></i>{{content}}
        </div>
        <div class="ft">
          <a @click="handleAction('yes')" class="btn btn-primary" href="javscript:void(0)">{{yesBtnText}}</a>
          <a @click="handleAction('cancel')" class="btn btn-default" href="javscript:void(0)">{{cancelBtnText}}</a>
        </div>
      </div>
      <div @click="handleAction('close')" class="backdrop"></div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "Confirm",
    data() {
      return {
        visible: false,
        title: '',
        content: '',
        yesBtnText: '确定',
        cancelBtnText: '取消',
        type: '',
        promiseStatus: null,
      }
    },
    watch: {
      visible: function (curVal) {
        if (curVal && document.body.scrollHeight > window.innerHeight) {
          $('body').addClass('backdrop-open');
        } else {
          $('body').removeClass('backdrop-open');
        }
      }
    },
    methods: {
      confirm() {
        let _this = this;
        this.visible = true;
        return new Promise(function (resolve, reject) {
          _this.promiseStatus = {resolve, reject};
        });
      },
      handleAction(action) {
        this.visible = false;
        if (action == 'yes') {
          this.promiseStatus && this.promiseStatus.resolve();
        } else {
          this.promiseStatus && this.promiseStatus.reject();
        }
      }
    }
  }
</script>

<style scoped>

</style>
