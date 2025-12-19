import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
  title: "知识库",

  // 主题配置
  // https://vitepress.dev/zh/reference/default-theme-config#default-theme-config
  themeConfig: {
    // 导航栏上 - Logo
    // https://vitepress.dev/zh/reference/default-theme-config#logo
    logo: { src: '/favicon.ico', width: 24, height: 24 },

    // 导航栏 - 菜单
    // https://vitepress.dev/zh/reference/default-theme-config#nav
    nav: [
      {
        text: 'Installation',
        link: '/guide/getting-started'
      },
      {
        text: 'Options',
        link: '/guide/options'
      },
      {
        text: 'Changelog',
        link: 'changelog'
      }
    ],

    // 导航栏 - 社交帐户链接
    // https://vitepress.dev/zh/reference/default-theme-config#sociallinks
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
    ],

    // 页脚配置
    // https://vitepress.dev/zh/reference/default-theme-config#footer
    footer: {
      message: 'Power By VitePress',
      copyright: ''
    },

    // 本地搜索
    // https://vitepress.dev/zh/reference/default-theme-search
    search: {
      provider: 'local'
    },
  },

};

const vitePressSidebarOptions = [
  {
    documentRootPath: '/',
    scanStartPath: 'math',
    basePath: '/math/',
    resolvePath: '/math/',
    useTitleFromFileHeading: true
  },
  {
    documentRootPath: '/',
    scanStartPath: 'chemistry',
    basePath: '/chemistry/',
    resolvePath: '/chemistry/',
    useTitleFromFileHeading: true
  }, {
    documentRootPath: '/',
    scanStartPath: 'csharp',
    basePath: '/csharp/',
    resolvePath: '/csharp/',
    useTitleFromFileHeading: true
  }, {
    documentRootPath: '/',
    scanStartPath: 'manual',
    basePath: '/manual/',
    resolvePath: '/manual/',
    useTitleFromFileHeading: true
  }
];

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));