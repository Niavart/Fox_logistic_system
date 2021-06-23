const Mode = require('frontmatter-markdown-loader/mode')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/fox_logistic_system/' : '/',
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('frontmatter-markdown-loader')
        .loader('frontmatter-markdown-loader')
        .tap(options => {
          return {
            mode: [Mode.HTML]
          }
        })
  }
}
