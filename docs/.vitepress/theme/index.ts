// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Theme from "vitepress/theme";
import "./style.css";
import "uno.css";

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.use(pinia)
  },
};
