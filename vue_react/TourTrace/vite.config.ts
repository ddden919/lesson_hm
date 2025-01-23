import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
// 预先加载UI 组件库
import Components from 'unplugin-vue-components/vite'
// 引入vant 组件 编译阶段 自动引入 快
import { VantResolver } from '@vant/auto-import-resolver'
// 在构建过程中，unplugin - vue - components 插件会扫描你的代码，查找所有被使用的 Vue 组件标签（例如 < van - button >）。
// 它然后调用配置的解析器（如 VantResolver）来确定这些标签对应的组件路径。
// VantResolver 会根据标签名映射到正确的 Vant 组件模块，并将其路径返回给 unplugin - vue - components。
// 最后，unplugin - vue - components 根据返回的路径自动生成必要的导入语句，并将它们插入到代码中。

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'wc-waterfall'
        }
      }
    }),
    Components({
      resolvers: [
        VantResolver()
      ]
    })
  ],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url))
      '@': path.resolve(__dirname, 'src')
    }
  },
  
})