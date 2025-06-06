import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import vueJsx from "@vitejs/plugin-vue-jsx"; // Import the Vue JSX plugin
import Components from "unplugin-vue-components/vite"; // Import the Vue components plugin
import Import from "unplugin-auto-import/vite"; // Import the auto import plugin
import { PrimeVueResolver } from "@primevue/auto-import-resolver"; // Import the PrimeVue resolver
import UnoCSS from "unocss/vite"; // Import UnoCSS

// @ts-expect-error process is a nodejs global
const host = process.env.TAURI_DEV_HOST;

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [
    vue(),
    vueJsx(), // Add the Vue JSX plugin
    Components({
      resolvers: [PrimeVueResolver()],
      dts: "src/interfaces/components.d.ts",
      directoryAsNamespace: true,
    }),
    Import({
      imports: ["vue"],
      dts: "src/interfaces/auto-imports.d.ts",
      eslintrc: {
        enabled: true,
      },
    }),
    vueDevTools(),
    UnoCSS(),
  ],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
