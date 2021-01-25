module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/vue-dashboard/'
  : '/',
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
};