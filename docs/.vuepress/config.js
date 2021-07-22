const {fs, path} = require('@vuepress/shared-utils');

module.exports = ctx => ({
  dest: './dist',
  locales: {
    '/': {
      title: 'Qnone',
      description: 'xyj-vue-components-前端文档'
    }
  },
  head: [
    ['link', {rel: 'icon', href: `/logo.png`}]
  ],
  themeConfig: {
    editLinks: true,
    repo: 'vuejs/vuepress',
    docsDir: 'packages/docs/docs',
    smoothScroll: true,
    locales: {
      '/': {
        label: '简体中文',
        nav: require('./nav'),
        sidebar: {
          '/xyj-vue-components/': getGuideSidebar()
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true]
  ]
});

function getGuideSidebar() {
  return [
    {
      title: '更新日志',
      collapsable: false,
      children: [
        ''
      ]
    },
    {
      title: '开发指南',
      collapsable: false,
      children: [
        'dev'
      ]
    },
    {
      title: '仅基于VUE组件',
      collapsable: false,
      children: [
        'Notification',
        'Loading',
        'Drag',
        'Wave',
        'currentTime',
      ]
    },
    {
      title: '基于Element组件',
      collapsable: false,
      children: [
        'element-components/pagination'
      ]
    }
  ];
}

