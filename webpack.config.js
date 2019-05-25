const path = require('path');
const webpack = require('webpack');
const nodeExternals = require("webpack-node-externals");
const StartServerPlugin = require("start-server-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const serverConfig = {
    entry: [path.resolve( __dirname, 'src/index.ts')],
    watch: true,
    mode: "development",
    devtool: "sourcemap",
    target: "node",
    node: {
        __filename: true,
        __dirname: true
    },
    externals: [nodeExternals({ whitelist: ["webpack/hot/poll?1000"] })],

    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            babelrc: false,
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                                "@babel/preset-typescript"
                            ],
                            plugins: [
                                "@babel/transform-regenerator",
                                "@babel/plugin-transform-typescript",
                                "@babel/plugin-transform-runtime",
                                "react-hot-loader/babel",
                            ]
                        }
                    },{
                        loader: 'ts-loader',
                    }
                ],
                exclude: /node_modules/
            }
        ],
    },
    
    plugins: [
        new StartServerPlugin("server.js"),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify({ 'NODE_ENV': 'dev' })
        }),
    ],

    output: {
        filename: 'server.js',
        path: path.resolve( __dirname, 'dist')
    },

    resolve: {
        extensions: ['.ts', '.tsx'],
        modules: [
            path.resolve( __dirname, 'src'),
            'node_modules'
        ],
        alias: {
            '@app': path.resolve(__dirname, 'src')
        }
    },
};

const clientConfig = {
    entry: [
        "webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr",
        "./src/client/index.tsx"
    ],
    watch: true,
    mode: "development",
    target: "web",
    devtool: "sourcemap",

    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                use: [
                    'react-hot-loader/webpack',
                    {
                        loader: "babel-loader",
                        options: {
                            babelrc: false,
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                                "@babel/preset-typescript"
                            ],
                            plugins: [
                                "@babel/transform-regenerator",
                                "@babel/plugin-transform-typescript",
                                "@babel/plugin-syntax-dynamic-import",
                                ["@babel/plugin-transform-runtime", { useESModules: true }],
                                "react-hot-loader/babel",
                            ]
                        }
                    },
                    {
                        loader: 'ts-loader',
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify({ 'NODE_ENV': 'dev' })
        }),
    ],

    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx'],
        modules: [
            path.resolve( __dirname, 'src'),
            'node_modules'
        ],
        alias: {
            '@app': path.resolve(__dirname, 'src')
        }
    },

    output: {
        publicPath: path.resolve(__dirname, "src/client/"),
        path: path.resolve(__dirname, "src/server/static/js"),
        filename: "bundle.js"
    }
}

module.exports = [serverConfig, clientConfig];