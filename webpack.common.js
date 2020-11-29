const path = require('path')
const { Configuration } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
/**
 * @type {Configuration}
 */
module.exports = {
    entry: {
        app: './src/main.js',
    },
    output: {
        filename: '[name].bundle.js'
    },
    //快速定位错误信息
    devtool: 'eval-cheap-module-source-map',
    //web服务器实现热更新
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8010,
        hot: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'vue-cli',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        less: [
                            //lang属性对应的名称
                            'vue-style-loader', //首先给vue的样式loader过滤一遍
                            'css-loader', //css-loader,把css转js
                            'less-loader', //用less编译
                        ],
                    },
                },
            },
            {
                test: /\.less$/,
                use: ['vue-style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10 * 1024,
                            esModule: false,
                            mimetype: false,
                        },
                    },
                ],
            },
        ],
    },
}
