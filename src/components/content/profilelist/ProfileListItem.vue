<template>
    <div class="profile-list-item clear-fix">
      <!-- 服务中心 -->
      <a href="javascript:" class="profile-list-item">
         <div class="profile-item-left left">
           <img src="~/assets/logo.png" alt="">
         </div>
        <div class="profile-item-right left">
          <span>{{text}}</span>
          <span class="profile-item-right-icon">
                <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </div>
</template>

<script>
    export default {
        name: "ProfileListItem",
       props:{
          text:{
            type: String,
            default: ''
          }
       }
    }
</script>

<style scoped>
.profile-item-left img{
  width: 40px;
  height: 40px;
  margin-left: 10px;
}
  .profile-item-right{
    width: calc(100% - 50px);
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #f1f1f1;
  }
</style>
