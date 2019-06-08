const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const serverConfig = {
    target: 'node',
    entry: ['@babel/polyfill', './server/service.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/lib.bundle.js'
    },
    mode: 'development',
    devServer: {
        contentBase: './public',
        port: 3300
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    }
};

const clientConfig = {
    entry: {
        polyfill: '@babel/polyfill',
        index: './src/scripts/index.js',
        login: './src/scripts/login.js',
        register: './src/scripts/register.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].bundle.js'
    },
    devServer: {
        contentBase: './public',
        port: 3300
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hardware Store',
            filename: 'index.html',
            template: './src/shopping/index.html',
            chunks: ['polyfill', 'index']
        }),
        new HtmlWebpackPlugin({
            title: 'Login',
            filename: 'login.html',
            template: './src/auths/login.html',
            chunks: ['polyfill', 'login']
        }),
        new HtmlWebpackPlugin({
            title: 'Register',
            filename: 'register.html',
            template: './src/auths/register.html',
            chunks: ['polyfill', 'register']
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
}

module.exports = [clientConfig /*, serverConfig*/ ];

/**
 * I like this 
 * const path = require('path');
const serverConfig = {
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.node.js'
  }
  //…
};

const clientConfig = {
  target: 'web', // <=== can be omitted as default is 'web'
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js'
  }
  //…
};

module.exports = [ serverConfig, clientConfig ];

 */