const path = require('path');
const webpack = require('webpack');
const nodeExternals = require("webpack-node-externals");
const StartServerPlugin = require("start-server-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ReactJssHmrPlugin = require('react-jss-hmr/webpack')

const envs = {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
}

const serverPlugins = [
    new CleanWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
        "process.env": envs
    }),   
];

const clientPlugins = serverPlugins.concat(new webpack.optimize.OccurrenceOrderPlugin());

if (process.env.NODE_ENV === 'development') {
    serverPlugins.push(new StartServerPlugin("server.js"));
}

const serverConfig = {
    entry: [path.resolve( __dirname, 'src/index.ts')],
    watch: process.env.NODE_ENV === 'development',
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
            },
            { test: /\.css$/, loader: 'ignore-loader' }
        ],
    },
    
    plugins: serverPlugins,

    output: {
        filename: 'server.js',
        path: path.resolve( __dirname, 'dist')
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [
            path.resolve( __dirname, 'src'),
            'node_modules'
        ],
        alias: {
            '@app': path.resolve(__dirname, 'src')
        },
        plugins: [
            new ReactJssHmrPlugin(),
        ]
    },
};

const clientConfig = {
    entry: process.env.NODE_ENV === 'development' ? [
        "webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr",
        "./src/client/index.tsx"
    ] : ["./src/client/index.tsx"],
    watch: process.env.NODE_ENV === 'development',
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
        ],
    },

    plugins: clientPlugins,

    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx'],
        modules: [
            path.resolve( __dirname, 'src'),
            'node_modules'
        ],
        alias: {
            '@app': path.resolve(__dirname, 'src')
        },
        plugins: [
            new ReactJssHmrPlugin(),
        ]
    },

    output: {
        publicPath: path.resolve(__dirname, "src/client/"),
        path: path.join(__dirname, "/src/server/static/js/"),
        filename: "bundle.js"
    }
};

module.exports = [serverConfig, clientConfig];