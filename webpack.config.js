const path = require('path');
const webpack = require('webpack');
const nodeExternals = require("webpack-node-externals");
const StartServerPlugin = require("start-server-webpack-plugin");
const CleanPlugin = require("clean-webpack-plugin");

const ROOT = path.resolve( __dirname, 'src');
const DESTINATION = path.resolve( __dirname, 'dist');

const serverConfig = {
    entry: [ROOT+"/index.ts"],
    watch: true,
    mode: "development",
    devtool: "sourcemap",
    target: "node",

    externals: [nodeExternals({ whitelist: ["webpack/hot/poll?1000"] })],

    module: {
        rules: [
            {
                test: /\.ts|\.tsx?$/,
                use: [
                    'ts-loader',
                    {
                        loader: "babel-loader",
                        options: {
                            babelrc: false,
                            presets: [
                                ["@babel/preset-env", { modules: "auto" }],
                                "@babel/preset-react",
                                "@babel/preset-typescript"
                            ],
                            plugins: [
                                "@babel/transform-regenerator",
                                "@babel/plugin-transform-runtime",
                            ]
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    
    plugins: [
        new StartServerPlugin("main.bundle.js"),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],

    output: {
        filename: '[name].bundle.js',
        path: DESTINATION
    },

    resolve: {
        extensions: ['.ts', '.tsx'],
        modules: [
            ROOT,
            'node_modules'
        ],
        alias: {
            '@app': path.resolve(__dirname, 'src')
        }
    },
};

const clientConfig = {
};

module.exports = serverConfig;