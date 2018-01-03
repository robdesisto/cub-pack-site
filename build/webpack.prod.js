const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const helpers = require('./helpers');

module.exports = {
    entry: {
        main: './src/main.ts'
    },
    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'vue'],
        modules: ['node_modules'],
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
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader"
                }),
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
    devtool: 'source-map',
    plugins: [
        new CleanPlugin(['dist'], { root: helpers.root() }),
        new HtmlWebpackPlugin({ template: 'src/index.html'}),
        new webpack.DefinePlugin({
            'process.env': require('../src/environments/prod.env')
        }),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin('styles.[hash].css'),
        new CopyWebpackPlugin(
            [
                { from: helpers.root('src/assets'), to: helpers.root('dist/assets') },
                { from: helpers.root('_redirects'), to: helpers.root('dist') },
            ]
        ),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
        })
    ]
};
