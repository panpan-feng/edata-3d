module.require = {
  configureWebpack: {
    plugins: [
      
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variable.scss";` //引入全局变量   
 
      }
    }
  }
}