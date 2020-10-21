<template>
  <div>
    <shop-nav-bar></shop-nav-bar>
    <van-submit-bar :price="0" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import ShopNavBar from "views/shopcart/childcomps/ShopNavBar";
export default {
  name: '',
  data () {
    return {
      price:0
    };
  },
  components: {
    ShopNavBar,
  },
  mounted () {},
  methods: {
    onSubmit(){

    }
  }
}
</script>

<style lang='stylus' scoped>
</style>