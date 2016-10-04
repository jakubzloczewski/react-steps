/*global module, process*/
"use strict";
var webpack = require('webpack');
var path = require('path');

module.exports = {
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            sourceMap: false,
            mangle: true
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
