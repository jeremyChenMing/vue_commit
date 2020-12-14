<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="dotCla">
      something is wrong!{{dot}}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      dot: '!!!'
    }
  }
};
</script>
<style lang="less" scoped>
.dotCla{
  color: red;
  font-size: 20px;
}
</style>
