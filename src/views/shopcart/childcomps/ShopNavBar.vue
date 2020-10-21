<template>
  <div>
    <nav-bar>
      <div slot="left" class="shopback">
          <img src="~assets/img/common/back.svg" alt="">
      </div>
       <div slot="center" class="shopcar">
           购物车
      </div>
       <div slot="right" class="omit"> 
           <img src="~assets/img/cart/omit.svg" alt="">
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
  name: '',
  data () {
    return {
      
    };
  },
  components: {
    NavBar
  },
  mounted () {},
  methods: {}
}
</script>

<style  scoped>
.shopback img{
margin-top:12px;
}
.shopcar{
  text-align: center;
  font-size: 18px;
  color: #333;
  line-height: 44px;
}
.omit{
  height: 44px;
  line-height:44px;
}
.omit img{
width:35px;
vertical-align: middle;
}
</style>