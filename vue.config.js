const path = require('path');//引入path模块
function resolve(dir) {
  return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
  lintOnSave: false,

  devServer: {
    port: 9090,
    open: true,
    proxy: {
      "/api": {
        target: process.env.VUE_APP_BASE_IP,
        ws: true,
        changeOrigin: true,
        pathRewrite: {'^/api': ''}
      },

    }
  },
  chainWebpack: config => {
    config.resolve.alias
      //set第一个参数：设置的别名，第二个参数：设置的路径
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('assets', resolve('./src/assets'))
      .set('commonjs', resolve('./src/commonjs'))
      .set('network', resolve('./src/network'))
      .set('views', resolve('./src/views'))
    config.plugin('html')
      .tap(args => {
        args[0].title = '我的钱包'
        return args
      })

  },

};
