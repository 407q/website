import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createClient } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: '32m',
  apiKey: process.env.VITE_MICROCMS_KEY!
})

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes: async (paths) => {
      // microCMSから記事一覧を取得
      const data = await client.getList({ endpoint: 'blogs' })
      const blogRoutes = data.contents.map((post: { id: string }) => `/blogs/${post.id}`)
      
      return [...paths, ...blogRoutes]
    }
  }
})