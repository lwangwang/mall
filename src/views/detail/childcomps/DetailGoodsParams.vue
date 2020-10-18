<template>
  <div class="param-info" v-if="Object.keys(detailparams).length!==0">
    <table
      v-for="(item, index) in detailparams.rule.tables"
      class="info-size"
    >
      <tr v-for="(tr, indey) in item">
        <td v-for="(td, indez) in tr">{{ td }}</td>
      </tr>
    </table>
    <table
      class="info-param" v-if="Object.keys(detailparams).length!==0"
      v-for="(prams, ind) in detailparams.info.set"
    >
      <tr>
        <td class="info-param-key">{{ prams.key }}</td>
        <td class="param-value">{{ prams.value }}</td>
      </tr>
    </table>
    <div class="info-img">
      <img :src="detailparams.info.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    detailparams: {
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

<style scoped>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}

.param-info table {
  width: 100%;
  border-collapse: collapse;
}

.param-info table tr {
  height: 42px;
}

.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
  overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}

.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.param-value {
  color: #eb4868;
}

.info-img img {
  width: 100%;
}
</style>