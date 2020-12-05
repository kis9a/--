import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";


// Vue.config.ignoredElements = [/^ion-/]
const app = createApp({})
app.config.isCustomElement = tag => tag.startsWith("ion-");
createApp(App).use(store).use(router).mount("#app");
