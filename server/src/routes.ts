import express from 'express';

const routes = express.Router();

routes.get('/users', (req, res) => {
    console.log('Hello People');

    res.json({'result':'Hello World!'});
});

export default routes;