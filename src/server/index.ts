import mainRouter from '@app/server/routers/main';
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';

import * as express from 'express';

const config = require('../../webpack.config.js');
const compiler = webpack(config[1]);

const app = express();

app.use(morgan());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
    webpackDevMiddleware(compiler, {
        historyApiFallback: true,
        hot: true,
        publicPath: config[1].output.publicPath,
    }),
);

app.use(require('webpack-hot-middleware')(compiler));

console.log(path.join(__dirname, '/static'));

app.use('/static', express.static(path.join(__dirname, '/static')));

app.use(mainRouter);

export default app;
