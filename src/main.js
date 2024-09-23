import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import VCurrencyField from "v-currency-field";

Vue.config.productionTip = false;

Vue.use(Vuetify);

Vue.use(VCurrencyField, {
  locale: "pt-BR",
  decimalLength: 2,
  autoDecimalMode: true,
  min: null,
  max: null,
  defaultValue: 0,
  valueAsInteger: false,
  allowNegative: false,
});

const vuetify = new Vuetify({
  theme: { dark: false },
  icons: {
    iconfont: "mdi",
  },
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
