<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物</div></nav-bar>
    <swiper :banners="banners" />
    <recommend :recommends="recommends" />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home'
import Swiper from 'components/common/swiper/Swiper'
import Recommend from './childcomps/RecommendView'
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
    Recommend
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

.home-nav{
  background-color:var(--color-tint);
  color: #fff;
}

</style>