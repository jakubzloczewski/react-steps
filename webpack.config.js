/*global module, process*/
"use strict";

var dev = process.env.NODE_ENV === 'development';

module.exports = {
    devtool: dev ? 'source-map' : null,
    entry: './example/main.js',
    output: {
        path: './example/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'style!css?localIdentName=' + ( dev ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]' ) + '!less'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?stage=1'
            }
        ]
    }
};
