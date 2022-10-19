const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, "../src/index.tsx"), // 入口文件
  output: {
    filename: "static/js/[name].js", // 每个输出的js文件名称
    path: path.join(__dirname, "../dist"), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,但webpack5内置了
    publicPath: "/", // 打包后文件的公共前缀路径
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/, // 匹配ts和tsx
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      inject: true, // 自动注入静态资源
    })
  ]
};