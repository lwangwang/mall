<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
  <van-swipe-item v-for="(item,index) in topImg" :key="index">
  <img v-lazy="item" :src="item" alt="">
    </van-swipe-item>
   </van-swipe>
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childcomps/DetailNavBar"
export default {
  name: '',
  props:['topImg'],
  data () {
    return {
      
    };
  },
  components: {},
  mounted () {},
  methods: {}
}
</script>

<style scoped>
.my-swipe {
height:375px;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
  }
.my-swipe .van-swipe-item img{
  height: 100%;
  width: 100%;
  display: inline-block;
} 
</style>