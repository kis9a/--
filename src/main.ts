import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueKinesis from "vue-kinesis";

const app = createApp({});
app.config.isCustomElement = (tag) => tag.startsWith("ion-");
createApp(App).use(store).use(router).use(VueKinesis).mount("#app");
