<template>
  <div class="good-list-item" @click="itemClick">
    <img :src="goodslist.show.img" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodslist.title}}</p>
      <span class="price">{{goodslist.price}}</span>
      <span class="collect">{{goodslist.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      
    };
  },
  props:{
goodslist:{
  type:Object,
  default(){
    return{}
  }
}
  },
  components: {},
  mounted () {},
  methods: {
imgLoad(){
  this.$bus.$emit('itemImgLoad')
},
itemClick(){
  console.log('点击跳转');
this.$router.push('/detail/'+this.goodslist.iid)
}
  }
}
</script>

<style scoped>
.good-list-item{
  position: relative;
  padding-bottom: 40px;
  width: 48%;
}
.good-list-item img{
  width: 100%;
  border-radius: 8px;
}
.goods-info{
  font-size: 12px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  overflow: hidden;
  text-align: center;
}
.goods-info p{
 overflow:hidden;         
  text-overflow:ellipsis;
  white-space:nowrap; 
  padding-bottom: 3px;
}
.goods-info .price{
color:var(--color-high-text);
margin-right: 10px;
}
.goods-info .collect{
  margin-left: 10px;
position: relative;
}
.goods-info .collect::before{
  content:'';
  position: absolute;
  width: 14px;
  height: 14px;
  left: -15px;
  top: -2px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>