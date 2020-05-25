const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./", // 将部署应用程序的基本URL，打包要加上
  outputDir: "dist", // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
  lintOnSave: "error", // 设置eslint报错时停止代码编译
  productionSourceMap: false, // 不需要生产环境的 source map（减小dist文件大小，加速构建）
  devServer: {
    open: true, // npm run serve后自动打开页面
    host: "localhost", // 匹配本机IP地址(默认是0.0.0.0)
    port: 8080, // 开发服务器运行端口号
    https: false
    // proxy: {
    //   '/api': {
    //      target: '', // 代理接口地址，设置你调用的接口域名和端口号
    //      secure: false, // 如果是https接口，需要配置这个参数
    //      changeOrigin: true, // 是否跨域
    //      pathRewrite: {
    //        '^/api': '' //需要rewrite的, 这里理解成以'/api'开头的接口地址，把/api代替target中的地址
    //     }
    //   }
    // }
  },
  // 向 webpack 的预处理器 loader 传递选项。你可以使用 vue.config.js 中的 css.loaderOptions 选项。
  // 比如你可以这样向所有 Sass/Less 样式传入共享的全局变量
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/style/index.sass"`
      },
      scss: {
        prependData: `@import "~@/assets/style/index.scss";`
      },
      postcss: {
        plugins: [
          require("postcss-px-to-viewport")({
            unitToConvert: "px",
            viewportWidth: 750,
            unitPrecision: 3,
            propList: ["*"],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: /(\/|\\)(node_modules)(\/|\\)/,
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    // 设置路径别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@style", resolve("src/assets/style"))
      .set("@images", resolve("src/assets/images"))
      .set("@js", resolve("src/assets/js"));
  }
};
