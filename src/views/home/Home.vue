<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物</div></nav-bar>
    <swiper :banners="banners" />
    <recommend :recommends="recommends" />
    <freature-view/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home'
import Swiper from 'components/common/swiper/Swiper'
import Recommend from './childcomps/RecommendView'
import FreatureView from './childcomps/FreatureView'
export default {
  name: '',
  data () {
    return {
      banners:[],
      recommends:[]
    };
  },

  components: {
    NavBar,
    Swiper,
    Recommend,
    FreatureView
  },
  created(){
getHomeMultidata().then(res=>{
     this.banners=res.data.data.banner.list
     this.recommends=res.data.data.recommend.list
      })
  },
  mounted () {},
  methods: {}
}
</script>

<style  scoped>
#home{
  padding-top: 44px;
}
.home-nav{
  background-color:var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999;
}

</style>