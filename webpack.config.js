var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'app');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: APP_DIR + '/index.html',
    filename: 'index.html',
    inject: 'body'
});

var isProd = process.env.NODE_ENV === 'production';

var bundName = 'bundle.js?t=' + new Date().getTime();

var config = {
    resolve: {
        root: path.resolve(__dirname),
        alias: {
        }
    },
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: bundName,
        publicPath: "/"
    },
    devtool: !isProd ? 'source-map' : null,
    plugins: [
        HTMLWebpackPluginConfig,
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    module: {
        loaders: [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel'
            },
            {
                test: /\.(_css|_scss)$/,
                loaders: ['style', 'css', 'postcss', 'sass']
            },
            {
                test: /\.(css|scss)$/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'postcss',
                    'sass'
                ]
            }
        ]
    },
    postcss: function () {
        return [autoprefixer]
    }

};

module.exports = config;
