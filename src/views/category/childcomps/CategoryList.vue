<template>
  <div id="categorylist">
    <ul v-for="item in info" class="">
      <li class="categoryitem"><a :href="item.link"><img :src="item.image" alt=""><span>{{item.title}}</span></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    info:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  data () {
    return {
      
    };
  },
  components: {},
  mounted () {},
  methods: {}
}
</script>

<style  scoped>
#categorylist{
  display:flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.categoryitem{
  width:33.3%
}
</style>