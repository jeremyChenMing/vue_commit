<!-- vt -->
<template>
  <div class="about">about {{ value }}</div>
</template>

<script>
//import name from 'path';

export default {
  components: {},
  data() {
    return {
      value: 1
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.about {
  width: 100%;
}
</style>
