/*global module, process*/
"use strict";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: '#eval-cheap-module-source-map',
    entry: './example/main.js',
    output: {
        path: './example/dist/',
        filename: 'bundle.js',
    },
    resolve: {
        alias: {
            'react-steps': path.resolve(__dirname, 'dist/react-steps.js')
        }
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: 'bundle.js.map'
        }),
        new webpack.optimize.UglifyJsPlugin({
            exclude: /node_modules/,
            compress: {warnings: false},
            sourceMap: true,
            mangle: false
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|dist)/,
                loader: 'babel'
            }
        ]
    }
};
