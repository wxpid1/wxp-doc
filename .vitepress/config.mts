import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "wxp-docs",
  description: "个人网站",
  themeConfig: {
    //右侧导航栏
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '文档', link: '/docs' }
    ],

    // 左侧菜单
    sidebar: [
      {
        text: '文档',
        items: [
          { text: 'Java入门到精通', link: '/docs/be/Java入门到精通' },
          { text: '4小时通关前端工程化', link: '/docs/fe/4小时通关前端工程化' }
        ]
      }
    ],

    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
