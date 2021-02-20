module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts'
    }
  },
  chainWebpack: config => {
    // ts Loader
    config.module
      .rule('ts')
      .test(/\.tsx?$/)
      .use('babel-loader')
        .loader('ts-loader')
        .end()
  },
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json']
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
