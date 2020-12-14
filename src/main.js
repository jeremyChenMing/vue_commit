import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// const _ = require("lodash");
require("lodash");
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
