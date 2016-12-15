module.exports = {
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'tslint'
            }
        ],

        loaders: [
            {
                test: /.json$/,
                loaders: [
                    'json'
                ]
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
    plugins: [],
    debug: true,
    devtool: 'source-map',
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
    ts: {
        configFileName: 'tsconfig.json'
    },
    tslint: {
        configuration: require('../tslint.json')
    }
};
