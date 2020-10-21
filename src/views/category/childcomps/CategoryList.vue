<template>
  <div id="categorylist">
    <ul class="categoryitem">
      <li class="item-product" v-if="info.length" v-for="item in info" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" v-lazy="item.image" alt="分类产品" /><p>{{ item.title }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props:{
    info:{
      type:Array,
      default(){
        return []
      },
    },
  },
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
#categorylist {


}
#categorylist .categoryitem {
  width:100%;
  height: 100%;
  /* flex-wrap: wrap;
  display: flex;
justify-content: space-around; */
}
#categorylist .categoryitem .item-product{
display: block;
text-align: center;
width: 32.8%;
float: left;
}

#categorylist .categoryitem .item-product img{
  width: 70px;
  height: 70px;
}
#categorylist .categoryitem .item-product p{
margin: 10px 0;
}
</style>