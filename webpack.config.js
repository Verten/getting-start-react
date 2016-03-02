var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

//独立打包样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var debug = process.env.NODE_ENV !== "prod"; // or dev

var config = {
    plugins: [
        /*new webpack.HotModuleReplacementPlugin(),*/
        new ExtractTextPlugin("style.css")
    ],

    entry: debug ? ['webpack/hot/dev-server',path.resolve(__dirname, 'src/App.js')] : [path.resolve(__dirname, 'src/App.js')],

    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            'react': pathToReact
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js',
    },
    module: {
        loaders: [
            {
                //编译js或者jsx文件
                test: /\.jsx?$/,
                loader: 'babel'
            },
            {
                //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理, "-loader"其实是可以省略不写的，多个loader之间用“!”连接起来 'style!css!sass?sourceMap'
                test: /\.scss$/,
                loader:  debug? 'style!css!sass?sourceMap' : ExtractTextPlugin.extract(['css','sass'])
            }
        ],
        noParse:[pathToReact]
    }
};

module.exports = config;