import { defineConfigWithTheme } from 'vitepress'
import mdItCustomAttrs from 'markdown-it-custom-attrs'

export default defineConfigWithTheme({
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/gitalk/dist/gitalk.css' }],
    ['script', { src: 'https://unpkg.com/gitalk/dist/gitalk.min.js' }],
    [
      'link',
      { rel: 'stylesheet', href: '/font/Blueaka/Blueaka.css' },
    ],
    [
      'link',
      { rel: 'stylesheet', href: '/font/Blueaka_Bold/Blueaka_Bold.css' },
    ],
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
    menuList: [
      { name: '首页', url: '' },
      { name: '标签', url: 'tags/' },
      { 
        name: '脑叶wiki', 
        url: 'LobotomyCorpWiki/index.html',
        items: [
          { name: '异常档案', url: '/LobotomyCorpWiki/abnormalities/' },
          { name: '部门介绍', url: '/LobotomyCorpWiki/departments/' },
          { name: '职员管理', url: '/LobotomyCorpWiki/staff/' },
        ],
      },
    ],
    videoBanner: false,
    name: "Sensei's 部落格 | Lobotomy Corporation档案馆",
    welcomeText: 'Hello, Sensei',
    motto: ['和你的日常，就是奇迹', '直面恐惧，创造未来。','何気ない日常で、ほんの少しの奇跡を見つける物語。','FACE THE FEAR,BUILD THE FUTURE.'],
    social: [
      { icon: 'github', url: 'https://github.com/bf2967252373/' },
      { icon: 'bilibili', url: 'https://www.bilibili.com/' },
      { icon: 'qq', url: 'https://im.qq.com/index/' },
      { icon: 'wechat', url: 'https://weixin.qq.com/' },
    ],
    footerName: 'Sensei & Lobotomy Wiki',
    poweredList: [
      { name: 'VitePress', url: 'https://github.com/vuejs/vitepress' },
      { name: 'GitHub Pages', url: 'https://pages.github.com/' },
    ],
    selectText: '选择语言',
    label: '中文',
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
