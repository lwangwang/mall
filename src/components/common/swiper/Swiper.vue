<template>
  <div id="swiper">
<mt-swipe :auto="4000">
  <mt-swipe-item v-for="item in banners" :key="item.id">
    <a :href="item.link">
   <img  :src="item.image"  :alt="item.title" @load="swiperimg"/>  
   </a>
  </mt-swipe-item>
</mt-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css';
export default {
  name: '',
  data () {
    return {
    
    }
  },
  props:['banners'],
  components: {
 'mt-swipe': Swipe,
  'mt-swipe-item': SwipeItem
  },
  mounted () {},
  methods: {
    swiperimg(){
      this.$emit('swiperimgs')
    }
  }
}
</script>

<style scoped>
/* .swiper{
height: 165px;
}
 img {
 width: 100%;
 }
 .mint-swipe {
width: 100%;
height: 165px;
 } */
 .mint-swipe {
 height:170px;
 }
 .mint-swipe img{
  /* display: block; */
  width: 100%;

}
</style>