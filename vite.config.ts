import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"
import dts from "vite-plugin-dts"
import preserveDirectives from 'rollup-preserve-directives'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tsconfigPaths(), 
    dts({ rollupTypes: true, tsconfigPath: './tsconfig.app.json' })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.tsx'),
      name: '@bluevoid/ui',
      // the proper extensions will be added
      formats: ['es'],
      fileName: 'bluevoid-ui',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', "react-dom", "react/jsx-runtime"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
      plugins:[
        preserveDirectives()
      ]
    },
  },
  resolve: {
		alias: {
			// /esm/icons/index.mjs only exports the icons statically, so no separate chunks are created
			"@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs",
		},
	},
})
