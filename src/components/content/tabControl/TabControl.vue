<template>
  <div class="tab-control">
   <div v-for="(item,index) in titles" :key="item.id" 
   @click="tabControl(index)" 
   :class="{active:index===currentIndex}" class="tab-control-item">
     <span>{{item}}</span>
   </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:['titles'],
  data () {
    return {
      currentIndex:0
    };
  },
  components: {},
  mounted () {},
  methods: {
tabControl(index){
   this.currentIndex=index
   this.$emit('showTab',index)
},
  
  }
}
</script>

<style scoped>
.tab-control{
  display:flex;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  
}
.tab-control-item{
  flex: 1;
}
.tab-control-item span{
  padding: 6px;
}
.active{
  color: var(--color-high-text);
}
.active span{
   border-bottom: 3px solid var(--color-tint);
}
</style>