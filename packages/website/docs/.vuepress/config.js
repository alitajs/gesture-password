module.exports = (ctx) => ({
  title: 'GesturePassword',
  dest: 'public',
  description: '美观好用的手势密码组件',
  theme: '@vuepress/vue',
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/numerify/lib/index.umd.min.js' }]
  ],
  themeConfig: {
    editLinks: true,
    smoothScroll: true,
    nav: [
      {
        text: '指南',
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
    ['@vuepress/medium-zoom', true],
    'demo-block'
  ]
});
