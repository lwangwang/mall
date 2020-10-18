<template>
  <div class="goods-list">
<goods-list-item :goodslist="item" v-for="(item) in goods" :key="item.id"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: '',
  data () {
    return {
      
    };
  },
  props:{
    goods:{
    type:Array,
    default(){
      return []
    }
    }
  },
  components: {
    GoodsListItem
    },
  mounted () {},
  methods: {}
}
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  }

</style>