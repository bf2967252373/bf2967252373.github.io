import { defineConfigWithTheme } from 'vitepress'
import mdItCustomAttrs from 'markdown-it-custom-attrs'

export default defineConfigWithTheme({
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/gitalk/dist/gitalk.css' }],
    ['script', { src: 'https://unpkg.com/gitalk/dist/gitalk.min.js' }],
    ['link', { rel: 'stylesheet', href: '/font/Blueaka/Blueaka.css' }],
    ['link', { rel: 'stylesheet', href: '/font/Blueaka_Bold/Blueaka_Bold.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js' }],
  ],
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'http://xn--ykq07jmvm4vtba978f345d.top/',
  },
  title: "Sensei's 部落格 - Lobotomy Corporation Wiki",
  description: "Sensei's 部落格与Lobotomy Corporation的详细资料库",
  themeConfig: {
    // 导航菜单配置
    nav: [
      { text: '首页', link: '/' },  // 使用根目录的相对路径
      { text: '标签', link: '/tags/' },  // 使用正确的相对路径
      { text: '脑叶wiki', link: '/LobotomyCorpWiki/' },  // 确保指向正确的脑叶wiki页面
    ],
    sidebar: [
      {
        text: '部门',
        items: [
          { text: '控制部', link: '/LobotomyCorpWiki/departments/Malkuth' },
          { text: '情报部', link: '/LobotomyCorpWiki/departments/Yesod' },
          { text: '安保部', link: '/LobotomyCorpWiki/departments/Netzach' },
          { text: '培训部', link: '/LobotomyCorpWiki/departments/Hod' },
        ],
      },
      {
        text: '异常档案',
        items: [
          { text: 'ZAYIN', link: '/LobotomyCorpWiki/abnormalities/ZAYIN' },
          { text: 'TETH', link: '/LobotomyCorpWiki/abnormalities/TETH' },
          { text: 'HE', link: '/LobotomyCorpWiki/abnormalities/HE' },
          { text: 'WAW', link: '/LobotomyCorpWiki/abnormalities/WAW' },
          { text: 'ALEPH', link: '/LobotomyCorpWiki/abnormalities/ALEPH' },
        ],
      },
      {
        text: '职员',
        items: [
          { text: '职员介绍', link: '/LobotomyCorpWiki/staff/staff1' },
          { text: '文职介绍', link: '/LobotomyCorpWiki/staff/staff2' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bf2967252373/' },
      { icon: 'bilibili', link: 'https://www.bilibili.com/' },
    ],
    footerName: 'Sensei & Lobotomy Wiki',
    poweredList: [
      { name: 'VitePress', link: 'https://github.com/vuejs/vitepress' },
      { name: 'GitHub Pages', link: 'https://pages.github.com/' },
    ],
  },
  markdown: {
    theme: 'github-dark',
    lineNumbers: true,
    math: true,
    config: (md) => {
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': 'gallery',
      })
    },
  },
})
