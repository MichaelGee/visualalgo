import apiRouter from '@app/server/routers/api';
import homeRouter from '@app/server/routers/home';

import * as bodyParser from 'body-parser';
import morgan from 'morgan';
import * as path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const express = require('express');

const config = require('../../webpack.config.js');
const compiler = webpack(config[1]);

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
    app.use(
        webpackDevMiddleware(compiler, {
            historyApiFallback: true,
            hot: true,
            publicPath: config[1].output.publicPath,
        }),
    );

    app.use(webpackHotMiddleware(compiler));
}

app.use('/static', express.static(path.join(__dirname, '/static')));

app.use(homeRouter);

app.use(apiRouter);

export default app;
