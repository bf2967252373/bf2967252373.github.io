import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme({
  lang: 'zh-CN',
  title: 'Lobotomy Corporation Wiki',
  description: '详细的Lobotomy Corporation资料库',
  themeConfig: {
    menuList: [
      { name: '首页', url: '/LobotomyCorpWiki/' },
      { name: '异常档案', url: '/LobotomyCorpWiki/abnormalities/' },
      { name: '部门介绍', url: '/LobotomyCorpWiki/departments/' },
      { name: '职员管理', url: '/LobotomyCorpWiki/staff/' },
    ],
    videoBanner: false,
    name: "Lobotomy Corporation",
    welcomeText: '欢迎来到Lobotomy Corporation档案馆',
    motto: ['恐惧与痛苦，孕育伟大。', '管理好你的异常，确保公司的生存。'],
    social: [
      { icon: 'github', url: 'https://github.com/bf2967252373/' },
    ],
    footerName: 'Lobotomy Wiki',
    poweredList: [
      { name: 'VitePress', url: 'https://github.com/vuejs/vitepress' },
      { name: 'GitHub Pages', url: 'https://pages.github.com/' },
    ],
    // 选择界面
    selectText: '选择语言',
    label: '中文',
    sidebar: [
      {
        text: '部门',
        items: [
          { text: '控制团队', link: '/LobotomyCorpWiki/departments/control-team' },
          { text: '信息团队', link: '/LobotomyCorpWiki/departments/info-team' },
          // 添加其他部门
        ]
      },
      {
        text: '异常',
        items: [
          { text: '001-002', link: '/LobotomyCorpWiki/abnormalities/001-002' },
          { text: '003-004', link: '/LobotomyCorpWiki/abnormalities/003-004' },
          // 添加更多异常档案
        ]
      },
    ],
  },
  markdown: {
    lineNumbers: true,
    theme: 'github-dark',  // 更适合Lobotomy的暗色风格
    config: (md) => {
      // 其他Markdown插件配置
    },
  },
})
