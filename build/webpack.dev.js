const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const helpers = require('./helpers');
const vueLoaderConfig = require('./vue-loader.conf');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: { app: './src/main.ts', },
    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    // resolve TypeScript and Vue file
    resolve: {
        extensions: ['.ts', '.vue', '.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@app': helpers.root('src/app')
        }
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue-loader', options: vueLoaderConfig },
            { test: /\.ts$/, loader: 'vue-ts-loader', options: vueLoaderConfig }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html'}),
        new webpack.DefinePlugin({
            'process.env': require('../src/environments/dev.env')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    devServer: {
        clientLogLevel: 'error',
        historyApiFallback: true,
        hot: true,
        compress: true,
        overlay: true,
        stats: 'minimal',
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: true,
        }
    },
};
