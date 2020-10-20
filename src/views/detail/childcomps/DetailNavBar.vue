<template>
  <div id="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="titleleft" @click="clickBack">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div class="titleItem" 
        v-for="(item,index) in titles" 
        :key="index"
        @click="clickItem(index)"
        :class="{active:currentIndex==index}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
  name: 'DetailNavBar',
  data () {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0,
    };
  },
  components: {
    NavBar,
  },
 
  mounted () {},
  methods: {
    clickItem(index){
      this.currentIndex=index
      this.$emit('btnclick',index)
  
    },
    clickBack(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
#detail-nav-bar{
    position: relative;
    background-color: #fff; 
    z-index:9999;
}
.title{
  display: flex;
}
.titleItem{
  flex:1;
  font-size: 13px;
}
.active{
  color:var(--color-high-text);
}
.titleleft img{
margin-top:12px;
}
</style>