
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import electron from 'vite-plugin-electron/simple'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [
    react(),

    electron({
      main: {
        entry: resolve(projectRoot, 'electron/main.ts'),
      },

      preload: {
        input: resolve(projectRoot, 'electron/preload.ts'),
      },
    }),
  ],
})
