<template>
    <div class="grid-view-list">
      <grid-view :cols="3">
         <grid-view-item v-for="(item,index) in items" :key="index" :item="item" @click.native="itemClick(item)"></grid-view-item>
      </grid-view>
    </div>
</template>

<script>
   import GridView from "../../../components/common/gridview/GridView";
   import GridViewItem from "../../../components/content/profilelist/GridViewItem";
    export default {
        name: "GridViewList",
       components:{
          GridView,
         GridViewItem
       },
       props:{
          items:{
            type: Array,
            default(){
              return []
            }
          },
       },
      methods:{
        itemClick(item){
         if (!item.url){
           this.$toast.showToast("我没有地方去啦")
           return
         }
          this.$router.push(item.url)
        }
      }
    }
</script>

<style scoped>

.grid-view-item{
  border-right: 1px solid #f1f1f1;


}
.grid-view-item:last-of-type{
  border-right: none;
}
</style>
