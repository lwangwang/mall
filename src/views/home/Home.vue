<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物</div></nav-bar>
    <swiper :banners="banners" />
    <recommend :recommends="recommends" />
    <freature-view />
    <tab-control @showTab="upDataShow" :titles="['流行', '新款', '精致']"></tab-control>
    <goods-list :goods="goods[currentType].list"/>
  
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import Swiper from "components/common/swiper/Swiper"

import TabControl from "components/content/tabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"

import { getHomeMultidata, getHomeGoods } from "network/home"

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
    }
 
  },

  components: {
    NavBar,
    Swiper,

    TabControl,
    GoodsList,

    Recommend,
    FreatureView,
  },
  created() {
   this.getHomeMultidata()
   this.getHomeGoods('pop')
   this.getHomeGoods('new')
   this.getHomeGoods('sell')
  },
  mounted() {},
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
    getHomeGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
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
    }
  },
};
</script>

<style  scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
    z-index: 999;
}
</style>