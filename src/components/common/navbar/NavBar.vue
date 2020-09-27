<template>
  <div id="nav-bar">
<div class="left"><slot name="left"></slot></div>
<div class="center"><slot name="center"></slot></div>
<div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
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
#nav-bar{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
   box-shadow: -3px 0 3px rgba(0, 0, 0, 0.1);
}
.center{
  flex: 1;
}
.left,.right{
width: 60px;
}
</style>