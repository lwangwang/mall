<template>
  <div class="shop">
    <div class="shoplogo">
      <img :src="shopinfo.shopLogo" alt="" />
      <span>{{ shopinfo.name }}</span>
    </div>
    <div class="shop-center">
        <div class="tab_item  tab_item1">
          <p class="num">{{ shopinfo.sell | sellcount}}</p>
          <p class="desc">总销量</p>
        </div>
        <div class="tab_item">
          <p class="num">{{ shopinfo.good }}</p>
          <p class="desc">全部宝贝</p>
        </div>
        <div class="evaluation" >
          <div class="evaluation_wrap">
            <div class="evaluation_list low" v-if="Object.keys(shopinfo).length!==0">{{shopinfo.score[0].name}}<span class="evaluation_list_head" :class="{'scroll-better':shopinfo.score[0].isBetter}">{{shopinfo.score[0].score}}</span></div>
            <div class="evaluation_list low" v-if="Object.keys(shopinfo).length!==0">{{shopinfo.score[1].name}}<span class="evaluation_list_head" :class="{'scroll-better':shopinfo.score[1].isBetter}">{{shopinfo.score[1].score}}</span></div>
            <div class="evaluation_list low" v-if="Object.keys(shopinfo).length!==0">{{shopinfo.score[2].name}}<span class="evaluation_list_head" :class="{'scroll-better':shopinfo.score[2].isBetter}">{{shopinfo.score[2].score}}</span></div>
          </div>
        </div>
    </div>
    <div class="action">
      <a href="">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    shopinfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
  filters:{
  sellcount(value){
      let result=value
      if(result>10000){
        result=(result/10000).toFixed(1)+'万'
        return result
      }
  }
  }
};
</script>

<style scoped>
.shop {
  padding: 10px;
  border-bottom: 10px solid #f5f5f5;
}
.shoplogo img {
  width: 54px;
  height: 54px;
  vertical-align: middle;
  border-radius: 50%;
}
.shoplogo span {
  vertical-align: middle;
  font-size: 16px;
  margin-left: 4px;
}
.action {
  padding: 10px 0;
  text-align: center;
}
.action a {
  border: 1px solid rgba(255, 0, 54, 0.5);
  border-radius: 12px;
  height: 24px;
  line-height: 22px;
  font-size: 13px;
  color: rgba(255, 0, 54, 0.8);
  padding: 3px 20px;
}
.shop-center {
  padding:10px;
  display:flex;
}
.tab_item {
  position: relative;
  padding: 2px 0;
  text-align: center;
  flex:1;
}
.tab_item1::after {
  content: "";
  width: 0;
  display: block;
  border-right: 1px solid #ddd;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
}
.tab_item .num {
  margin-bottom: 3px;
  font-size: 14px;
}
.tab_item .desc {
  margin-top: 3px;
  font-size: 12px;
  color: #999;
}

.evaluation .evaluation_wrap .evaluation_list{
    margin-right: 5px;
    font-size:10px;
    padding:2px;
    color: #999;
}
.evaluation .evaluation_wrap .evaluation_list .evaluation_list_head{
font-size:10px;
margin-left:5px;
color:#18c461;
}
.evaluation .evaluation_wrap .evaluation_list .scroll-better{
  color:#e4393c;
}
</style>