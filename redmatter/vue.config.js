module.exports = {
  chainWebpack: config => {
    // ts Loader
    config.module
      .rule('ts')
      .test(/\.tsx?$/)
      .use('babel-loader')
        .loader('ts-loader')
        .end()
  }
}