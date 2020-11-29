const { merge } = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')
module.exports = merge(common, {
    mode: 'production',
    plugins: [new UglifyJSPlugin()],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            exclude: /node_modules/
                        },
                    },
                ],
            }, 
        ],
    },
})