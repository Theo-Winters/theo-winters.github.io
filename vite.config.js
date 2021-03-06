const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  assetsInclude: ['/fonts/*.json'],
  build: {
    outDir: resolve(__dirname, 'docs'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact', 'index.html'),
        examples: resolve(__dirname, 'examples', 'index.html')
      }
    }
  }
})