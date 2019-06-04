const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './public',
        port: 3300
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: this.mode === 'development' ? '[name].css' : '[name].[hash].css',
            chunkFilename: this.mode === 'development' ? '[id].css' : '[id].[hash].css'
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /.s(a|c)ss$/,
            loader: [
                this.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]',
                        camelCase: true,
                        sourceMap: this.mode === 'development'
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: this.mode === 'development'
                    }
                }
            ]
        }, {
            test: /\.s(a|c)ss$/,
            exclude: /\.(s(a|c)ss)$/,
            loader: [
                this.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: this.mode === 'development'
                    }
                }
            ]
        }]
    }
};