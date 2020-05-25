//@vue/cli 4.3.1
const path = require('path');
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
    lintOnSave: true,
    chainWebpack: (config) => {

    },
    configureWebpack: (config) => {

    },
    productionSourceMap: false,
    css: {
        extract: false,
        sourceMap: true,
        requireModuleExtension: true,
        loaderOptions: {
            scss: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.sass` 这个文件
                // 注意：在 sass-loader v7 中，这个选项名是 "data"
                prependData: `@import "~@/styles/main.scss";`
            }
        }
    },
    parallel: require('os').cpus().length > 1,
    pwa: {},
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8080,
        // proxy: {
        //     '/api': 'http://localhost:3000'
        // },
        https: false,
        hot: true,
        hotOnly: false,
        overlay: {
            warnings: true,
            errors: true
        },
        before: app=> {
        }
    },
    pluginOptions: {
        foo: {
            // 插件可以作为 `options.pluginOptions.foo` 访问这些选项。
        }
    }
}