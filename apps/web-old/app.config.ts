import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import icons from "unplugin-icons/vite";

defineConfig({
  vite: {
    plugins: [tailwindcss(), icons({ compiler: "solid" })],
  },
});
