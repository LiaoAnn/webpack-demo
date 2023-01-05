const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: "inline-source-map",
    output: {
        filename: '[name].[contenthash].js]',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }, {
                test: /\.(png|jpg|svg|jpeg|gif)$/i,
                type: "asset/resource"
            }, {
                test: /.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "Webpack Demo"
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    devServer: {
        static: "./dist"
    }
}