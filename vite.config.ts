import vue from '@vitejs/plugin-vue'
import vuejsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    vuejsx(),
    dts({
      outDir: 'es',
    }),
  ],
  build: {
    rollupOptions: {
      external: ['vue', '@arco-design/web-vue', 'lodash-es', '@vueuse/core'],
      output: [
        {
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
          
        },
      ],
    },
    lib: {
      entry: './src/main.ts',
    },
  },
})
