import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Express server');
});

export default app;
