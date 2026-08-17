import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cesium from 'vite-plugin-cesium'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cesium()],
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.exr'],
  base: './',
  server: {
    port: 3000,
    open: true,
    host: true,
  }
})
