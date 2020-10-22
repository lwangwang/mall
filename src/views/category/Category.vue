<template>
  <div id="category">
   <div class="rootlist">
      <van-sidebar v-model="activeKey">
      <van-sidebar-item
        :title="item.title" 
        v-for="(item, maitKey) in list"
        :key="item.maitKey"
        @click="itemclick"
      />
    </van-sidebar>
   </div>
   <div class="itemcontent">
    <category-list v-if="list.length" :info="info" />
    </div>
  </div>
</template>

<script>
import CategoryList from "views/category/childcomps/CategoryList";
import { getCategory, getSubCategory } from "network/category";
export default {
  name: "",
  data() {
    return {
      activeKey: 0,
      list: {},
      info: [],
    };
  },
  watch: {
    activeKey(active) {
// 数据变化之后才会监听到
    },
  },
async created() {
    // 分类左侧侧边栏
   await getCategory().then((res) => {
      this.list = res.data.data.category.list;
      // console.log("左侧分类", this.list);
    });
    await this.itemclick(this.activeKey)
  },
  components: { CategoryList },
  mounted() {

  },
  methods: {
    itemclick(activeKey) {
    //  console.log(activeKey);
    let maitKey=this.list[this.activeKey].maitKey
    // 向服务器发送请求获取分类信息
      getSubCategory(maitKey).then((res) => {
        this.info = res.data.data.list;
        console.log("右侧内容", this.info);
      });
    },

  },
};
</script>

<style scoped>
#category .rootlist{
  width: 30%;
  overflow: hidden;
  overflow-y: auto; 
  /* height: 100vh; */
}
.van-sidebar {
  padding-bottom: 32px;
}
.itemcontent{
  overflow: hidden;
  overflow-y: auto;
  /* height: 100vh; */
  padding: 20px 7px 0;
  width: 100%;
  font-size: 12px; 
  box-sizing: border-box;
}
#category {
  display: flex;
 height: calc(100vh - 20px);
/* height: 100vh; */
}
#categorylist {
  flex: 1;
}
</style>