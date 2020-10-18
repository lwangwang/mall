<template>
  <div id="category">
  <div>
    <van-sidebar v-model="activeKey">
        <van-sidebar-item :title="item.title" v-for="(item,maitKey) in list" :key="item.maitKey" @click="itemclick" />
  </van-sidebar>
  </div>
 <div>
    <category-list :props="info" />
 </div>
  </div>
</template>

<script>
import CategoryList from "views/category/childcomps/CategoryList"
import { getCategory,getSubCategory, } from "network/category"
export default {
  name: '',
  data () {
    return {
      activeKey: 0,
      list:{},
      info:{},
    };
  },
  watch:{
activeKey(active){

}
  },
  created(){
    // 分类左侧侧边栏
    getCategory().then(res=>{
      this.list=res.data.data.category.list
      console.log('左侧分类',this.list)
    })
//     getSubCategory(this.list[this.activeKey].maitKey).then(res=>{
// console.log(res)
//     })

  },
  components: {CategoryList},
  mounted () {
    
  },
  methods: {
    itemclick(){
        getSubCategory(this.list[this.activeKey].maitKey).then(res=>{
          this.info=res.data.data.list
          console.log('右侧内容',this.info)
    })
    }
  }
}
</script>

<style scoped>

#categorylist{
width:100%;
position: absolute;
height: 500px;
top:0;
background-color: skyblue;
}
</style>