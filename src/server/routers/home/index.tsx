import App from '@app/client/app';
import * as express from 'express';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import {JssProvider, SheetsRegistry} from 'react-jss';

const router = express.Router();

const sheets = new SheetsRegistry();

const Html = (body: string) => `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Visual Algorithms</title>
            <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
            <style type="text/css">
                body {
                    padding: 0px;
                    margin: 0px;
                    fontSize: 16px;
                    font-family: 'Raleway', sans-serif;
                }
            </style>
            <style type="text/css" id="server-side-styles">
                ${sheets.toString()}
            </style>
        </head>
        <body>
            <div id="app">${body}</div>
            <script type="text/javascript" src="static/js/bundle.js"></script>
        </body>
    </html>
`;

router.get('/', (req, res) => {
    res.send(Html(ReactDOMServer.renderToString(
            (
                <JssProvider registry={sheets}>
                    <App />
                </JssProvider>
            ),
        )));
});

export default router;
