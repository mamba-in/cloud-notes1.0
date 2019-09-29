const utils = require('./utils')

module.exports = {
  title: 'Cloud-Notes',
  description: '聚沙成塔，集腋成裘',
  base: '/cloud-notes/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '收藏',
        link: '/repository/'
      },
      {
        text: '文章',
        link: '/article/'
      },
      {
        text: '问题',
        link: '/issues/'
      },
      {
        text: '总结',
        link: '/notes/'
      }
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    repo: 'mamba-in/cloud-notes',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 3
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-148988824-1'
      }
    ]
  ]
}
