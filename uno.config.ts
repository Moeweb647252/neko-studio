import {
  defineConfig,
  presetWind4,
  transformerVariantGroup,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  presets: [presetWind4()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
