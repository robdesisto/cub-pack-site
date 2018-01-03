const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const helpers = require('./helpers');

module.exports = {
    entry: {
        main: './src/main.ts'
    },
    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@app': helpers.root('src/app')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        scss: 'vue-style-loader!css-loader!sass-loader',
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                    // other vue-loader options go here
                },
                exclude: [/\.scss$/]
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.scss/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: [/\.vue/]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        compress: true,
        stats: 'minimal',
        contentBase: helpers.root('dist')
    },
    performance: {
        hints: false
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html'}),
        new webpack.DefinePlugin({
            'process.env': require('../src/environments/dev.env')
        }),
        new webpack.NamedModulesPlugin(),
        new CopyWebpackPlugin(
            [
                { from: helpers.root('src/assets'), to: helpers.root('dist/assets') },
            ]
        )
    ]
};
