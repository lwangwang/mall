<template>
  <div class="base-info" v-if="Object.keys(goods).length!==0">
   <div class="price">
     <span><i class="uiprice">￥</i><span class="infoprice">{{goods.newPrice}}</span></span>
     <span>{{goods.oldPrice}}</span>
     <span class="discount">{{goods.discount}}</span>
   </div>
   <div class="title">{{goods.title}}</div>
   <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
   </div>
   <div class="info-services">
     <span v-for="item in goods.services.length-1" :key="item"> 
       <img :src="goods.services[item-1].icon" alt="">
       <span>{{goods.services[item-1].name}}</span>
     </span>
   </div>
  </div>
</template>

<script>
export default {
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  name: '',
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
.base-info{
 padding: 10px;
 border-bottom: 10px solid #f5f5f5;
}
.base-info .uiprice{
  color: #FF0036;
  font-style: normal;
  font-size: 18px;
}
.base-info .infoprice{
  color: #FF0036;
  font-size: 24px;
}
.title{
  font-size: 14px;
}
.price .discount{
  background-color: red;
  padding: 3px;
  border-radius: 25%;
}
.info-other{
  display: flex;
  margin-top: 15px;
}
.info-other span{
  flex: 1;
  font-size: 12px;
  text-align: center;
}
.info-services{
  padding: 10px 0 0 0;
  display: flex;
  flex-direction:row;
}
.info-services img{
height:12px;
width:12px;
vertical-align: middle;
}
.info-services span{
  vertical-align: middle;
  font-size: 10px;
  flex: 1;
}
</style>