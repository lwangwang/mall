<template>
  <div id="swiper">
    <mt-swipe :auto="2000" >
  <mt-swipe-item v-for="item in banners" :key="item.id">
  <a :href="item.link">
   <img :src="item.image" class="img" :alt="item.title"/>  
   </a> 
  </mt-swipe-item> 
</mt-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
export default {
  name: '',
  data () {
    return {
      
    };
  },
  props:['banners'],
  components: {
  'mt-swipe': Swipe,
  'mt-swipe-item': SwipeItem
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped>
 .mint-swipe {
 height: 195px;
 }
.img{
  /* display: block; */
  width: 100%;

}
</style>