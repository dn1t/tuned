import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "waku/config";
import { config } from "dotenv";

config({ path: "../../.env", quiet: true });

export default defineConfig({
  vite: {
    plugins: [tailwindcss(), react(), babel({ presets: [reactCompilerPreset()] })],
  },
});
