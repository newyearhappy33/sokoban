import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
// import router from "./router/router";
import "nes.css/css/nes.min.css";
import "./assets/fonts/fonts.css";

const pinia = createPinia();

createApp(App).use(pinia).mount("#app");
