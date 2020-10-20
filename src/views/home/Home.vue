<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物</div></nav-bar>
    <tab-control @showTab="upDataShow" ref="tabControl1" v-show="tabshow" class="tabcontrol" :titles="['流行', '新款', '精致']" />
    <scroll class="content" ref="scroll" 
    :probe-type="3" :pull-up-load="true"
     @scroll="scrollContent" @pullingUp="loadMore" >
    <swiper :banners="banners" @swiperimgs="swiperimgload"/>
    <recommend :recommends="recommends" />
    <freature-view />
    <tab-control @showTab="upDataShow" ref="tabControl2" :titles="['流行', '新款', '精致']"/>
    <goods-list :goods="goods[currentType].list"/>
    
    </scroll>
    <!-- 在一个组件根元素上直接监听一个原生事件可以用v-on的native修饰符 -->
  <back-top @click.native="backClick" v-show="backtop"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import Swiper from "components/common/swiper/Swiper"
import Scroll from "components/common/scroll/Scroll"

import TabControl from "components/content/tabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import BackTop from "components/content/backtop/BackTop"

import { getHomeMultidata, getHomeGoods } from "network/home"

import{ debounce } from "common/tool"

import Recommend from "./childcomps/RecommendView"
import FreatureView from "./childcomps/FreatureView"
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop' ,
      backtop:false,
      tabshow:false,
      taboffsetHeight:null,
      // 储存浏览位置
      savey:null,
    }
 
  },

  components: {
    NavBar,
    Swiper,
    Scroll,

    TabControl,
    GoodsList,
    BackTop,

    Recommend,
    FreatureView,
  },
  created() {
   this.getHomeMultidata()
   this.getHomeGoods('pop')
   this.getHomeGoods('new')
   this.getHomeGoods('sell')
 
  },
  mounted() {
    // 防抖
  const refresh=debounce(this.$refs.scroll.refresh,500)
   this.$bus.$on('itemImgLoad',()=>{
     /* better-scroll 初始化完成 但是图片都没有加载完 
     导致滑动区域的高度不对。等图片加载完成后 refresh 重新计算滑动区域的高度*/
     refresh()
   })
  },
  destroyed(){
console.log('销毁');
  },
  activated(){
    console.log('活跃');
    this.$refs.scroll.scrollTo(0,this.savey)
    this.$refs.scroll.refresh()
    },
  deactivated(){
    console.log('不活跃');
    this.savey=this.$refs.scroll.getscrolly()
  },
  computed:{
    showData(){
      return this.goods[this.currentType].list
    }
  },
  methods: {
 
    
    //网络请求信息 
    getHomeMultidata(){
       getHomeMultidata().then(res => {
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    })
    },
    // 产品图片
    getHomeGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        // console.log(res.data.data.list);
       this.goods[type].list.push(...res.data.data.list)
       this.goods[type].page+=1
      })
    },
  // 响应事件
    upDataShow(index){
  switch(index){
    case 0:
     this.currentType='pop'
      break;
    case 1:
      this.currentType='new'
      break;
    case 2:
      this.currentType='sell'
      break;
}
this.$refs.tabControl1.currentIndex=index;
this.$refs.tabControl2.currentIndex=index;
    },
  //  返回顶部
 backClick(){
    this.$refs.scroll.scrollTo(0,0,500)
  },
  // 回到顶部的显示隐藏
  scrollContent(position){
this.backtop=(-position.y)>1000
this.tabshow=(-position.y)>this.taboffsetHeight
// console.log(this.tabshow);
 },
// 下拉加载信息
 loadMore(){
this.getHomeGoods(this.currentType)
 },
 // TabContent吸顶效果
 swiperimgload(){
// console.log(this.$refs.tabControl2.$el.offsetTop);
this.taboffsetHeight=this.$refs.tabControl2.$el.offsetTop
// console.log(this.taboffsetHeight);
    },
  },

};
</script>

<style  scoped>
#home {
 position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999; */
}
.tabcontrol {
  position: relative;
  background-color:#fff;
  z-index: 9;
}

/* 滚动内容 */
.content{
  overflow: hidden;
  height: calc(100% - 93px);
  position: absolute;
  top: 44px;
  /* bottom: 49px; */
  left: 0;
  right: 0;
}
</style>