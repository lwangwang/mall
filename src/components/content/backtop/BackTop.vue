<template>
  <div class="back-top" >
    <img src="~assets/img/common/top.png" alt="">
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
  methods: {
  }
}
</script>

<style  scoped>
.back-top{
  position:fixed;
  bottom: 55px;
  right: 6px;
  z-index: 99999;
}
.back-top img{
  width: 45px;
  height: 45px;
}
</style>