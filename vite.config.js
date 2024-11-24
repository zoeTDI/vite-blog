import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import legacy from "@vitejs/plugin-legacy";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        legacy({
            targets: ["defaults", "not IE 11"]
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    base: './'
    // server: {
    //     proxy: {
    //         '/api': {
    //             target: '',
    //             changeOrigin: true,
    //             pathRewrite: { '^/api': '' }
    //
    //         }
    //     }
    // }
})