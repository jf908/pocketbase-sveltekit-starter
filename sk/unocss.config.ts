import {
  defineConfig,
  presetUno,
  presetTypography,
  presetIcons,
  transformerVariantGroup,
  transformerDirectives,
} from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte';

export default defineConfig({
  extractors: [extractorSvelte()],
  presets: [
    presetUno(),
    presetTypography(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
