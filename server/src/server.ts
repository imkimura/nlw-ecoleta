import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('Hello People');

    res.json({'result':'Hello World!'});
});

app.listen(3333);