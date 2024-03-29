import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@src': fileURLToPath(new URL('./src', import.meta.url)),
            '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@main': fileURLToPath(new URL('./src/main', import.meta.url)),
            '@models': fileURLToPath(new URL('./src/models', import.meta.url)),
            '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
        },
    },
});
