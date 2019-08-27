module.exports = {
  baseUrl: './', // 打包换成/
  outputDir: 'dist',
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      vue: 'Vue',
      axios: 'axios',
    },
  },
};
