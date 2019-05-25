import App from '@app/client/app';
import * as express from 'express';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

const router = express.Router();

const Html = (body: string) => `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Sieve of Eratosthenes</title>
        </head>
        <body>
            <div id="app">${body}</div>
            <script type="text/javascript" src="static/js/bundle.js"></script>
        </body>
    </html>
`;

router.get('/', (req, res) => {
    res.send(Html(ReactDOMServer.renderToString(<App />)));
});

export default router;
