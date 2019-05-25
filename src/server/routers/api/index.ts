import * as express from 'express';

const apiRouter = express.Router();

apiRouter.get('/prime/:limit', (req, res) => {
    const { limit } = req.params;
    res.send(limit);
});

export default apiRouter;
