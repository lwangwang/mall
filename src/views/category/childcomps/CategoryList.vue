<template>
  <div id="categorylist">
    <ul  class="" >
      <li class="categoryitem" v-for="item in info" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" alt="分类产品" /><span>{{ item.title }}</span></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    info: {
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
};
</script>

<style  scoped>
#categorylist {
 margin: 19px 7px 0;
 display: block;
}
#categorylist ul{
  width:100%;
  display: block;
}
.categoryitem {
  float: left;
  text-align: center;
  width: 32.8%;
}
</style>