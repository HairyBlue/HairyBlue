import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
// import { viteSingleFile } from 'vite-plugin-singlefile'
import simpleHtmlPlugin from 'vite-plugin-simple-html';
// import viteCompression from 'vite-plugin-compression';
// import { viteStaticCopy } from 'vite-plugin-static-copy'

const __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
  //   plugins: [viteSingleFile()],
  plugins: [
    simpleHtmlPlugin({
      minify: true,
    }),
    // viteCompression()
  ],
  root: '.',
  build: {
    emptyOutDir: true,
    outDir: resolve(__dirname, 'dist'),
    assetsDir: 'assets',
    minify: 'esbuild',
    cssCodeSplit: false,
    // assetsInlineLimit: 100_000_000,
    rollupOptions: {
      // inlineDynamicImports: true,
      // preserveEntrySignatures: false,
      input: {
        index: resolve(__dirname, 'index.html'),
        techs: resolve(__dirname, 'pages/techs.html'),
        robots: resolve(__dirname, 'robots.txt'),
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});
