import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
// import { viteSingleFile } from 'vite-plugin-singlefile'
import simpleHtmlPlugin from 'vite-plugin-simple-html';
import viteCompression from 'vite-plugin-compression';
const __dirname = dirname(fileURLToPath(import.meta.url))
export default defineConfig({
//   plugins: [viteSingleFile()],
  plugins: [
    simpleHtmlPlugin({
      minify: true,
    }),
    viteCompression()
  ],
  root: resolve(__dirname, "src"),
  build: {
   emptyOutDir: true,
   outDir: resolve(__dirname, "dist"),
   //  minify: "esbuild",
    cssCodeSplit: false,
   //  assetsInlineLimit: 100_000_000,
    rollupOptions: {
      inlineDynamicImports: true,
      input: {
         main: resolve(__dirname, 'src/index.html'),
         // home: resolve(__dirname, 'src/home/index.html'),
      }
    }
  }
})