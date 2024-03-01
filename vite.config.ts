import vue from '@vitejs/plugin-vue'
import vuejsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue(), vuejsx(), dts()],
  build: {
    rollupOptions: {
      external: ['vue', '@arco-design/web-vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry: './src/main.ts',
      name: 'arconify',
      formats: ['es'],
      fileName: 'index',
    },
  },
})
