/**
 * File: vite.config.ts
 * Role: Build/dev configuration for React + Tailwind (Vite)
 * Notes:
 *  - Keeps visuals unchanged; adds clarity, DX, and deploy safety.
 *  - Uses Tailwind v4 plugin (@tailwindcss/vite).
 *  - Aliases "@/..." to "src/..." for cleaner imports.
 */

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// ------------------------------------------------------------
// Vite Config
// ------------------------------------------------------------
// Use function form so we can adapt to mode (dev/prod) + env vars.
// ------------------------------------------------------------
export default defineConfig(({ mode }) => {
  // Load .env files and expose variables prefixed with VITE_
  const env = loadEnv(mode, process.cwd(), '')
  const isProd = mode === 'production'

  return {
    // --------------------------------------------------------
    // Base path (useful when deploying under a subfolder)
    // e.g., set VITE_BASE=/my-app/ for GitHub Pages
    // --------------------------------------------------------
    base: env.VITE_BASE || '/',

    // --------------------------------------------------------
    // Plugins
    // --------------------------------------------------------
    plugins: [
      react(),         // Fast Refresh, JSX, etc.
      tailwindcss(),   // Tailwind v4 integration
    ],

    // --------------------------------------------------------
    // Module Resolution
    // --------------------------------------------------------
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // import from '@/components/...'
      },
    },

    // --------------------------------------------------------
    // Dev Server
    // --------------------------------------------------------
    server: {
      host: true,       // accessible on LAN
      port: 5173,       // standard Vite port
      strictPort: true, // fail if port is taken (explicitness > magic)
      open: true,       // auto-open browser
    },

    // --------------------------------------------------------
    // Preview Server (vite preview)
    // --------------------------------------------------------
    preview: {
      host: true,
      port: 4173,
    },

    // --------------------------------------------------------
    // Build
    // --------------------------------------------------------
    build: {
      target: 'es2020',
      outDir: 'dist',
      assetsDir: 'assets',
      cssCodeSplit: true,
      sourcemap: env.VITE_SOURCEMAP === 'true' ? true : !isProd, // opt-in prod maps with VITE_SOURCEMAP=true
      rollupOptions: {
        output: {
          // Small, predictable vendor split for cacheability.
          manualChunks: {
            react: ['react', 'react-dom'],
          },
        },
      },
    },

    // --------------------------------------------------------
    // Define compile-time constants (optional)
    // --------------------------------------------------------
    define: {
      __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
    },

    // Where to read .env files from (default is project root)
    envDir: '.',
  }
})
