const svelte = require('@svitejs/vite-plugin-svelte');
const preprocess = require('svelte-preprocess');
const { defineConfig } = require('vite');

module.exports = defineConfig(({ command, mode }) => {
    const isProduction = mode === 'production';
    return {
        plugins: [
            svelte({
                preprocess: preprocess({
                    postcss: true
                }),
                hot: !isProduction,
                emitCss: true
            })
        ],
        publicDir: "static",
        build: {
            minify: isProduction
        }
    }
})