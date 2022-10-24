const prodConfig = require('./webpack.prod');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()
const {merge} = require('webpack-merge')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

// 使用smp.wrap方法,把生产环境配置传进去,由于后面可能会加分析配置,所以先留出合并空位
module.exports = smp.wrap(merge(prodConfig, {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
}))