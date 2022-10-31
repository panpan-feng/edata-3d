module.exports = {
  configureWebpack: {
    plugins: [],
  },
  devServer: {
    host: 'localhost',
    port: 7000,
    hot: true,
    open: true,
  },
  chainWebpack: (config) => {
    // 修复HMR
    config.resolve.symlinks(true);
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variable.scss";`, //引入全局变量
      },
    },
  },
};
