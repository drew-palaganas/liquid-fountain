const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('../package.json');
const autoprefixer = require('autoprefixer');

module.exports = {
    module: {
        loaders: [
            {
                test: /.json$/,
                loaders: [
                    'json'
                ]
            },
            {
                test: /\.(css|scss)$/,
                loaders: ExtractTextPlugin.extract({
                    fallbackLoader: 'style',
                    loader: 'css?minimize!sass!postcss'
                })
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: [
                    'ng-annotate',
                    'ts'
                ]
            },
            {
                test: /.html$/,
                loaders: [
                    'html'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    {
                        loader: 'file-loader',
                        query: {
                            name: 'src/assets/images/[name].[ext]'
                        }
                    }

                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: conf.path.src('index.html')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {unused: true, dead_code: true, warnings: false} // eslint-disable-line camelcase
        }),
        new ExtractTextPlugin('index-[contenthash].css'),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor'})
    ],
    postcss: () => [autoprefixer],
    output: {
        path: path.join(process.cwd(), conf.paths.dist),
        filename: '[name]-[hash].js'
    },
    resolve: {
        extensions: [
            '',
            '.webpack.js',
            '.web.js',
            '.js',
            '.ts'
        ],
        modules: [`./${conf.path.src('app')}`, '../node_modules']
    },
    entry: `./${conf.path.src('app/index.module')}`,
    ts: {
        configFileName: 'tsconfig.json'
    },
    tslint: {
        configuration: require('../tslint.json')
    }
};