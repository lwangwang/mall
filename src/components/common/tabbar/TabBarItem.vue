<template>
    <div class="tab-bar-item" @click="itemclick">
     <div v-if="!isactive"><slot name="item-icon"></slot></div>
     <div v-else><slot name="item-icon-active"></slot></div>
     <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data () {
    return {
      
    };
  },
  computed:{
    isactive(){
      // 点击获取活跃的路径为true 其他为false
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      // 传入的颜色 activeColor
return this.isactive?{color:this.activeColor}:{}
    }
  },
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'pink'
    }
  },
  components: {},
  mounted () {},
  methods: {
    itemclick(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

</style>