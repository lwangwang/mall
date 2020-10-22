<template>
  <div id="detail">
    <detail-nav-bar  @btnclick="btnchildclick"/>
    <scroll class="content" :pull-up-load="true" ref="scroll1" @scroll="scrollContent">
      <detail-swiper :topImg="topImg" />
      <detail-info :goods="goods" />
      <detail-shop :shopinfo="shopinfo" />
      <detail-images-info :detailinfo="detailinfo"/>
      <detail-goods-params :detailparams="detailparams"/>
    </scroll >
      <back-top @click.native="backClick" v-show="backtop"/>
      <van-goods-action>
        <van-goods-action-icon
          icon="shop-o"
          text="店铺"
          @click="onClickStore"
        />
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="star" text="收藏" color="#ff5000" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    
  </div>
</template>

<script>

import DetailNavBar from "views/detail/childcomps/DetailNavBar"
import DetailSwiper from "views/detail/childcomps/DetailSwiper"
import DetailInfo from "views/detail/childcomps/DetailInfo"
import DetailShop from "views/detail/childcomps/DetailShop"
import DetailImagesInfo from "views/detail/childcomps/DetailImagesInfo"
import DetailGoodsParams from "views/detail/childcomps/DetailGoodsParams"

import BackTop from "components/content/backtop/BackTop"

import Scroll from "components/common/scroll/Scroll"

import{ debounce } from "common/tool"
import { getDetailData, Goods, ShopInfo } from "network/detail"
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      backtop:false,

      topImg: [],
      NowPrice: 0,
      title: null,
      goods: {},
      shopinfo: {},
      detailinfo:{},
      detailparams:{},
      commentinfo:{},
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailInfo,
    DetailShop,
    DetailImagesInfo,
    DetailGoodsParams,

    BackTop,

    Scroll,
  },
  created() {
    (this.iid = this.$route.params.id),
      getDetailData(this.iid).then((res) => {
        //轮播图信息
        this.topImg = res.data.result.itemInfo.topImages;
        // 产品信息
        this.goods = new Goods(
          res.data.result.itemInfo,
          res.data.result.columns,
          res.data.result.shopInfo.services
        );
        // 店铺信息
        this.shopinfo = new ShopInfo(res.data.result.shopInfo);
        // 产品详情页信息
        // console.log(res.data.result);
        this.detailinfo=res.data.result.detailInfo
         // 产品详情页的参数信息
        this.detailparams=res.data.result.itemParams
        console.log(res.data.result);
        // 产品评论信息
        // if(res.data.result.rate!==0)
      });
  },
  mounted() {
 
    const refresh=debounce(this.$refs.scroll1.refresh,500)
    this.$bus.$on('itemImgLoad2',()=>{
     /* better-scroll 初始化完成 但是图片都没有加载完 
     导致滑动区域的高度不对。等图片加载完成后 refresh 重新计算滑动区域的高度*/
     refresh()
   })
  },
  methods: {
    onClickStore() {
      this.$toast.success("进入店铺")
    },
     //  返回顶部
 backClick(){
    this.$refs.scroll1.scrollTo(0,0,500)
  },
   scrollContent(position){
this.backtop=(-position.y)>1000
 },
 btnchildclick(index){
     switch(index){
    case 0:
      this.$refs.scroll1.scrollTo(0,-500,500)
      break;
    case 1:
     this.$refs.scroll1.scrollTo(0,-1000,500)
      break;
    case 2:
     this.$refs.scroll1.scrollTo(0,-1500,500)
      break;
    case 3:
      this.$refs.scroll1.scrollTo(0,-2000,500)
      break;
}
 }
  },
};
</script>

<style  scoped>
#detail {
  position: relative; 
  z-index: 9;
  background-color: #fff;
  height: calc(100vh - 50px);
}
.content {
  /* height: calc(100% - 44px); */
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom:0px;
}

</style>