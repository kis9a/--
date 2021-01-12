import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

const app = createApp({});
app.config.isCustomElement = (tag) => tag.startsWith("ion-");
createApp(App).use(router).mount("#app");
