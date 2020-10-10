<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import PullUp from '@better-scroll/pull-up'

export default {
  name: "",
  data() {
    return {
      scroll: null,
    };
  },
  components: {},
  props: {
    probeType: {
      type: Number,
      default: 1,
    },
    click: {
      type: Boolean,
      default: true,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // ref如果绑定在组件中，那么通过this.$refs.refname获取到的是一个组件对象
    // ref如果绑定在普通的元素中，那么通过this.$refs.refname获取到的是一个元素对象
    // 在我们的实际工作中，列表的数据往往都是异步获取的，因此我们初始化 better-scroll 的时机需要在数据获取后，
    setTimeout(() => {
      this.scroll = new BScroll(
        this.$refs.wrapper,
        {
          // button 可以不受false的影响 div有影响
          click: true,
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad,
        },
        20
      );
      // 监听滚动位置
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
      /* beforeScrollStart - 滚动开始之前触发
       scrollStart - 滚动开始时触发
       scroll - 滚动时触发
       scrollCancel - 取消滚动时触发
       scrollEnd - 滚动结束时触发
       touchend - 手指移开屏幕时触发
       flick - 触发了 fastclick 时的回调函数
       refresh - 当 better-scroll 刷新时触发
       destroy - 销毁 better-scroll 实例时触发 */
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
        // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
         this.scroll.finishPullUp();
      });
    }, 20);
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style scoped>
</style>