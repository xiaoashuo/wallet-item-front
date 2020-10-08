<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
        components:{
          BScroll
        },
      props:{
        probeType:{
          type: Number,
          default: 0
        },
        pullUpLoad:{
          type: Boolean,
          default: false
        }
      },
      data(){
          return{
            scroll: null
          }
      },
        mounted() {
          this.scroll=new BScroll(this.$refs.wrapper,{
            click: true,
            //实时监测  0 1 表示关
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
          })
          if (this.probeType===2||this.probeType===3){
            //监听滚动位置
            this.scroll.on("scroll",(position)=>{
              this.$emit("scroll",position);
            })
          }

          if (this.pullUpLoad){
            this.scroll.on("pullingUp",()=>{
              this.$emit('pullingUp')
            })
          }
        },
      methods:{
        getScrollY(){
          return this.scroll? this.scroll.y:0;
        },
        scrollTo(x,y,time=300){
          this.scroll&& this.scroll.scrollTo(x,y,time)
        },
        finishPullUp(){
          this.scroll.finishPullUp();
        },
        refresh(){
          this.scroll&&this.scroll.refresh()
        }
      }
    }
</script>

<style scoped>

</style>
