import { defineConfig } from "vite";
import VueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  ssr: {
    noExternal: ["element-plus"],
  },
  plugins: [VueDevTools()],
});
