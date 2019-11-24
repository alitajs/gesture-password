module.exports = (ctx) => ({
  title: 'GesturePassword',
  dest: 'public',
  description: '美观好用的手势密码组件',
  theme: '@vuepress/vue',
  themeConfig: {
    editLinks: true,
    smoothScroll: true,
    nav: [
      {
        text: '文档',
        link: '/guide/'
      },
      {
        text: '示例',
        link: '/examples/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/alitajs/gesture-password'
      }
    ],
    sidebar: {}
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    ['@vuepress/medium-zoom', true]
  ]
});
