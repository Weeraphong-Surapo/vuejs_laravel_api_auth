import { createApp } from "vue";
import { createPinia } from "pinia";
import { useAuthStore } from "@/stores/auth";
import '../node_modules/nprogress/nprogress.css' 


import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// Use Pinia with the app
const pinia = createPinia();
app.use(pinia);

// Create a Pinia store instance after using Pinia
const authStore = useAuthStore();

authStore.me().then(() => {
  app.use(router).mount("#app");
});

